'use client'
import Link from "next/link"
import Logo from "./Logo"
import { route } from "@/utils/routes"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Header() {

  const activePathname = usePathname()

  console.log(activePathname);

  return (
    <header
      className="flex items-center justify-between border-b border-white/50 h-14  px-3 sm:px-9" >
      <Logo />
      <nav className="">
        <ul className="flex items-center  h-full  justify-center gap-4">
          {route.map((r) => (
            <li key={r?.path}
              className={clsx
                (" flex flex-col items-center gap-4 h-full text-white/50 hover:text-white  transition", {
                  "text-[#ffffff] border-b border-accent transition-all ": r?.path === activePathname,
                  "text-white/50": r?.path !== activePathname


                })} >
              <Link href={`${r?.path}/?page=1`}>{r?.name} </Link>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  )
}
