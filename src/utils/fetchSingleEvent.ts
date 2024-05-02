import { eventoTypes } from "@/types/eventTypes";

const fetchEvent = async ({ slug }: { slug: string }): Promise<eventoTypes> => {
  const responce = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: eventoTypes = await responce.json();

  return event;
};

export { fetchEvent };
