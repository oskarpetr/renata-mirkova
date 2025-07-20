export interface Menu {
  id: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  link: string;
}
