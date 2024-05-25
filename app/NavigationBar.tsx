'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
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
        <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                About Me
              </Button>
            </DropdownTrigger>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="gaming">
              <Link href="/gaming">Gaming</Link>
            </DropdownItem>
            <DropdownItem key="music">
              <Link href="/music">Music</Link>
            </DropdownItem>
            <DropdownItem key="art">
              <Link href="/art">Art</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
);