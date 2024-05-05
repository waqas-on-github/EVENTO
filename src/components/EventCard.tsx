"use client"

import { EventoEvent as eventoTypes } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }: { event: eventoTypes }) => {

    return (
        <Link href={`/event/${event.slug}`} className=" flex flex-col max-w-[500px] relative flex-1 basis-80 h-[380px] bg-white/[3%] rounded-xl overflow-hidden  state_effect " >
            <Image
                src={event.imageUrl}
                alt={event.name}
                width={500}
                height={80}
                className="h-[60%] object-cover" />

            <div className="flex flex-col items-center justify-center flex-1 ">

                <h2 className="text-2xl font-semibold" >{event.name}</h2>
                <p className="italic  text-white/75" >By {event.organizerName}</p>
                <p className="text-sm text-white/50 mt-4" >{event.location}</p>
            </div>
            <section className="absolute flex flex-col items-center justify-center  bg-black/30 rounded-md left-[12px] top-[12px] h-[45px] w-[45px]" >
                <p className="text-xl font-bold -mb-[5px] ">{new Date(event.date).toLocaleDateString("en-US", { day: "2-digit" })}</p>
                <p className="text-xs text-accent uppercase">{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</p>
            </section>
        </Link>
    )
}

export default EventCard