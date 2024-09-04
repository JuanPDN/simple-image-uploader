import Image from "next/image"
export default function LightTheme() {
    return (
        <Image
            src="/Sun_fill.svg"
            alt="theme"
            height={24}
            width={24}
            priority
        />
    )
}