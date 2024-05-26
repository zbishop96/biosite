'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export const NavigationBar = () => {
  const router = useRouter();
    return <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
      <Link className="font-bold text-inherit" href="/">ZBISH</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
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
          onAction={(key) => router.push(`/${key}`)}
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="">Home</DropdownItem>
            <DropdownItem key="gaming" className="text-white font-large font-semibold">Gaming</DropdownItem>
            <DropdownItem key="music" className="text-white font-large font-semibold">Music</DropdownItem>
            <DropdownItem key="art" className="text-white font-large font-semibold">Art</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="/music-niche">
            Music Niche
          </Link>
        </NavbarItem>
        
      </NavbarContent>
    </Navbar>
};