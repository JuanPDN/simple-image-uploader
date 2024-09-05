import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className='flex items-center gap-3 font-semibold text-sm'>
            <Image
                src="/logo-small.svg"
                alt="logo"
                width={22}
                height={26}
                priority
            />
            <p>ImageUpload</p>
        </Link>
    )
}