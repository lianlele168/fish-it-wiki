import type { Metadata } from "next";
import { FISH_IT_FAQS } from "@/data/codesFaq";

export const metadata: Metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/codes" },
  title: "Fish It! Codes — Working Codes + Level 10 Requirement",
  description:
    "All working Fish It! codes for free Mutation Potions, Luck Potions, totems and rod skins, plus the Level 10 requirement, Leviathan's Den conditions and every expired code.",
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FISH_IT_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
