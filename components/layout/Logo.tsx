"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.svg";

export default function Logo() {
  const pathname = usePathname();
  const isChinese = pathname.startsWith("/zh");

  return (
    <div className="flex items-center gap-1">
      <Image src={logo} alt="Logo" width={30} />
      <Link
        href={isChinese ? "/zh" : "/"}
        className="text-2xl font-semibold whitespace-nowrap"
      >
        Renata Mirková
      </Link>
    </div>
  );
}
