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

          <Flex
            sx={{
              flexDirection: "row",
              gap: rem(16),
            }}
          >
            <Card
              radius="xl"
              sx={{
                boxShadow: "0px 5px 12px 0px #00000040",
                flex: 1,
              }}
              mih={330}
              maw="100%"
            >
              <Text>Subscription Summary:</Text>
              <Card.Section>
                <Divider />
              </Card.Section>
              <Card.Section></Card.Section>
            </Card>
            <Card
              radius="xl"
              sx={{
                boxShadow: "0px 5px 12px 0px #00000040",
              }}
              mih={330}
              maw={330}
            >
              <Text>Top Subscription</Text>
              <Card.Section>
                <Divider />
              </Card.Section>
              <Card.Section></Card.Section>
            </Card>
          </Flex>
          <Space h={16} />
          <DashboardTable />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
