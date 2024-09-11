import Image from "next/image"
import { handlerGetFile } from "@/handlers/handlerGetFile"

export default async function ImageArea({ id }: { id: number }) {

    const file = await handlerGetFile(id)

    return (
        <div className="bg-FFFFFF dark:bg-212936 max-w-[540px] w-full p-2 rounded-xl shadow-lg mx-2">
            <div
                className="border border-E5E7EB dark:border-4D5562 border-dashed rounded-lg"
            >
                {file?.name ?
                    <Image
                        className="rounded-lg"
                        src={`http://localhost:3001/${file.path}`}
                        alt={file.name}
                        width={524}
                        height={322}
                        priority
                    /> :
                    <Image
                        className="rounded-lg"
                        src={`/image_not_found.gif`}
                        alt={"not found"}
                        width={524}
                        height={322}
                        priority
                    />
                }
            </div>
        </div >
    )
}