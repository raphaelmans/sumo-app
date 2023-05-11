"use client";
import React from "react";
import {
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Space,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import DashboardTable from "@features/dashboard/dashboard-table";

export default function DashboardPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text fw="700" color="sumo.6" size="lg">
            Dashboard
          </Text>

          <Space h={16} />
          <DashboardTable />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
