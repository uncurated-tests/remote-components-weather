import { RemoteComponent } from "remote-components/next";
import { WeatherHeader } from "@/components/weather-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

export default function Header() {
  return (
    <RemoteComponent>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="weather-app-theme"
      >
        <WeatherHeader />
      </ThemeProvider>
    </RemoteComponent>
  );
}
