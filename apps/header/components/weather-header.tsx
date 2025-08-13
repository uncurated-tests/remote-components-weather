import { TooltipProvider } from "@/components/ui/tooltip";
import { WeatherLogo } from "./weather-logo";
import { CitySelector } from "./city-selector";
import { SettingsDropdown } from "./settings-dropdown";
import { NavigationActions } from "./navigation-actions";
import { MobileMenu } from "./mobile-menu";
import { Suspense } from "react";

export function WeatherHeader() {
  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-row items-center">
        <div className="flex h-16 items-center justify-between px-6 lg:px-12 xl:px-16 w-full gap-4">
          <WeatherLogo />
          <div className="hidden md:flex items-center justify-between space-x-6 lg:space-x-8 flex-1">
            <Suspense
              fallback={
                <div className="w-72 h-10 rounded-md bg-muted animate-pulse" />
              }
            >
              <CitySelector />
            </Suspense>
            <div className="flex items-center space-x-6 lg:space-x-8">
              <Suspense
                fallback={
                  <div className="w-24 h-10 rounded-md bg-muted animate-pulse" />
                }
              >
                <SettingsDropdown />
              </Suspense>
              <NavigationActions />
            </div>
          </div>
          <MobileMenu />
        </div>
      </header>
    </TooltipProvider>
  );
}
