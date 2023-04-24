"use client";
import React from "react";
import { Anchor, Avatar, Box, List, Navbar } from "@mantine/core";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

type Props = {};

type NavLink = {
  label: string;
  href: string;
  value: string;
};
const navLinks: NavLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    value: "dashboard",
  },
  {
    label: "Subscription",
    href: "/subscription",
    value: "subscription",
  },
  {
    label: "Users",
    href: "/users",
    value: "users",
  },
  {
    label: "Logs",
    href: "/logs",
    value: "logs",
  },
  {
    label: "Configuration",
    href: "/configuration",
    value: "configuration",
  },
];
const NavBar = (props: Props) => {
  const pathName = usePathname();

  return (
    <Navbar
      display="flex"
      sx={{
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
        position: "sticky",
        top: 0,
      }}
      px={48}
      w="100%"
      h={67}
    >
      <Anchor
        w="min-content"
        mr={24}
        component={NextLink}
        href="/dashboard"
        td="none"
        color="black"
        fw={800}
        sx={{
          ":hover": {
            color: "black",
            textDecoration: "none",
          },
        }}
      >
        SuMo
      </Anchor>
      <Navbar.Section
        display="flex"
        sx={{
          alignItems: "center",
        }}
      >
        <List withPadding={false} listStyleType="none" display="flex">
          {navLinks.map((item, index) => (
            <List.Item
              key={index}
              px={12}
              sx={(theme) => ({
                fontWeight: pathName.includes(item.value) ? "bold" : "normal",
                cursor: "pointer",
              })}
            >
              <Anchor
                component={NextLink}
                href={item.href}
                td="none"
                sx={(theme) => ({
                  color: pathName.includes(item.value)
                    ? theme.colors["sumo"][3]
                    : "inherit",
                  ":hover": {
                    textDecoration: "none",
                  },
                })}
              >
                {item.label}
              </Anchor>
            </List.Item>
          ))}
        </List>
      </Navbar.Section>
      <Avatar radius={36} ml="auto" />
    </Navbar>
  );
};

export default NavBar;
