import Image from "next/image"
import { handlerGetFile } from "@/handlers/handlerGetFile"

export default async function ImageArea({ id }: { id: number }) {

    const file = await handlerGetFile(id)

    return (
        <div className="bg-FFFFFF dark:bg-212936 max-w-[540px] w-full p-2 rounded-xl shadow-lg mx-2">
            {file?.name ?
                <Image
                    className="rounded-lg h-[322px] w-[524px]"
                    src={file.path}
                    alt={file.name}
                    width={524}
                    height={322}
                    priority
                /> :
                <Image
                    className="rounded-lg h-[322px] w-[524px]"
                    src={`/image_not_found.gif`}
                    alt={"not found"}
                    width={524}
                    height={322}
                    unoptimized
                    priority
                />
            }
        </div >
    )
}