// import { getProjectsSitemap } from "@/utils/cms";
// import { baseUrl } from "@/utils/seo";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const projectsSitemap = await getProjectsSitemap();

  // const projects: MetadataRoute.Sitemap = projectsSitemap.map(
  //   (projectSitemap) => ({
  //     url: `${baseUrl}/projects/${projectSitemap.slug}`,
  //     changeFrequency: "monthly",
  //     priority: 0.8,
  //     images: [
  //       replaceAmpersand(projectSitemap.mainImage),
  //       ...projectSitemap.images.map(replaceAmpersand),
  //     ],
  //   }),
  // );

  // const sitemap: MetadataRoute.Sitemap = [
  //   {
  //     url: baseUrl,
  //     changeFrequency: "weekly",
  //     priority: 1,
  //   },
  //   ...projects,
  // ];

  return [];
}
