import { RemoteComponent } from "remote-components/next";
import { WeatherHeader } from "@/components/weather-header";

export default function Header() {
  return (
    <RemoteComponent>
      <WeatherHeader />
    </RemoteComponent>
  );
}
