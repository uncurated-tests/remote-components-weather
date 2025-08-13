"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Settings, ChevronDown, Globe, Thermometer } from "lucide-react";
import { Language, TemperatureUnit } from "./types";

interface SettingsDropdownProps {
  languages: Language[];
  temperatureUnits: TemperatureUnit[];
  selectedLanguage: Language;
  selectedTempUnit: TemperatureUnit;
  onLanguageSelect: (language: Language) => void;
  onTempUnitSelect: (unit: TemperatureUnit) => void;
}

export function SettingsDropdown({
  languages,
  temperatureUnits,
  selectedLanguage,
  selectedTempUnit,
  onLanguageSelect,
  onTempUnitSelect,
}: SettingsDropdownProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
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
                    selectedLanguage.code === lang.code ? "default" : "ghost"
                  }
                  className="justify-start"
                  onClick={() => onLanguageSelect(lang)}
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
                    selectedTempUnit.code === unit.code ? "default" : "ghost"
                  }
                  className="justify-start"
                  onClick={() => onTempUnitSelect(unit)}
                >
                  {unit.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
