"use client";
import React from "react";
import { ActionIcon, Button, Flex, Stack, Text, rem } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { IconFilter, IconPlus, IconTableExport } from "@tabler/icons-react";
import SubscriptionTable from "@features/subscription/subscription-table";
import NextLink from "next/link";

export default function SubscriptionPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              Subscription Master
            </Text>
          </Text>
          <Flex w="100%" justify="flex-end" gap={8} h={50}>
            <ActionIcon
              color="sumo.5"
              bg="white"
              sx={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              h={36}
            >
              <IconTableExport />
            </ActionIcon>
            <ActionIcon
              color="sumo.5"
              bg="white"
              sx={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              h={36}
            >
              <IconFilter />
            </ActionIcon>

            <Button
              px={8}
              h={36}
              sx={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              bg="sumo.4"
              component={NextLink}
              href="/subscription/new"
            >
              <IconPlus color="white" size={rem(16)} />
              New Subscription
            </Button>
            <Button
              px={8}
              h={36}
              sx={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              variant='light'
              component={NextLink}
              href="/subscription/new-category"
            >
              <IconPlus color="#E04D60" size={rem(16)} />
               Category
            </Button>
          </Flex>
          <SubscriptionTable />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
