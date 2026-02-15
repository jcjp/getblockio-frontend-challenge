export const runtime = "edge";

import { Separator } from "@/components/ui/separator";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <Hero />

        <Separator className="w-full my-14 opacity-15" />

        <footer className="flex flex-col items-center justify-center w-full">
        </footer>
      </div>
    </main>
  );
}
