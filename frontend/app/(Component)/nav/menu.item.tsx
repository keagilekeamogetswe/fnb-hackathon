"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
interface MenuItemProps {
  name: string;
  url: string;
}
export default function MenuItem({ name, url }: MenuItemProps) {
  const active_class = " py-2 text-[#ff8c00]! bg-[rgba(84,84,87,0.4)] outline outline-[rgba(255,255,255,0.4)] shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
  const pathname = usePathname();
  const is_active = pathname === url;
  return (
    <li className={`-mx-10 px-14 ${(is_active) ? active_class : ""}`} >
      <Link href={url} >
        {name}
      </Link>

    </li>
  )
}