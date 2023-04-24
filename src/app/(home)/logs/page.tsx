"use client";
import React from "react";
import { Stack, Text } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { SubscriptionNewForm } from "@features/subscription";
import UpdateLogsSummary from "@features/update-logs/update-logs-summary";

export default function LogsPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              Update Logs{" "}
            </Text>
          </Text>
          {/* <SubscriptionNewForm /> */}
          <UpdateLogsSummary/>
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
