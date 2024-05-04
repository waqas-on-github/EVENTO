import Link from 'next/link'
import React from 'react'
import { CityType } from './EventsList'

export const Pcontrols = ({ city, page, totalCount }: CityType & { totalCount: number }) => {

    const pervPath = page > 1 ? `/events/${city}?page=${page - 1}` : ''
    const nextpath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : ''


    const LinkClass = 'text-white font-bold bg-black/50 text-center px-6 py-3'

    return (
        <section className='flex items-center justify-between w-full px-6  '>
            {pervPath ?
                <Link
                    className={LinkClass}
                    href={pervPath}
                >
                    Prev
                </Link> : <div />
            }

            {
                nextpath ? <Link
                    className={LinkClass}
                    href={nextpath}
                >
                    Next
                </Link> : null
            }

        </section>
    )
}
