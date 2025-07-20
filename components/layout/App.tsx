import { cache, ReactNode } from "react";
import Providers from "./Providers";
import Menu from "./Menu";
import Footer from "./Footer";
import CookiesModal from "../cookies/CookiesModal";
import { getCookiesModal } from "@/utils/cms";

interface Props {
  children: ReactNode;
}

const fetchCookiesModal = cache(getCookiesModal);

export default async function App({ children }: Props) {
  const czechCookiesModal = await fetchCookiesModal("cs");
  const chineseCookiesModal = await fetchCookiesModal("zh");

  return (
    <Providers>
      <Menu />
      {children}
      <Footer />
      <CookiesModal
        czechCookiesModal={czechCookiesModal}
        chineseCookiesModal={chineseCookiesModal}
      />
    </Providers>
  );
}
