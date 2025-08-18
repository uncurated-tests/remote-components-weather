import { RemoteComponent } from "remote-components/next/remote";
import { WeatherHeader } from "@/components/weather-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

export default function Header() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="weather-app-theme"
    >
      <RemoteComponent>
        <WeatherHeader />
      </RemoteComponent>
    </ThemeProvider>
  );
}
