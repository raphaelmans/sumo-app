"use client";
import React from "react";
import {
  Stack,
  Text,
} from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { SubscriptionCategoryNewForm } from "@features/subscription-category";

export default function SubscriptionNewPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            Subscription Master{" "}
            <Text component="span" fw="700" color="sumo.6">
              / New Category
            </Text>
          </Text>
          <SubscriptionCategoryNewForm />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
