"use client";

import { useEffect, useState, useRef } from "react";
import { Link } from "@vercel/microfrontends/next/client";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "./theme-switcher";
import {
  Cloud,
  MapPin,
  Star,
  ChevronDown,
  Settings,
  LogIn,
  Menu,
  Sun,
  CloudRain,
  Snowflake,
  Globe,
  Thermometer,
} from "lucide-react";

// Mock data for cities with weather info
const cities = [
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

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

const temperatureUnits = [
  { code: "f", name: "Fahrenheit (°F)" },
  { code: "c", name: "Celsius (°C)" },
  { code: "hybrid", name: "Hybrid Display" },
];

export function WeatherHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [citySearchOpen, setCitySearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedTempUnit, setSelectedTempUnit] = useState(temperatureUnits[0]);
  const [cityFavorites, setCityFavorites] = useState(
    cities.map((city) => ({ id: city.id, isFavorite: city.isFavorite }))
  );

  useEffect(() => {
    if (headerRef.current) {
      let current = headerRef.current;
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

  const getCityWithFavoriteStatus = (city: (typeof cities)[0]) => {
    const favoriteStatus = cityFavorites.find((fav) => fav.id === city.id);
    return { ...city, isFavorite: favoriteStatus?.isFavorite || false };
  };

  const favoritesCities = cities.filter(
    (city) => getCityWithFavoriteStatus(city).isFavorite
  );

  return (
    <TooltipProvider>
      {/* Simple header with light/dark theme */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="flex h-16 items-center justify-between px-6 lg:px-12 xl:px-16 w-full gap-4">
          {/* Enhanced Logo with custom SVG */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative flex items-center">
              {/* Generated weather logo */}
              <img
                src="/weather-logo.svg"
                alt="WeatherPro Logo"
                width={40}
                height={40}
                className="drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                RC Weather
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                Live Weather Updates
              </span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center justify-between space-x-6 lg:space-x-8 flex-1">
            {/* Left side - City Selector */}
            <div className="flex items-center">
              <Popover open={citySearchOpen} onOpenChange={setCitySearchOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-72 lg:w-80 justify-between"
                  >
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
                            toggleFavorite(selectedCity.id);
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
                                setSelectedCity(city);
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
                                    toggleFavorite(city.id);
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
              </Popover>
            </div>

            {/* Right side - Settings, Login, Theme Switcher */}
            <div className="flex items-center space-x-6 lg:space-x-8">
              {/* Settings Dropdown */}
              <Popover open={settingsOpen} onOpenChange={setSettingsOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        Language
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {languages.map((lang) => (
                          <Button
                            key={lang.code}
                            variant={
                              selectedLanguage.code === lang.code
                                ? "default"
                                : "ghost"
                            }
                            className="justify-start"
                            onClick={() => setSelectedLanguage(lang)}
                          >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Thermometer className="h-4 w-4 mr-2" />
                        Temperature Unit
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {temperatureUnits.map((unit) => (
                          <Button
                            key={unit.code}
                            variant={
                              selectedTempUnit.code === unit.code
                                ? "default"
                                : "ghost"
                            }
                            className="justify-start"
                            onClick={() => setSelectedTempUnit(unit)}
                          >
                            {unit.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Login CTA */}
              <Link href="/login">
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>

              {/* Theme Switcher */}
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center flex-shrink-0 ml-6 lg:ml-8">
            <Popover open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-80 p-0 mt-2"
                align="end"
                side="bottom"
                sideOffset={8}
              >
                <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
                  {/* Account Management */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Account Management
                    </h3>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        My Dashboard
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Profile Settings
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Subscription Plans
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Billing & Payments
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Account Security
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Policies & Legal */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Policies & Legal
                    </h3>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Privacy Policy
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Terms of Service
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Cookie Policy
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Data Protection
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Accessibility
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Company */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Company
                    </h3>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About Us
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Careers
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Press & Media
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Partnerships
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Investor Relations
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Support */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Support
                    </h3>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Help Center
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact Support
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Community Forum
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        System Status
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-2 text-sm "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Feature Requests
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
