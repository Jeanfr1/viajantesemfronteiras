"use client";

import { VariableFontHoverByRandomLetter } from "@/components/ui/variable-font-hover-by-random-letter";

export function HeroText() {
  return (
    <div className="space-y-4">
      <VariableFontHoverByRandomLetter
        label="Viva Seus Sonhos"
        staggerDuration={0.03}
        className="block text-white text-5xl md:text-7xl font-bold cursor-pointer"
        fromFontVariationSettings="'wght' 400, 'slnt' 0"
        toFontVariationSettings="'wght' 900, 'slnt' -10"
      />
      <VariableFontHoverByRandomLetter
        label="Pelo Mundo"
        staggerDuration={0.03}
        className="block text-white text-5xl md:text-7xl font-bold cursor-pointer"
        fromFontVariationSettings="'wght' 400, 'slnt' 0"
        toFontVariationSettings="'wght' 900, 'slnt' -10"
      />
    </div>
  );
}