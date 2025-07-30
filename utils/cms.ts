import { Language } from "@/types/Language.types";
import {
  aboutPageQuery,
  contactPageQuery,
  cookiesModalQuery,
  emailQuery,
  eventsQuery,
  footerQuery,
  galleriesQuery,
  homePageQuery,
  interpretationPageQuery,
  lecturesPageQuery,
  lessonsPageQuery,
  menuQuery,
  notFoundPageQuery,
  pageSeoQuery,
  policyQuery,
  reachOutQuery,
  trainingAndConsultingPageQuery,
} from "./queries";
import { sanityClient } from "./sanity";
import { HomePageCms } from "@/types/HomePage.types";
import {
  formatAboutPage,
  formatContactPage,
  formatEventsPage,
  formatFooter,
  formatGalleries,
  formatHomePage,
  formatLessonsPage,
  formatMenu,
  formatPricingPage,
} from "./cmsFormatters";
import { ReachOut } from "@/types/ReachOut.types";
import { Policy, PolicyTypes } from "@/types/Policy.types";
import { Menu } from "@/types/Menu.types";
import { Footer } from "@/types/Footer.types";
import { CookiesModal } from "@/types/CookiesModal.types";
import { AboutPageCms } from "@/types/AboutPage.types";
import { ContactPageCms } from "@/types/ContactPage.types";
import { SeoPages } from "./seo";
import { NotFoundPage } from "@/types/NotFoundPage.types";
import { CategoryPage } from "@/types/CategoryPage.types";
import { LessonsPage } from "@/types/LessonsPage.types";
import { EventsPage } from "@/types/EventsPage.types";
import { GalleryObjectCms } from "@/types/Galleries.types";
import { Email } from "@/types/SocialSites.types";

const revalidate = { next: { revalidate: 300 } };

export async function getHomePage(language: Language) {
  const homePageCms: HomePageCms = await sanityClient.fetch(
    homePageQuery,
    { language },
    revalidate,
  );

  return formatHomePage(homePageCms);
}

export async function getLessonsPage(language: Language) {
  const lessonsPageCms: LessonsPage = await sanityClient.fetch(
    lessonsPageQuery,
    { language },
    revalidate,
  );

  return formatLessonsPage(lessonsPageCms);
}

export async function getEventsPage(language: Language) {
  const eventsCms: EventsPage = await sanityClient.fetch(
    eventsQuery,
    { language },
    revalidate,
  );

  return formatEventsPage(eventsCms);
}

export async function getTrainingAndConsultingPage() {
  const trainingAndConsultingPageCms: CategoryPage = await sanityClient.fetch(
    trainingAndConsultingPageQuery,
    {},
    revalidate,
  );

  return formatPricingPage(trainingAndConsultingPageCms);
}

export async function getLecturesPage() {
  const lecturesPageCms: CategoryPage = await sanityClient.fetch(
    lecturesPageQuery,
    {},
    revalidate,
  );

  return formatPricingPage(lecturesPageCms);
}

export async function getInterpretationPage() {
  const interpretationPageCms: CategoryPage = await sanityClient.fetch(
    interpretationPageQuery,
    {},
    revalidate,
  );

  return formatPricingPage(interpretationPageCms);
}

export async function getReachOut(language: Language) {
  const reachOutCms: ReachOut = await sanityClient.fetch(
    reachOutQuery,
    { language },
    revalidate,
  );

  return reachOutCms;
}

export async function getMenu(language: Language) {
  const menu: Menu = await sanityClient.fetch(
    menuQuery,
    { language },
    revalidate,
  );

  return formatMenu(menu);
}

export async function getFooter(language: Language) {
  const footer: Footer = await sanityClient.fetch(
    footerQuery,
    { language },
    revalidate,
  );

  return formatFooter(footer);
}

export async function getPolicy(policyType: PolicyTypes) {
  const policy: Policy = await sanityClient.fetch(
    policyQuery(policyType),
    {},
    revalidate,
  );

  return policy;
}

export async function getCookiesModal(language: Language) {
  const cookiesModal: CookiesModal = await sanityClient.fetch(
    cookiesModalQuery,
    { language },
    revalidate,
  );

  return cookiesModal;
}

export async function getAboutPage(language: Language) {
  const aboutPage: AboutPageCms = await sanityClient.fetch(
    aboutPageQuery,
    { language },
    revalidate,
  );

  return formatAboutPage(aboutPage);
}

export async function getContactPage(language: Language) {
  const contactPage: ContactPageCms = await sanityClient.fetch(
    contactPageQuery,
    { language },
    revalidate,
  );

  return formatContactPage(contactPage);
}

export async function getNotFoundPage(language: Language) {
  const notFoundPage: NotFoundPage = await sanityClient.fetch(
    notFoundPageQuery,
    { language },
    revalidate,
  );

  return notFoundPage;
}

export async function getPageSeo(pageType: SeoPages, language?: Language) {
  const seo = await sanityClient.fetch(
    pageSeoQuery,
    { pageType, language: language ?? null },
    revalidate,
  );

  return seo;
}

export async function getGalleries(language: Language) {
  const galleriesCms: GalleryObjectCms = await sanityClient.fetch(
    galleriesQuery,
    { language },
    revalidate,
  );

  return formatGalleries(galleriesCms);
}

export async function getEmail() {
  const email: Email = await sanityClient.fetch(emailQuery, {}, revalidate);
  return email;
}
