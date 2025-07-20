export default interface Popups {
  id: string;
  popups: Popup[];
}

export interface Popup {
  id: string;
  title: string;
  code: string;
}
