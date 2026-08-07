import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "McMaster Venture Capital Club",
    short_name: "MVCC",
    description:
      "McMaster University's student venture capital community for students, founders, and investors.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFAF7",
    theme_color: "#7A0000",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
