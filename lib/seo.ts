import type { Metadata } from "next";

const BASE_URL = "https://fastpercentage.online";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "FastPercentage",
      type: "website",
    },
  };
}

export { BASE_URL };
