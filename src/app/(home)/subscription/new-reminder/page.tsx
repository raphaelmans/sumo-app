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

export default function SubscriptionNewReminderPage() {
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
                  Introducing our latest subscription offering
                </Text>
                <Text color="sumo.5" size={32} fw="700" transform="uppercase">
                  check it out today!
                </Text>
                <Text size={18} fw="700" mt={64}>
                  Subscription Name
                </Text>
                <Text size={32}>Yoga AI Coach</Text>
                <Text size={18} fw="700">
                  Category
                </Text>
                <Text size={32}>Fitness</Text>
                <Stack align="center">
                  <Text size={18} fw="700">
                    Billing Plan
                  </Text>
                  <Group>
                    <Flex
                      sx={{
                        borderRadius: rem(25),
                      }}
                      direction="column"
                      align="center"
                      justify="center"
                      bg="rgba(248,209,205,.25)"
                      h={200}
                      w={200}
                    >
                      <Text>Monthly</Text>
                      <Text>100 PHP</Text>
                    </Flex>

                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      bg="rgba(248,209,205,.25)"
                      h={200}
                      w={200}
                      sx={{
                        borderRadius: rem(10),
                      }}
                    >
                      <Text>-17 %</Text>
                      <Text>Annual</Text>
                      <Text>1000 PHP</Text>
                    </Flex>
                  </Group>
                  <Button
                    variant="light"
                    bg="white"
                    sx={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                    }}
                    mt={16}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Center>
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
