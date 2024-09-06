'use client';

import DropArea from "@/components/dropArea";
import Loader from "@/components/loader";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center dark:text-F9FAFBCC">
        {!isLoading
          ? <DropArea isLoading={isLoading} setIsLoading={setIsLoading} />
          : <Loader />}
      </section>
    </main>
  );
}
