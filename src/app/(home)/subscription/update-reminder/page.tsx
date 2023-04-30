"use client";
import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import NextImage from "next/image";
import {
  subscriptionShowcaseSVG,
} from "@features/subscription/assets";

export default function SubscriptionUpdateReminderPage() {
  return (
    <Stack spacing="0" h="100%">
      <NavBar />
      <LayoutHomeContent h="auto" mih="calc(100vh - 4.188rem)" mah="100%">
        <Stack miw="100%" spacing={0} h="100%">
          <Text size="lg" fw="500">
            New Subscription Reminder{" "}
            <Text component="span" fw="700" color="sumo.6">
              {/* TODO: Update to dynamic */}/ Gym Update
            </Text>
          </Text>

          <Center h="100%" mt={48} mb={24}>
            <Stack>
              <Box
                component={NextImage}
                src={subscriptionShowcaseSVG}
                alt="subscription showcase svg"
              />

              <Stack align="center" mt={16}>
                <Text color="sumo.4" size={28} fw="600" transform="uppercase">
                Our subscription has been refreshed and improved - 
                </Text>
                <Text color="sumo.5" size={32} fw="700" transform="uppercase">
                check out the updates.
                </Text>
              
                  <Button
                    variant="light"
                    bg="white"
                    sx={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                    }}
                    mt={16}
                  >
                    See Updates
                  </Button>
                </Stack>
            </Stack>
          </Center>
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
