import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <Sidebar>
      <section className="mx-4 h-full">
        <div className="flex flex-col gap-4 lg:gap-10">
          <h1 className="text-5xl font-extrabold text-gray-100 text-center ">
            CopyGenius generate{" "}
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-cyan-400">
              effective marketing copys{" "}
            </span>
            with artificial intelligence
          </h1>
          <p className="py-10 md:py-14 text-xl md:text-3xl text-center text-neutral-400">
            Personalized copies that fit your audience and objectives. "Save
            time and effort by letting CopyGenius AI take over the writing of
            your marketing copy."
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" legacyBehavior>
              <a className=" py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full w-full sm:w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Try for free
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Sidebar>
  );
}
