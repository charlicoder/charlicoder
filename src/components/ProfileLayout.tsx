
import React from "react";
import { cn } from "@/lib/utils";
import MainNav from "./NavigationMenu";

interface ProfileLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ProfileLayout = ({ children, className }: ProfileLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-2">
          <MainNav />
        </div>
      </header>
      <main className={cn("max-w-4xl mx-auto px-4 py-8", className)}>
        {children}
      </main>
    </div>
  );
};

export default ProfileLayout;
