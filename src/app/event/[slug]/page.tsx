import EventCardMain from "@/components/EventCardMain";
import SingleCardTop from "@/components/SingleCardTop";
import { fetchEvent } from "@/utils/fetchers";
import { Metadata } from "next";
import { Suspense } from "react";
import { EventoEvent as eventoTypes } from "@prisma/client";
import { notFound } from "next/navigation";

type paramsType = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: paramsType): Promise<Metadata> {
  // read route params

  const event = await fetchEvent({ slug: params.slug }) as eventoTypes


  return {
    title: `${event.name}`,
    description: event.description

  }
}



const EventSlug = async ({ params }: paramsType) => {

  const event = await fetchEvent({ slug: params.slug }) as eventoTypes

  if (Object.values(event).length <= 1) {
    return notFound()
  }


  return (
    <Suspense fallback={<> loading single event</>} >
    <main>
      <SingleCardTop event={event} />
      <EventCardMain event={event} />
    </main>
    </Suspense>
  )
}

export default EventSlug