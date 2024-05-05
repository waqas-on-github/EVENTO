import EventsList from "@/components/EventsList"
import H1 from "@/components/H1"
import { capatlize } from "@/utils/funcs"
import { Metadata } from "next"
import { Suspense } from "react"
import { z } from "zod"

type paramsType = {
  params: { city: string }
  searchParams: { page: string }
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

const pageNumberSchema = z.coerce.number().int().positive().optional()

const EventsPage = async ({ params, searchParams }: paramsType) => {


  const city = params?.city
  const parsedPage = pageNumberSchema.safeParse(searchParams.page)
  if (!parsedPage.success) {
    throw new Error("invalid page number")
  }

  return (
    <main className="flex flex-col items-center min-h-[110vh] py-24 px-[20px]">
      <H1 className="mb-28">
        {city === 'all' && "All Events"}
        {city !== 'all' && `Events in ${capatlize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<> loaing ...........</>}  >
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>



    </main>
  )
}

export default EventsPage