import ImageArea from "@/components/imageArea";
import Loading from "@/app/[fileID]/loading";
import { Suspense } from "react";
import Share from "@/components/buttons/share";
import Download from "@/components/buttons/download";

export default function Home({ params }: { params: { fileID: string } }) {

  const id = Number(params.fileID)

  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center dark:text-F9FAFBCC flex-col gap-6">
        <Suspense fallback={<Loading />}>
          <ImageArea id={id} />
        </Suspense>
        <div className="flex gap-2">
          <Share />
          <Download id={id} />
        </div>
      </section>
    </main>
  );
}
