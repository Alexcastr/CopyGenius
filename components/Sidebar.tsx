import { FC, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { UIContext } from '../context';
import { ActiveLink, Footer, ToggleMenu } from "./";
import copygenius from "../public/copygenius.png";


import {  AiFillHome, AiTwotoneShopping, AiTwotoneCopy } from "react-icons/ai";


interface Props {
  title?: string;
  children: React.ReactNode;
}


export const Sidebar: FC<Props> = ({ children, title = "CopyGenius" }) => {
  const {sideMenuOpen} = useContext(UIContext)
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Alex Castro" />
        <meta name="description" content="Generate copy for advertisement" />
        <meta
          name="keywords"
          content="Ads, Copywriting, Products, AI, artificial intelligence"
        />
        <link rel="icon" href="/copygenius.png" />
      </Head>
      <div className="relative h-full md:flex">
        <ToggleMenu />

        {/* sidebar */}
        <aside
          className={`${
            sideMenuOpen ? "-translate-x-full " : ""
          }  bg-slate-900 text-blue-100 w-64 min-h-screen space-y-6 py-7 px-2 absolute z-20 inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="sticky left-0 top-7 flex flex-col gap-28">
            <Image
              className="mx-auto"
              src={copygenius}
              alt="copygenius logo"
              width={133}
              height={133}
            />
            <nav className="pl-4 pt-4">
              <ActiveLink href="/">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiFillHome />
                  </span>{" "}
                  Home
                </div>
              </ActiveLink>
              <ActiveLink href="/copyads">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiTwotoneCopy />
                  </span>{" "}
                  Copy Ads
                </div>
              </ActiveLink>
              <ActiveLink href="/product">
                <div className="flex gap-4 items-center">
                  <span>
                    <AiTwotoneShopping />
                  </span>{" "}
                  Product Description
                </div>
              </ActiveLink>
            </nav>
            <Footer />
          </div>
        </aside>

        <main className=" bg-[#03001C] flex-1 text-2xl font-bold text-gray-700 pt-5 md:pt-16 min-h-screen ">
          {children}
        </main>
      </div>
    </>
  );
};
