export function WeatherLogo() {
  return (
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
  );
}
