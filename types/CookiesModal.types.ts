export interface CookiesModal {
  id: string;
  title: string;
  description: string;
  buttons: {
    accept: string;
    decline: string;
    settings: string;
    save: string;
  };
  technicalCookies: {
    title: string;
    description: string;
  };
  marketingCookies: {
    title: string;
    description: string;
  };
  cookiesPolicyText: string;
}
