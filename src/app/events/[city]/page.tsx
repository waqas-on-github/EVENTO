import EventCard from "@/components/EventCard"
import EventsList from "@/components/EventsList"
import H1 from "@/components/H1"
import { eventoTypes } from "@/types/eventTypes"

type paramsType = {
  params: { city: string }
}

const EventsPage = async ({ params }: paramsType) => {
  const city = params.city

  // fetch events from third party api 
  const responce = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events?city=austin')

  const events: eventoTypes[] = await responce.json()
  console.log(events);


  return (
    <main className="flex flex-col items-center min-h-[110vh] py-24 px-[20px]">
      <H1>
        {city === 'all' && "All Events"}
        {city !== 'all' && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>


      <EventsList events={events} />



    </main>
  )
}

export default EventsPage