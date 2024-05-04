import { EventoEvent as eventoTypes, PrismaClient } from "@prisma/client";
import { capatlize } from "./funcs";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

type eventCityType = {
  city: string;
  page: number;
};

const fetchEvent = async ({
  slug,
}: {
  slug: string;
}): Promise<eventoTypes | unknown> => {
  try {
    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug: slug,
      },
    });
    if (!event) {
      return notFound();
    }
    return event;
  } catch (error) {
    return error;
  }
};

// fetch events on based of city
const fetchEventsByCity = async ({
  city,
  page,
}: eventCityType): Promise<eventoTypes[] | unknown> => {
  try {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capatlize(city),
      },
      orderBy: { date: "asc" },
      take: 6,
      skip: (Number(page) - 1) * 6,
    });

    if (!events) {
      return notFound();
    }

    const totalCount = await prisma.eventoEvent.count({
      where: { city: city === "all" ? undefined : capatlize(city) },
    });

    return { events, totalCount };
  } catch (error) {
    return error;
  }
};

export { fetchEvent, fetchEventsByCity };
