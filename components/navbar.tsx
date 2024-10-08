import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import ShimmerButton from "./ui/shimmer-button";
import { BorderBeam } from "./ui/border-beam";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar className="sticky top-0" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <span className="Logo">CS</span>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <ScrollLink
                activeClass="data-[active=true]"
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "cursor-pointer data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                duration={500}
                offset={-70}
                smooth={true}
                spy={true}
                to={item.href.slice(1)}
              >
                {item.label}
              </ScrollLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.Linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <div className="flex items-center justify-center gap-x-6">
            <Link href="https://drive.usercontent.google.com/download?id=1VxOvxGKfqA_EBA4kURSjPvm43g6WQz6A&export=download&authuser=1&confirm=t&uuid=8944c18a-e67b-4c0f-b701-9882675d23a7&at=APZUnTXqk1vEIMRexwkOkSgAu8VF:1723467258468">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Resume
                </span>
                <BorderBeam delay={9} duration={12} size={250} />
              </ShimmerButton>
            </Link>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.Linkedin}>
          <LinkedinIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <ScrollLink
                activeClass="text-primary font-medium"
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "cursor-pointer",
                  {
                    "text-primary": index === 2,
                    "text-danger": index === siteConfig.navMenuItems.length - 1,
                  },
                )}
                duration={500}
                offset={-70}
                smooth={true}
                spy={true}
                to={item.href.slice(1)}
              >
                {item.label}
              </ScrollLink>
            </NavbarMenuItem>
          ))}
          <div className="flex items-center justify-start gap-x-6">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Resume
              </span>
              <BorderBeam delay={9} duration={12} size={250} />
            </ShimmerButton>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
