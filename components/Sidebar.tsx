import { FC, useContext } from "react";
import Link from "next/link";
// import { StaticImageData } from "next/image";
// import Image from "next/image";
// import copygenius from "../public/copygenius.png";
import { Footer } from "./Footer";
import { ToggleMenu } from "./ToggleMenu";

import { AiFillContainer, AiFillHome, AiFillEdit } from "react-icons/ai";
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
        }  bg-slate-900 text-blue-100 w-64 h-screen  space-y-6 py-7 px-2 absolute z-20 inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="sticky left-0 top-7 flex flex-col gap-80">
          <nav className="pl-4 pt-4">
            <Link href="/" legacyBehavior>
              <a className="block py-2.5 px-4 hover:bg-[#B6EADA] hover:text-gray-800 rounded transition duration-200">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiFillHome />
                  </span>{" "}
                  Home
                </div>
              </a>
            </Link>
            <Link href="/dashboard" legacyBehavior>
              <a className="block py-2.5 px-4 hover:bg-[#B6EADA] hover:text-gray-800 rounded transition duration-200">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiFillContainer />
                  </span>{" "}
                  Copy ads
                </div>
              </a>
            </Link>
            <Link href="/product" legacyBehavior>
              <a className="block py-2.5 px-4 hover:bg-[#B6EADA] hover:text-gray-800 rounded transition duration-200">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiFillEdit />
                  </span>{" "}
                  Product Description
                </div>
              </a>
            </Link>
          </nav>
          <Footer/>
        </div>
        
      </section>

      <main className=" bg-[#03001C] flex-1 text-2xl font-bold text-gray-700 pt-5 md:pt-16 h-screen ">
        {children}
      
      </main>
      
    </div>
  );
};
