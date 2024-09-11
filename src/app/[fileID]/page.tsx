import ImageArea from "@/components/imageArea";
import Loading from "@/app/[fileID]/loading";
import { Suspense } from "react";

export default function Home({ params }: { params: { fileID: string } }) {

  const id = Number(params.fileID)

  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center dark:text-F9FAFBCC">
        <Suspense fallback={<Loading />}>
          <ImageArea id={id} />
        </Suspense>
      </section>
    </main>
  );
}
