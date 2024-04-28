"use client"

import { eventoTypes } from "@/types/eventTypes";
import Image from "next/image";

const EventCard = ({ event }: { event: eventoTypes }) => {
    console.log(event);

    return (
        <section className=" flex flex-col max-w-[500px] flex-1 basis-80 h-[380px] bg-white/[3%] rounded-xl overflow-hidden" >
            <Image
                src={event.imageUrl}
                alt={event.name}
                width={500}
                height={80}
                className="h-[60%] object-fit" />

            <div className="flex flex-col items-center justify-center flex-1 ">

                <h2 className="text-2xl font-semibold" >{event.name}</h2>
                <p className="italic  text-white/75" >By {event.organizerName}</p>
                <p className="text-sm text-white/50 mt-4" >{event.location}</p>

            </div>
        </section>
    )
}

export default EventCard