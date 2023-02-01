import Link from "next/link";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <Sidebar>
      <section className="grid justify-center mx-4 h-[80%]">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-100 text-center ">
            Te generamos{" "}
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-cyan-400">
              copys de marketing{" "}
            </span>
            eficaces con inteligencia artificial
          </h1>
          <p className="py-10 md:py-14 text-xl md:text-3xl text-center text-neutral-400">
            Copys personalizados que se ajusten a tu audiencia y objetivos.
            "Ahorra tiempo y esfuerzo al dejar que CopyGenius AI se encargue de
            la escritura de tus copys de marketing."
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
