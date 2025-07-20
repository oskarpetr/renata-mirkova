import { toHTML } from "@portabletext/to-html";

interface Props {
  content: any;
}

export default function BlockContent({ content }: Props) {
  const htmlContent = toHTML(content as any);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="blockContent flex flex-col gap-2"
    ></div>
  );
}
