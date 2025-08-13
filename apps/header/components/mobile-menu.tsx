"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

const menuSections = [
  {
    title: "Account Management",
    items: [
      "My Dashboard",
      "Profile Settings",
      "Subscription Plans",
      "Billing & Payments",
      "Account Security",
    ],
  },
  {
    title: "Policies & Legal",
    items: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Data Protection",
      "Accessibility",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Careers",
      "Press & Media",
      "Partnerships",
      "Investor Relations",
    ],
  },
  {
    title: "Support",
    items: [
      "Help Center",
      "Contact Support",
      "Community Forum",
      "System Status",
      "Feature Requests",
    ],
  },
];

export function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
            {menuSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className="w-full justify-start h-auto p-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
                {sectionIndex < menuSections.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
