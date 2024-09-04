import Image from "next/image"
export default function DropArea() {
    return (
        <div className="bg-FFFFFF max-w-[540px] w-full p-2 rounded-xl shadow-lg">
            <div className=" flex flex-col items-center py-28 border border-E5E7EB border-dashed rounded-lg">
                <Image
                    src="/exit.svg"
                    alt="logo"
                    width={32}
                    height={32}
                />
                <p className="mt-5 text-sm font-medium">Drag & drop a file or
                    <label htmlFor="file" className="text-3662E3 font-light cursor-pointer"> browse files</label>
                </p>
                <p className="mt-2 text-xs font-light">JPG, PNG or GIF - Max file size 2MB</p>
                <input id="file" type="file" accept="image/*" className="hidden" />
            </div>
        </div>
    )
}