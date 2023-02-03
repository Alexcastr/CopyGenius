import { FC, useState, useContext } from "react";
import Link from "next/link";
// import { StaticImageData } from "next/image";
// import Image from "next/image";
// import copygenius from "../public/copygenius.png";
import { Footer } from "./Footer";
import { ToggleMenu } from "./ToggleMenu";

import { AiFillContainer, AiOutlineHome } from "react-icons/ai";
import { UIContext } from '../context/UIcontext';

// interface ImageProps {
//   copygenius: StaticImageData;
// }

interface Props {
  children: React.ReactNode;
}

export const Sidebar: FC<Props> = ({ children }) => {
  const {sideMenuOpen} = useContext(UIContext)
  


  return (
    <div className="relative h-full md:flex">
      <ToggleMenu />

      {/* sidebar */}
      <section
        className={`${
          sideMenuOpen ? "-translate-x-full " : ""
        }  bg-slate-900 text-blue-100 w-64 h-screen space-y-6 py-7 px-2 absolute z-20 inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="sticky left-0 top-7 ">
          <nav className="pl-4 pt-4">
            <Link href="/" legacyBehavior>
              <a className="block py-2.5 px-4 hover:bg-cyan-900 hover:text-white rounded transition duration-200">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiOutlineHome />
                  </span>{" "}
                  Home
                </div>
              </a>
            </Link>
            <Link href="/dashboard" legacyBehavior>
              <a className="block py-2.5 px-4 hover:bg-cyan-900 hover:text-white rounded transition duration-200">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiFillContainer />
                  </span>{" "}
                  Dashboard
                </div>
              </a>
            </Link>
          </nav>
        </div>
      </section>

      <main className=" bg-gray-800 flex-1 text-2xl font-bold text-gray-700 pt-16 h-screen sm:max-h-full">
        {children}
      <Footer/>
      </main>
    </div>
  );
};
