import { FC } from "react";
import Link from "next/link";
import { AiFillContainer, AiOutlineHome } from "react-icons/ai";

interface Props {
  handleNavbar: (e: React.MouseEvent<HTMLButtonElement>) => void;
  openNavbar: boolean;
}

export const ToggleMenu: FC<Props> = ({ handleNavbar, openNavbar }) => {
  return (
    <div className="fixed bottom-0 border-t border-gray-200 left-0 w-screen bg-white shadow z-40 md:hidden">
      <div className="flex text-gray-800 h-16">
        <button
          onClick={handleNavbar}
          className={`grow flex items-center pt-4  ${
            openNavbar ? " btn" : "btn btn2"
          }`}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <Link href="/dashboard" legacyBehavior>
          <a className="grow h-full flex items-center justify-center">
            <AiFillContainer className="text-4xl hover:opacity-80 text-center" />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="grow h-full flex items-center justify-center">
            <AiOutlineHome className="text-4xl hover:opacity-80 text-center" />
          </a>
        </Link>
      </div>
    </div>
  );
};
