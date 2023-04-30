"use client";
import React from "react";
import { Box, Center, Group, Stack, Text } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import NextImage from "next/image";
import { subscriptionStripeSVG } from "@features/subscription/assets";

export default function SubscriptionReminderPage() {
  return (
    <Stack spacing="0" h="100%">
      <NavBar />
      <LayoutHomeContent
        h="calc(100vh - 4.188rem)"
        mih="calc(100vh - 4.188rem)"
      >
        <Stack miw="100%" spacing={0} h="100%">
          <Text size="lg" fw="500">
            Subscription Expiry Reminder{" "}
            <Text component="span" fw="700" color="sumo.6">
              {/* TODO: Update to dynamic */}
              / Gym Update
            </Text>
          </Text>

          <Center
            h="100%"
            sx={{
              flex: 1,
            }}
          >
            <Group w="100%" position="center" h="100%" align="center">
              <Box
                component={NextImage}
                src={subscriptionStripeSVG}
                alt="subscription stripe svg"
              />
              <Stack>
                <Text color="sumo.4" size={28} fw="700" transform="uppercase">
                  Your subscription will expire in 10 Days.
                </Text>
                <Text size={20} transform="uppercase">
                  Keep enjoying our GYM Service by renewing your subscription.
                </Text>
              </Stack>
            </Group>
          </Center>
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
