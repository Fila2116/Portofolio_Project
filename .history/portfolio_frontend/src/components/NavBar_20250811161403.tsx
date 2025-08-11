import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from '@/components/ThemeToggle';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-background border-b border-border px-4 py-3 sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                {/* Logo/Brand */}
                <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                        Portfolio
                    </Link>
                </div>

                {/* Navigation Menu */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/projects">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Projects
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/about">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/fetching">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Learn Fetch
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right side controls */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {/* Mobile Menu Button (for future mobile implementation) */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;