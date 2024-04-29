import H1 from "@/components/H1";
import { eventoTypes } from "@/types/eventTypes";
import Image from "next/image";

const EventSlug = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug

  const responce = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
  const event: eventoTypes = await responce.json()


  return (
    <main>
      <section className=" relative h-[50vh]    overflow-hidden flex items-center justify-center" >


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
            <button className=" bg-white/20 text-lg capitalize mt-5 w-full py-1 border-white/10 border-2 rounded-md " >Get Tickets </button>
          </div>

        </div>


      </section>


      <div>
      </div>
    </main>
  )
}

export default EventSlug