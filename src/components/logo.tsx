import Image from 'next/image'

export default function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={26}
            priority
        />
    )
}