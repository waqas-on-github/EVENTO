import H1 from "@/components/H1";
import HomeSecleton from "@/components/HomeSecleton";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import { Suspense } from "react";


export default function Home() {

  return (
    <Suspense fallback={<HomeSecleton />} >
    <main className="flex items-center justify-center flex-col pt-36 px-3" >
      <H1>Find events around you</H1>
      <p className="mb-7 mt-12 text-2xl lg:text-3xl opacity-75" >Browse more then <span className="font-bold italic underline text-accent" > 10,000 events</span> around you </p>

      <SearchForm />

      <section className="flex mt-4 gap-x-4 text-sm text-white/50" >
        <p>Poupolar:</p>
        <div className="space-x-2 font-semibold" >
            <Link href='/events/austin/?page=1'> Austin</Link>
            <Link href='/events/seattle/?page=1'> Seattle</Link>
        </div>
      </section>

    </main>
    </Suspense>
  );
}
