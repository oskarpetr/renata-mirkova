import { PageSeo } from "@/types/PageSeo.types";
import { Metadata } from "next";
import { toPlainText } from "@portabletext/toolkit";

export type SeoPages =
  | "homePage"
  | "lessonsPage"
  | "coursesPage"
  | "eventsPage"
  | "trainingAndConsultingPage"
  | "lecturesPage"
  | "interpretationPage"
  | "aboutPage"
  | "contactPage"
  | "notFoundPage";

export const baseUrl = "https://renatamirkova.com";
export const avatarUrl = `${baseUrl}/images/renata-mirkova.webp`;

export function pageMetadata({ pageTitle, description }: PageSeo): Metadata {
  const textDescription = toPlainText(description);
  const cappedDescription =
    textDescription.length > 155
      ? `${textDescription.slice(0, 152)}...`
      : textDescription;

  return {
    title: `${pageTitle} | Renata Mirková`,
    description: cappedDescription,
    openGraph: {
      title: `${pageTitle} | Renata Mirková`,
      description: cappedDescription,
      url: baseUrl,
      siteName: "Renata Mirková",
      images: [avatarUrl],
      type: "website",
    },
    metadataBase: new URL(baseUrl),
    other: {
      "profile:first_name": "Renata",
      "profile:last_name": "Mirková",
      "profile:username": "renatamirkova",
    },
  };
}
