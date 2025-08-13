"use client";

import { useEffect, useState, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { WeatherLogo } from "./weather-logo";
import { CitySelector } from "./city-selector";
import { SettingsDropdown } from "./settings-dropdown";
import { NavigationActions } from "./navigation-actions";
import { MobileMenu } from "./mobile-menu";
import { cities, languages, temperatureUnits } from "./data";
import { City, Language, TemperatureUnit, CityFavorite } from "./types";

export function WeatherHeader() {
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams?.toString());
  const pathname = usePathname();
  console.log("pathname", pathname);
  const params = useParams();
  console.log("params", params);
  // const router = useRouter();
  // console.log("router", router.query);
  const headerRef = useRef<HTMLElement | null>(null);
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [selectedTempUnit, setSelectedTempUnit] = useState<TemperatureUnit>(
    temperatureUnits[0]
  );
  const [cityFavorites, setCityFavorites] = useState<CityFavorite[]>(
    cities.map((city) => ({ id: city.id, isFavorite: city.isFavorite }))
  );

  useEffect(() => {
    if (headerRef.current) {
      let current: any = headerRef.current;
      while (current && !current.shadowRoot) {
        current = current.parentNode?.host || current.parentNode;
      }
      const shadowRoot = current?.shadowRoot;
      console.log("Header shadowRoot:", shadowRoot);
    }
  }, [headerRef.current]);

  const toggleFavorite = (cityId: number) => {
    setCityFavorites((prev) =>
      prev.map((fav) =>
        fav.id === cityId ? { ...fav, isFavorite: !fav.isFavorite } : fav
      )
    );
  };

  return (
    <TooltipProvider>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-row items-center"
      >
        <div className="flex h-16 items-center justify-between px-6 lg:px-12 xl:px-16 w-full gap-4">
          <WeatherLogo />
          <div className="hidden md:flex items-center justify-between space-x-6 lg:space-x-8 flex-1">
            {/* City Selector */}
            <CitySelector
              cities={cities}
              selectedCity={selectedCity}
              onCitySelect={setSelectedCity}
              cityFavorites={cityFavorites}
              onToggleFavorite={toggleFavorite}
              headerRef={headerRef}
            />
            <div className="flex items-center space-x-6 lg:space-x-8">
              <SettingsDropdown
                languages={languages}
                temperatureUnits={temperatureUnits}
                selectedLanguage={selectedLanguage}
                selectedTempUnit={selectedTempUnit}
                onLanguageSelect={setSelectedLanguage}
                onTempUnitSelect={setSelectedTempUnit}
              />
              <NavigationActions />
            </div>
          </div>
          <MobileMenu />
        </div>
      </header>
    </TooltipProvider>
  );
}
