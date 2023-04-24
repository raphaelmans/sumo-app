"use client";
import React from "react";
import {
  Stack,
  Text,
} from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import UserNewForm from "@features/user-master/user-new-form";

export default function UserNewPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            User Master{" "}
            <Text component="span" fw="700" color="sumo.6">
              / New User
            </Text>
          </Text>
          <UserNewForm />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
