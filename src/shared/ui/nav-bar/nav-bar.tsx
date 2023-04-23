"use client";
import React from "react";
import { Avatar, Box, List, Navbar } from "@mantine/core";

type Props = {};

const navBarItems = [
  "Dashboard",
  "Subscriptions",
  "Users",
  "Logs",
  "Configuration",
];
const NavBar = (props: Props) => {
  return (
    <Navbar
      display="flex"
      sx={{
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
        position: "sticky",
      }}
      px={16}
      w="100%"
      h={67}
    >
      <Box w="min-content" mr={24}>
        SuMo
      </Box>
      <Navbar.Section
        display="flex"
        sx={{
          alignItems: "center",
        }}
      >
        <List withPadding={false} listStyleType="none" display="flex">
          {navBarItems.map((item, index) => (
            <List.Item key={index} px={12}>
              {item}
            </List.Item>
          ))}
        </List>
      </Navbar.Section>
      <Avatar radius={36} ml="auto" />
    </Navbar>
  );
};

export default NavBar;
