
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import React from "react";

export const NavigationBar = () => (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
      <Link className="font-bold text-inherit" href="/">ZBISH</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link color="foreground" href="/gaming">
            Gaming
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/music-niche">
            Music Niche
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
);