"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link>; // LinkProps

export const NavLink = ({ href, children, ...props }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-red-500" : "text-blue-500"
      } hover:text-blue-400`}
      {...props}
    >
      {children}
    </Link>
  );
};
