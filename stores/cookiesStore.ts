import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookiesStore {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const COOKIES_STORE_KEY = "cookies-store";

export const useCookiesStore = create<CookiesStore>()(
  persist(
    (set) => ({
      open: true,
      setOpen: (value: boolean) => set(() => ({ open: value })),
    }),
    { name: COOKIES_STORE_KEY },
  ),
);
