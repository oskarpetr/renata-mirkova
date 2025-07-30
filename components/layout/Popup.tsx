"use client";

import { useEffect, useRef } from "react";

interface Props {
  code: string;
}

export default function Popup({ code }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(code, "text/html");

      const scriptEl = htmlDoc.querySelector("script");
      const widgetDiv = htmlDoc.querySelector("div");

      if (widgetDiv && containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(widgetDiv);
      }

      if (scriptEl) {
        const newScript = document.createElement("script");
        newScript.innerHTML = scriptEl.innerHTML;
        containerRef.current.appendChild(newScript);
      }
    }
  }, [code]);

  return <div ref={containerRef} />;
}
