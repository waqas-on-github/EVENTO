
import { EventoEvent as eventoTypes } from "@prisma/client";


const EventCardMain = ({ event }: { event: eventoTypes }) => {
    return (
        <div className="text-center flex flex-col items-center justify-center mt-10 gap-4 px-6 " >
            <section>
                <h2 className="text-2xl py-2" >About this event</h2>
                <p className="max-w-4xl text-lg leading-8 text-white/75 text-justify" > {event.description}</p>
            </section>

            <section className="flex items-center flex-col justify-center gap-2">
                <h2 className="text-2xl" >Location</h2>
                <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75" >{event.location}</p>

            </section>

        </div>
    )
}

export default EventCardMain