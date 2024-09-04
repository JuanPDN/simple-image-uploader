import Image from "next/image"
export default function DarkTheme() {
    return (
        <Image
            src="/Moon_fill.svg"
            alt="theme"
            height={24}
            width={24}
            priority
        />
    )
}