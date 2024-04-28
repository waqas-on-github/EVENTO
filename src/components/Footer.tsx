import { routesForFooter } from "@/utils/routes"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="mt-auto flex justify-between px-6 py-6 text-xs opacity-50 border-t border-white/20" >
            <small>&copy; 2024 M.Waqas. All rights reserved. </small>
            <ul className="flex gap-3 " >
                {routesForFooter.map((route) => (
                    <li className=" opacity-50 hover:opacity-95 transition" key={route?.path}>
                        <Link href={route?.path}> {route?.name} </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer