import { PolicyTypes } from "@/types/Policy.types";

// components
const categoriesQuery = `categories[] {
    "id": _key,
    title,
    cards[] {
      "id": _key,
      title,
      content,
      pricing
    }
  }`;

const reviewsComponentQuery = `reviews->{
  "id": _id,
  title,
  reviews[] {
    "id": _key,
    author,
    description,
    content,
    "authorImage": authorImage.asset->url,
    starRating
  }
}`;

const socialSitesComponentQuery = `{
  "id": _id,
  sites[] {
    "id": _key,
    title,
    link,
    icon
  },
  email
}`;

// queries
export const homePageQuery = `*[_type == "homePage" && language == $language] {
  "id": _id,
  pageTitle,
  description,
  showMoreButtonText,
  "image": image.asset->url,
  sections[] {
    "id": _key,
    title,
    description,
    cards[] {
      "id": _key,
      title,
      description,
      "image": image.asset->url,
      button {
        text,
        link
      }
    }
  }
}[0]`;

export const lessonsPageQuery = `*[_type == "lessonsPage" && language == $language] {
  "id": _id,
  pageTitle,
  description,
  lessons {
    "id": _key,
    title,
    icon,
    lessonTypes[] {
      "id": _key,
      title,
      content,
      pricing
    },
  },
  courses {
    "id": _key,
    title,
    icon,
    courseCategories[] {
      "id": _key,
      title,
      description,
      courses[] {
        "id": _key,
        title,
        registrationOpen,
        startDate,
        lessonCount,
        meetingTime,
        studentCount,
        price,
        prerequisites,
        link
      }
    },
    buttons {
      registrationOpen,
      registrationClosed,
    },
  },
  ${reviewsComponentQuery}
}[0]`;

export const eventsQuery = `*[_type == "eventsPage" && language == $language] {
  "id": _id,
  pageTitle,
  description,
  eventCategories[] {
    "id": _key,
    title,
    description,
    events[] {
      "id": _key,
      title,
      registrationOpen,
      startDate,
      location,
      eventDuration,
      attendeeCount,
      price,
      link,
    }
  },
  buttonTexts {
    registrationOpen,
    registrationClosed,
  },
  ${reviewsComponentQuery}
}[0]`;

export const trainingAndConsultingPageQuery = `*[_type == "trainingAndConsultingPage"] {
  "id": _id,
  pageTitle,
  description,
  ${categoriesQuery},
  ${reviewsComponentQuery}
}[0]`;

export const lecturesPageQuery = `*[_type == "lecturesPage"] {
  "id": _id,
  pageTitle,
  description,
  ${categoriesQuery},
  ${reviewsComponentQuery}
}[0]`;

export const interpretationPageQuery = `*[_type == "interpretationPage"] {
  "id": _id,
  pageTitle,
  description,
  ${categoriesQuery},
  ${reviewsComponentQuery}
}[0]`;

export const reachOutQuery = `*[_type == "reachOut" && language == $language] {
  "id": _id,
  title,
  cards[] {
    "id": _key,
    icon,
    title,
    description,
    button {
      text,
      code
    }
  }
}[0]`;

export const popupsQuery = `*[_type == "popups" && language == $language] {
  "id": _id,
  popups[] {
    "id": _key,
    title,
    code
  }
}[0]`;

export const menuQuery = `*[_type == "menu" && language == $language] {
  "id": _id,
  items[] {
    "id": _key,
    title,
    link
  }
}[0]`;

export const footerQuery = `*[_type == "footer" && language == $language] {
  "id": _id,
  legalInformation,
  billingInformation,
  socialSites {
    title,
    "sites": sites->${socialSitesComponentQuery}
  },
  copyright
}[0]`;

export const policyQuery = (policyField: PolicyTypes) => `
  *[_type == "legal"] {
    "id": _id,
    ${policyField === "cookiesPolicy" ? "cookiesPolicy" : `"${policyField}": ${policyField}.asset->url`}
  }[0]
`;

export const cookiesModalQuery = `*[_type == "cookiesModal" && language == $language] {
  "id": _id,
  title,
  description,
  buttons,
  technicalCookies,
  marketingCookies,
  cookiesPolicyText
}[0]`;

export const aboutPageQuery = `*[_type == "aboutPage" && language == $language] {
  "id": _id,
  sections[] {
    "id": _key,
    title,
    content,
    "image": image.asset->url,
    alignment,
  }
}[0]`;

export const contactPageQuery = `*[_type == "contactPage" && language == $language] {
  "id": _id,
  pageTitle,
  description,
  billingInformation,
  "socialSites": socialSites->${socialSitesComponentQuery},
  "image": image.asset->url,
}[0]`;

export const notFoundPageQuery = `*[_type == "notFoundPage" && language == $language] {
  "id": _id,
  pageTitle,
  description
}[0]`;

export const pageSeoQuery = `*[_type == $pageType && ($language == null || language == $language)] {
  "id": _id,
  pageTitle,
  description
}[0]`;

export const galleriesQuery = `*[_type == "galleries" && language == $language] {
  "id": _id,
  title,
  icon,
  galleries[] {
    "id": _key,
    title,
    icon,
    gallery[] {
      "id": _key,
      "src": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
      "placeholder": image.asset->metadata.lqip,
      alt
    }
  }
}[0]`;

export const emailQuery = `*[_type == "socialSites"] {
  email
}[0]`;
