
import EventsList from "@/components/EventsList"
import H1 from "@/components/H1"
import { capatlize } from "@/utils/funcs"
import { Metadata } from "next"

type paramsType = {
  params: { city: string }
}



export function generateMetadata(
  { params }: paramsType,
): Metadata {
  // read route params
  console.log(params.city);



  return {
    title: `${params.city == 'all' ? "events in All" : `events in ${capatlize(params.city)}`} `

  }
}





const EventsPage = async ({ params }: paramsType) => {
  const city = params?.city

  return (
    <main className="flex flex-col items-center min-h-[110vh] py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && "All Events"}
        {city !== 'all' && `Events in ${capatlize(city)}`}
      </H1>


      <EventsList city={city} />



    </main>
  )
}

export default EventsPage