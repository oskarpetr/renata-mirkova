import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "q3vu36s2",
  dataset: "production",
  apiVersion: "2025-03-05",
  useCdn: true,
});
