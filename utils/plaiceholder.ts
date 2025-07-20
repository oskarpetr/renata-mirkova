import { getPlaiceholder } from "plaiceholder";

export async function getPlaceholder(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  return (await getPlaiceholder(buffer, { size: 10 })).base64;
}
