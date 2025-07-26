import { HomePage, HomePageCms } from "@/types/HomePage.types";
import { getPlaceholder } from "./plaiceholder";
import { urlFor } from "./sanity-image";
import { Image } from "@/types/Image.types";
import {
  GalleryCms,
  GalleryImage,
  GalleryImageCms,
  GalleryObject,
  GalleryObjectCms,
} from "@/types/Galleries.types";
import { EventsPage } from "@/types/EventsPage.types";
import { LessonsPage } from "@/types/LessonsPage.types";
import { ReviewSection } from "@/types/Review.types";
import { Menu } from "@/types/Menu.types";
import { Footer } from "@/types/Footer.types";
import { AboutPage, AboutPageCms } from "@/types/AboutPage.types";
import { ContactPage, ContactPageCms } from "@/types/ContactPage.types";
import { CategoryPage } from "@/types/CategoryPage.types";
import { Category } from "@/types/Category.types";

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

export async function formatLessonsPage(lessonsPageCms: LessonsPage) {
  const lessonsPage: LessonsPage = {
    ...lessonsPageCms,
    lessons: {
      ...lessonsPageCms.lessons,
      lessonCategories: lessonsPageCms.lessons.lessonCategories
        ? lessonsPageCms.lessons.lessonCategories
        : [],
    },
    courses: {
      ...lessonsPageCms.courses,
      courseCategories: lessonsPageCms.courses.courseCategories
        ? lessonsPageCms.courses.courseCategories.map((category) => ({
            ...category,
            courses: category.courses ? category.courses : [],
          }))
        : [],
    },
    reviews: formatReviews(lessonsPageCms.reviews),
  };

  return lessonsPage;
}

export async function formatEventsPage(eventsPageCms: EventsPage) {
  const eventsPage: EventsPage = {
    ...eventsPageCms,
    reviews: formatReviews(eventsPageCms.reviews),
  };

  return eventsPage;
}

export async function formatPricingPage(categoryPageCms: CategoryPage) {
  const categoryPage: CategoryPage = {
    ...categoryPageCms,
    categories: formatCategories(categoryPageCms.categories),
    reviews: formatReviews(categoryPageCms.reviews),
  };

  return categoryPage;
}

function formatCategories(categories: Category[]) {
  return categories
    ? categories.map((category) => ({
        ...category,
        cards: category.cards ? category.cards : [],
      }))
    : [];
}

export async function formatGalleries(
  galleryObject: GalleryObjectCms,
): Promise<GalleryObject> {
  return {
    ...galleryObject,
    galleries: await Promise.all(
      galleryObject.galleries.map(async (gallery) => ({
        ...gallery,
        gallery: await Promise.all(
          gallery.gallery.map((image) => formatGalleryImage(image, 800)),
        ),
      })),
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
