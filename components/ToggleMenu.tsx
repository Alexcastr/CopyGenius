import { FC, useContext } from "react";
import Link from "next/link";
import { AiTwotoneCopy, AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { UIContext } from '../context/UIcontext';



export const ToggleMenu: FC = () => {

  const {openSideMenu, closeSideMenu, sideMenuOpen} = useContext(UIContext)


  return (
    <div className="fixed bottom-0 border-t border-gray-200 left-0 w-screen bg-[#B6EADA] shadow z-40 md:hidden ">
      <div className="flex text-gray-800 h-16">
        {sideMenuOpen ? (
          <button
            onClick={closeSideMenu}
            className={`grow flex items-center pt-4 btn`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        ) : (
          <button
            onClick={openSideMenu}
            className={`animate-pulse grow flex items-center pt-4 btn btn2`}
          >
            
            <div ></div>
            <div ></div>
            <div ></div>
          </button>
        )}

        <Link href="/copyads" legacyBehavior>
          <a className="grow h-full flex items-center justify-center">
            <AiTwotoneCopy className="text-4xl hover:opacity-80 text-center" />
          </a>
        </Link>
        <Link href="/product" legacyBehavior>
          <a className="grow h-full flex items-center justify-center">
            <AiTwotoneShopping className="text-4xl hover:opacity-80 text-center" />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="grow h-full flex items-center justify-center">
            <AiFillHome className="text-4xl hover:opacity-80 text-center" />
          </a>
        </Link>
      </div>
    </div>
  );
};
