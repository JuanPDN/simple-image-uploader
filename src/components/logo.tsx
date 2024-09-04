import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/logo.svg"
                alt="logo"
                width={120}
                height={26}
                priority
            />
        </Link>
    )
}