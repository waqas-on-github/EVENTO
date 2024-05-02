import { eventoTypes } from "@/types/eventTypes"
import EventCard from "./EventCard"

const EventsList = async ({ city }: { city: string }) => {


    // fetch events from third party api 
    const responce = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)


    const events: eventoTypes[] = await responce.json()


    return (
        <section className="max-w-[1100px] flex items-center gap-10 justify-center flex-wrap px-[20px] ">

            {events.map((event) => (
                <EventCard key={event?.id} event={event} />
            ))}
        </section>
    )
}

export default EventsList