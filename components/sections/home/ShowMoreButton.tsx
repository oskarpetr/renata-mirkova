"use client";

import Button from "@/components/layout/Button";

interface Props {
  text: string;
}

export default function ShowMoreButton({ text }: { text: Props }) {
  const handleMore = () => {
    const section = document.getElementById("home-sections");
    if (section) {
      const yOffset = -150;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return <Button text={text} onClick={handleMore} />;
}
