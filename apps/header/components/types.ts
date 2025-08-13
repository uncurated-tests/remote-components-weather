import { LucideIcon } from "lucide-react";

export interface City {
  id: number;
  name: string;
  zip: string;
  temp: number;
  condition: string;
  icon: LucideIcon;
  isFavorite: boolean;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface TemperatureUnit {
  code: string;
  name: string;
}

export interface CityFavorite {
  id: number;
  isFavorite: boolean;
}
