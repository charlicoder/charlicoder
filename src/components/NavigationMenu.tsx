
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { User, FileText, Briefcase, Newspaper, Wand, Mail } from "lucide-react";

const navItems = [
    { href: "/", label: "About Me", icon: <User size={16} /> },
    { href: "/resume", label: "Resume", icon: <FileText size={16} /> },
    { href: "/services", label: "My Services", icon: <Briefcase size={16} /> },
    { href: "/tools", label: "Free Tools", icon: <Wand size={16} /> },
    { href: "/contact", label: "Contact Me", icon: <Mail size={16} /> },
];

const MainNav = () => {
    const location = useLocation();

    return (
        <NavigationMenu className="max-w-full w-full justify-start">
            <NavigationMenuList className="flex flex-row space-x-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.href ||
                        (item.href === "/" && location.pathname === "/about");

                    return (
                        <NavigationMenuItem key={item.href}>
                            <Link
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-slate-100 transition-colors",
                                    isActive ? "bg-slate-100" : ""
                                )}
                                data-active={isActive}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default MainNav;
