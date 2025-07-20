import { Language } from "@/types/Language.types";
import {
  aboutPageQuery,
  contactPageQuery,
  cookiesModalQuery,
  coursesQuery,
  eventsQuery,
  footerQuery,
  homePageQuery,
  interpretationPageQuery,
  lecturesPageQuery,
  lessonsPageQuery,
  menuQuery,
  notFoundPageQuery,
  pageSeoQuery,
  policyQuery,
  popupsQuery,
  reachOutQuery,
  trainingAndConsultingPageQuery,
} from "./queries";
import { sanityClient } from "./sanity";
import { HomePageCms } from "@/types/HomePage.types";
import {
  formatAboutPage,
  formatContactPage,
  formatCoursesPage,
  formatEventsPage,
  formatFooter,
  formatHomePage,
  formatLessonsPage,
  formatMenu,
  formatPricingPage,
} from "./cmsFormatters";
import { CoursesPageCms } from "@/types/CoursesPage.types";
import { ReachOut } from "@/types/ReachOut.types";
import { EventsPageCms } from "@/types/EventsPage.types";
import { LessonsPageCms } from "@/types/LessonsPage.types";
import { PricingPageCms } from "@/types/PricingPage.types";
import { Policy, PolicyTypes } from "@/types/Policy.types";
import { Menu } from "@/types/Menu.types";
import { Footer } from "@/types/Footer.types";
import { CookiesModal } from "@/types/CookiesModal.types";
import { AboutPageCms } from "@/types/AboutPage.types";
import { ContactPageCms } from "@/types/ContactPage.types";
import { SeoPages } from "./seo";
import { NotFoundPage } from "@/types/NotFoundPage.types";
import Popups from "@/types/Popups.types";

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
  const lessonsPageCms: LessonsPageCms = await sanityClient.fetch(
    lessonsPageQuery,
    { language },
    revalidate,
  );

  return formatLessonsPage(lessonsPageCms);
}

export async function getCoursesPage(language: Language) {
  const coursesCms: CoursesPageCms = await sanityClient.fetch(
    coursesQuery,
    { language },
    revalidate,
  );

  return formatCoursesPage(coursesCms);
}

export async function getEventsPage(language: Language) {
  const eventsCms: EventsPageCms = await sanityClient.fetch(
    eventsQuery,
    { language },
    revalidate,
  );

  return formatEventsPage(eventsCms);
}

export async function getTrainingAndConsultingPage() {
  const trainingAndConsultingPageCms: PricingPageCms = await sanityClient.fetch(
    trainingAndConsultingPageQuery,
    {},
    revalidate,
  );

  return formatPricingPage(trainingAndConsultingPageCms);
}

export async function getLecturesPage() {
  const lecturesPageCms: PricingPageCms = await sanityClient.fetch(
    lecturesPageQuery,
    {},
    revalidate,
  );

  return formatPricingPage(lecturesPageCms);
}

export async function getInterpretationPage() {
  const interpretationPageCms: PricingPageCms = await sanityClient.fetch(
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

export async function getPopups(language: Language) {
  const popupsCms: Popups = await sanityClient.fetch(
    popupsQuery,
    { language },
    revalidate,
  );

  return popupsCms;
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
