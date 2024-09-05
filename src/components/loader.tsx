export default function Loader() {
    return (
        <div className="flex flex-col gap-4 dark:bg-212936 bg-FFFFFF py-8 px-20 max-w-[480px] w-full rounded-lg shadow-lg">
            <p className="text-[12px] text-center font-light dark:text-F9FAFBCC">
                <span className="font-semibold">Uploading</span>, please wait..
            </p>
            <div className="bg-E5E7EB dark:bg-4D5562 h-[6px] rounded-full w-full overflow-hidden relative">
                <div className="absolute bg-3662E3 w-14 h-full rounded-full animate-loader"></div>
            </div>
        </div>
    )
}