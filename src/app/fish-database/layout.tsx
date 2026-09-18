import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/fish-database" },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
