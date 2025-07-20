export interface Policy {
  id: string;
  termsAndConditions?: string;
  privacyPolicy?: string;
  adr?: string;
  cookiesPolicy?: string;
}

export type PolicyTypes =
  | "termsAndConditions"
  | "privacyPolicy"
  | "adr"
  | "cookiesPolicy";
