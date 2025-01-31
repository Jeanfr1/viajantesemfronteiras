export type CountryData = {
  name: string;
  description: string;
  images: string[];
  cities: string[];
  benefits: string[];
  opportunities: { title: string; description: string; icon: IconType }[];
};

export type IconType =
  | "hotel"
  | "landmark"
  | "utensils"
  | "heart"
  | "party-popper"
  | "graduation-cap"
  | "building-2"
  | "palmtree";
