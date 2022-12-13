import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink hover:underline active:underline hover:font-bold capitalize hover:scale-110  ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-left"
      }`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
