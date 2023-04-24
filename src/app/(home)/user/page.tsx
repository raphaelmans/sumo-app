"use client";
import React from "react";
import { Stack, Text } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";

export default function UserPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              User Master
            </Text>
          </Text>
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
