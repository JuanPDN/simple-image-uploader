import DropArea from "@/components/dropArea";
import Loader from "@/components/loader";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center">
        <DropArea />
        {/* <Loader /> */}
      </section>
    </main>
  );
}
