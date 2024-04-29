'use client'

import { useRouter } from "next/navigation"
import React, { useState } from "react"

const SearchForm = () => {

    const [search, setsearch] = useState<string>("")
    const router = useRouter()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/events/${search}`)
    }


    return (
        <form onSubmit={handleSubmit} className="w-full sm:w-[580px]" >
            <input
                className="w-full h-16 rounded-lg bg-white/[7%] outline-none ring-accent/50 focus:ring-2
                focus:bg-white/10 transition px-3"
                type="text"
                placeholder="Search events in any city ... "
                spellCheck={false}
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setsearch(e.target.value)}

            />
        </form>
    )
}

export default SearchForm