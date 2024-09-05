'use client'

import Image from "next/image"
import toggleTheme from "@/handlers/handlerTheme"

export default function Theme() {

    return (
        <label htmlFor="theme"
            className="bg-FFFFFF p-2 rounded-xl border border-E5E7EB dark:bg-4D5562/80 dark:border-4D5562">
            <input id="theme" type="checkbox" className="hidden peer" onChange={toggleTheme} />
            <Image
                className="block peer-checked:hidden select-none"
                src="/Moon_fill.svg"
                alt="Dark mode"
                height={24}
                width={24}
                priority
            />
            <Image
                className="hidden peer-checked:block select-none"
                src={"/Sun_fill.svg"}
                alt="Light mode"
                height={24}
                width={24}
                priority
            />
        </label>
    )
}