"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MapPin, Star, ChevronDown } from "lucide-react";
import { PopoverPortal } from "@radix-ui/react-popover";
import { City, CityFavorite } from "./types";

interface CitySelectorProps {
  cities: City[];
  selectedCity: City;
  onCitySelect: (city: City) => void;
  cityFavorites: CityFavorite[];
  onToggleFavorite: (cityId: number) => void;
  headerRef: React.RefObject<HTMLElement | null>;
}

export function CitySelector({
  cities,
  selectedCity,
  onCitySelect,
  cityFavorites,
  onToggleFavorite,
  headerRef,
}: CitySelectorProps) {
  const [citySearchOpen, setCitySearchOpen] = useState(false);

  const getCityWithFavoriteStatus = (city: City) => {
    const favoriteStatus = cityFavorites.find((fav) => fav.id === city.id);
    return { ...city, isFavorite: favoriteStatus?.isFavorite || false };
  };

  return (
    <div className="flex items-center">
      <Popover open={citySearchOpen} onOpenChange={setCitySearchOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-72 lg:w-80 justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <div className="flex items-center space-x-2">
                <span className="font-medium">{selectedCity.name}</span>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <selectedCity.icon className="h-3 w-3" />
                  <span>{selectedCity.temp}°</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(selectedCity.id);
                  }}
                >
                  <Star
                    className={`h-3 w-3 ${getCityWithFavoriteStatus(selectedCity).isFavorite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                </Button>
              </div>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverPortal container={headerRef.current || undefined}>
          <PopoverContent className="w-80 p-0">
            <Command>
              <CommandInput placeholder="Search by city name or zip code..." />
              <CommandList>
                <CommandEmpty>No cities found.</CommandEmpty>
                <CommandGroup>
                  {cities.map((city) => {
                    const cityWithFav = getCityWithFavoriteStatus(city);
                    return (
                      <CommandItem
                        key={city.id}
                        onSelect={() => {
                          onCitySelect(city);
                          setCitySearchOpen(false);
                        }}
                        className="flex items-center justify-between p-3"
                      >
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{city.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {city.zip}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-sm">
                            <city.icon className="h-4 w-4" />
                            <span>{city.temp}°</span>
                            <span className="text-muted-foreground">
                              {city.condition}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleFavorite(city.id);
                            }}
                          >
                            <Star
                              className={`h-4 w-4 ${cityWithFav.isFavorite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                            />
                          </Button>
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </div>
  );
}
