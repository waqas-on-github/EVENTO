import { eventoTypes } from "@/types/eventTypes"
import EventCard from "./EventCard"

const EventsList = ({ events }: { events: eventoTypes[] }) => {
    return (
        <section className="max-w-[1100px] flex items-center gap-10 justify-center flex-wrap px-[20px] ">

            {events.map((event) => (
                <EventCard key={event?.id} event={event} />
            ))}
        </section>
    )
}

export default EventsList