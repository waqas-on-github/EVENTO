import Image from 'next/image'
import React from 'react'
import H1 from './H1'
import { EventoEvent as eventoTypes } from '@prisma/client'
import { notFound } from 'next/navigation'



const SingleCardTop = ({ event }: { event: eventoTypes }) => {



    return (
        <section className=" relative  py-10 sm:py-20  overflow-hidden flex items-center justify-center" >
            {/* background image  */}
            <Image
                src={event.imageUrl}
                className="object-cover z-0 blur-3xl"
                alt=" event backround image"
                fill
                quality={50}
                sizes="(max-width : 1280px) 100vw , 1280px"
                priority
            />

            <div className="z-1 relative flex  items-center flex-col lg:flex-row  justify-between gap-y-6 lg:gap-x-16 ">

                <Image
                    className="rounded-xl border border-white/50"
                    src={event.imageUrl}
                    width={300}
                    height={200}
                    alt={event.name}
                />

                <div>
                    <p className="text-white/75 whitespace-nowrap" >
                        {new Date(event.date).toLocaleDateString(
                            "en-US", {
                            weekday: "long",
                            month: "long",
                            day: 'numeric'
                        }
                        )}
                    </p>
                    <H1 className="mb-2 mt-1 whitespace-nowrap  lg:text-5xl" > {event.name}</H1>
                    <p className="whitespace-nowrap text-xl text-white/75" >Orgnized by <span className="italic" > {event.organizerName} </span></p>
                    <button className=" bg-white/20 text-lg capitalize mt-5 w-full py-1 border-white/10 border-2 rounded-md state_effect bg-blur" >Get Tickets </button>
                </div>

            </div>

        </section>
    )
}

export default SingleCardTop