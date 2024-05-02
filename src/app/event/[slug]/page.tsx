import EventCardMain from "@/components/EventCardMain";
import SingleCardTop from "@/components/SingleCardTop";
import { fetchEvent } from "@/utils/fetchSingleEvent";
import { Metadata } from "next";


type paramsType = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: paramsType): Promise<Metadata> {
  // read route params

  const event = await fetchEvent({ slug: params.slug })

  return {
    title: `${event.name}`,
    description: event.description

  }
}



const EventSlug = async ({ params }: paramsType) => {

  const event = await fetchEvent({ slug: params.slug })


  return (
    <main>
      <SingleCardTop event={event} />
      <EventCardMain event={event} />
    </main>
  )
}

export default EventSlug