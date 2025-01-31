import { CountryPageClient } from "./client";
import { countryData } from "./data";

export function generateStaticParams() {
  return [
    { country: "peru" },
    { country: "colombia" },
    { country: "inglaterra" },
    { country: "portugal" },
    { country: "grecia" },
    { country: "irlanda" },
    { country: "espanha" },
    { country: "polonia" },
    { country: "alemanha" }
  ];
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const data = countryData[params.country as keyof typeof countryData];

  if (!data) {
    return <div>País não encontrado</div>;
  }

  return <CountryPageClient data={data} />;
}