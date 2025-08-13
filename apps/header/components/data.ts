import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react";
import { City, Language, TemperatureUnit } from "./types";

// Mock data for cities with weather info
export const cities: City[] = [
  {
    id: 1,
    name: "New York",
    zip: "10001",
    temp: 72,
    condition: "Sunny",
    icon: Sun,
    isFavorite: true,
  },
  {
    id: 2,
    name: "Los Angeles",
    zip: "90210",
    temp: 78,
    condition: "Partly Cloudy",
    icon: Cloud,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Chicago",
    zip: "60601",
    temp: 65,
    condition: "Rainy",
    icon: CloudRain,
    isFavorite: true,
  },
  {
    id: 4,
    name: "Miami",
    zip: "33101",
    temp: 85,
    condition: "Sunny",
    icon: Sun,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Seattle",
    zip: "98101",
    temp: 58,
    condition: "Rainy",
    icon: CloudRain,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Denver",
    zip: "80201",
    temp: 45,
    condition: "Snow",
    icon: Snowflake,
    isFavorite: true,
  },
];

export const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

export const temperatureUnits: TemperatureUnit[] = [
  { code: "f", name: "Fahrenheit (°F)" },
  { code: "c", name: "Celsius (°C)" },
  { code: "hybrid", name: "Hybrid Display" },
];
