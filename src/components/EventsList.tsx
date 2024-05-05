import { EventoEvent as eventoTypes } from "@prisma/client";
import EventCard from "./EventCard"
import { fetchEventsByCity } from "@/utils/fetchers"
import { Pcontrols } from "./Pcontrols";

export type CityType = {
    city: string
    page?: number
}

type cityFetcherType = {
    page: number, totalCount: number, events: eventoTypes
}
const EventsList = async ({ city, page = 1 }: CityType) => {

    let { events, totalCount } = await fetchEventsByCity({ city: city, page: page }) as cityFetcherType

    if (!Array.isArray(events) || events.length === 0) {
        return <div> no events found </div>
    }

    return (<>
        <section className="max-w-[1100px] flex items-center gap-10 justify-center flex-wrap px-[20px] ">

            {events.map((event) => (
                <EventCard key={event?.id} event={event} />
            ))}
            <Pcontrols city={city} page={page} totalCount={totalCount} />
        </section>
    </>
    )
}

export default EventsList