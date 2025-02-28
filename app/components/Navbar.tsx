"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "next-themes";
import { useLanguage } from "../LanguageContext";

const MainNavbar: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { key: "startup", href: "/startup" },
    { key: "investitori", href: "#" },
    { key: "studi_professionali", href: "#" },
    { key: "modello_consulenza", href: "#" },
    { key: "contatti", href: "#" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred className="bg-primary-light dark:bg-primary-dark">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`lg:hidden ${resolvedTheme === "light" ? "text-textMain-light" : "text-textMain-dark"}`}
        />
        <NavbarBrand>
          {!mounted ? (
            <div style={{ width: 120, height: 36 }} />
          ) : (
            <img
              src="/logoMAA_light.png"
              alt="Logo MMA"
              width={120}
              height={36}
            />
          )}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map(({ key, href }) => (
          <NavbarItem key={key}>
            <Link
              className={`text-textMain-light dark:text-textMain-dark`}
              href={href}
            >
              {t(`navbar.${key}`)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </NavbarContent>

      <NavbarMenu className={`lg:hidden ${resolvedTheme === "light" ? "bg-primary-light" : "bg-primary-dark"}`}>
        {menuItems.map(({ key, href }) => (
          <NavbarMenuItem key={key}>
            <Link className="w-full text-textMain-light dark:text-textMain-dark" href={href} size="lg">
              {t(`navbar.${key}`)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;