import { Link } from "@vercel/microfrontends/next/client";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import { LogIn } from "lucide-react";

export function NavigationActions() {
  return (
    <div className="flex items-center space-x-6 lg:space-x-8">
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
  );
}
