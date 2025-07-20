import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import MenuItems from "./MenuItems";
import { cache } from "react";
import { getMenu } from "@/utils/cms";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenuItems from "./MobileMenuItems";

const fetchMenu = cache(getMenu);

export default async function Menu() {
  const czechMenu = await fetchMenu("cs");
  const chineseMenu = await fetchMenu("zh");

  return (
    <nav className="sticky top-0 z-20 flex h-20 items-center justify-between border-b bg-white px-8 sm:px-16 lg:px-32 xl:px-48">
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-1">
          <Image src={logo} alt="Logo" width={30} />
          <Link href="/" className="text-2xl font-semibold whitespace-nowrap">
            Renata Mirková
          </Link>
        </div>

        <LanguageSwitcher />
      </div>

      <div className="hidden items-center gap-6 lg:flex">
        <MenuItems czechMenu={czechMenu} chineseMenu={chineseMenu} />
      </div>

      <div className="block lg:hidden">
        <MobileMenuItems czechMenu={czechMenu} chineseMenu={chineseMenu} />
      </div>
    </nav>
  );
}
