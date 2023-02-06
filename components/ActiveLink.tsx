import { useRouter } from "next/router";

import Link from "next/link";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

export const ActiveLink: FC<Props> = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a
        className={
          asPath === href
            ? `block py-2.5 px-4 bg-[#B6EADA] text-gray-800 rounded transition duration-200`
            : `block py-2.5 px-4 hover:bg-[#B6EADA] hover:text-gray-800 rounded transition duration-200`
        }
      >
        {children}
      </a>
    </Link>
  );
};
