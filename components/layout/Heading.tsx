interface Props {
  text: string;
  type: "h1" | "h2" | "h3";
}

export default function Heading({ text, type }: Props) {
  return type === "h1" ? (
    <h1 className="text-3xl font-semibold sm:text-4xl">{text}</h1>
  ) : type === "h2" ? (
    <h2 className="text-2xl font-semibold sm:text-3xl">{text}</h2>
  ) : (
    <h3 className="text-xl font-semibold">{text}</h3>
  );
}
