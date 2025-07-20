import { HomePage, HomePageCms } from "@/types/HomePage.types";
import { getPlaceholder } from "./plaiceholder";
import { urlFor } from "./sanity-image";
import { Image } from "@/types/Image.types";
import { CoursesPage, CoursesPageCms } from "@/types/CoursesPage.types";
import {
  GalleryImage,
  GalleryImageCms,
  GallerySection,
} from "@/types/GalleryImage.types";
import { EventsPage, EventsPageCms } from "@/types/EventsPage.types";
import { LessonsPage, LessonsPageCms } from "@/types/LessonsPage.types";
import { PricingSection } from "@/types/PricingSection.types";
import { ReviewSection } from "@/types/Review.types";
import { PricingPage, PricingPageCms } from "@/types/PricingPage.types";
import { Menu } from "@/types/Menu.types";
import { Footer } from "@/types/Footer.types";
import { PolicyTypes } from "@/types/Policy.types";
import { AboutPage, AboutPageCms } from "@/types/AboutPage.types";
import { ContactPage, ContactPageCms } from "@/types/ContactPage.types";

export async function formatHomePage(homePageCms: HomePageCms) {
  const homePage: HomePage = {
    ...homePageCms,
    image: await formatImage(homePageCms.image, 800),
    sections: await Promise.all(
      homePageCms.sections.map(async (section) => ({
        ...section,
        cards: await Promise.all(
          section.cards.map(async (card) => ({
            ...card,
            image: await formatImage(card.image, 800),
          })),
        ),
      })),
    ),
  };

  return homePage;
}

export async function formatLessonsPage(lessonsPageCms: LessonsPageCms) {
  const lessonsPage: LessonsPage = {
    ...lessonsPageCms,
    sections: formatPricingSections(lessonsPageCms.sections),
    gallery: await formatGallery(lessonsPageCms.gallery),
    reviews: formatReviews(lessonsPageCms.reviews),
  };

  return lessonsPage;
}

export async function formatCoursesPage(coursesPageCms: CoursesPageCms) {
  const coursesPage: CoursesPage = {
    ...coursesPageCms,
    gallery: await formatGallery(coursesPageCms.gallery),
    reviews: formatReviews(coursesPageCms.reviews),
  };

  return coursesPage;
}

export async function formatEventsPage(eventsPageCms: EventsPageCms) {
  const eventsPage: EventsPage = {
    ...eventsPageCms,
    gallery: await formatGallery(eventsPageCms.gallery),
    reviews: formatReviews(eventsPageCms.reviews),
  };

  return eventsPage;
}

export async function formatPricingPage(pricingPageCms: PricingPageCms) {
  const pricingPage: PricingPage = {
    ...pricingPageCms,
    sections: formatPricingSections(pricingPageCms.sections),
    gallery: await formatGallery(pricingPageCms.gallery),
    reviews: formatReviews(pricingPageCms.reviews),
  };

  return pricingPage;
}

function formatPricingSections(sections: PricingSection[]) {
  return sections
    ? sections.map((section) => ({
        ...section,
        cards: section.cards
          ? section.cards.map((card) => ({
              ...card,
              pricings: card.pricings ?? [],
            }))
          : [],
      }))
    : [];
}

async function formatGallery(gallery: GallerySection) {
  return {
    ...gallery,
    gallery: await Promise.all(
      gallery.gallery
        ? gallery.gallery.map(
            async (image) => await formatGalleryImage(image, 1200),
          )
        : [],
    ),
  };
}

function formatReviews(reviews: ReviewSection) {
  return {
    ...reviews,
    reviews: reviews?.reviews ?? [],
  };
}

export function formatMenu(menu: Menu): Menu {
  return {
    ...menu,
    items: menu.items
      ? menu.items.map((item) => ({
          ...item,
        }))
      : [],
  };
}

export function formatFooter(footer: Footer): Footer {
  return {
    ...footer,
    legalInformation: {
      ...footer.legalInformation,
      links: footer.legalInformation.links
        ? footer.legalInformation.links.map((link) => ({
            ...link,
            target: "_self",
          }))
        : [],
    },
    billingInformation: {
      ...footer.billingInformation,
      content: footer.billingInformation.content ?? [],
    },
    socialSites: {
      ...footer.socialSites,
      sites: {
        ...footer.socialSites.sites,
        sites: footer.socialSites.sites.sites ?? [],
      },
    },
    copyright: footer.copyright ?? [],
  };
}

export async function formatAboutPage(
  aboutPageCms: AboutPageCms,
): Promise<AboutPage> {
  return {
    ...aboutPageCms,
    sections: await Promise.all(
      aboutPageCms.sections.map(async (section) => ({
        ...section,
        image: await formatImage(section.image, 800),
      })),
    ),
  };
}

export async function formatContactPage(
  contactPageCms: ContactPageCms,
): Promise<ContactPage> {
  return {
    ...contactPageCms,
    image: await formatImage(contactPageCms.image, 800),
  };
}

async function formatImage(imageCms: string, width: number) {
  const formattedUrl = formatImageUrl(imageCms, width);
  const image: Image = {
    src: formattedUrl,
    placeholder: await getPlaceholder(formattedUrl),
  };

  return image;
}

async function formatGalleryImage(imageCms: GalleryImageCms, width: number) {
  const formattedUrl = formatImageUrl(imageCms.src, width);
  const image: GalleryImage = {
    ...imageCms,
    src: formattedUrl,
    placeholder: await getPlaceholder(formattedUrl),
  };

  return image;
}

function formatImageUrl(url: string, width: number) {
  return urlFor(url).width(width).url();
}
