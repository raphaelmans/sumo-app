"use client";
import React from "react";
import {
  Stack,
  Text,
} from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { SubscriptionNewForm } from "@features/subscription";

export default function DashboardPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            Subscription Master{" "}
            <Text component="span" fw="700" color="sumo.6">
              / New Subscription
            </Text>
          </Text>
          <SubscriptionNewForm />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
