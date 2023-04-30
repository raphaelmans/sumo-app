"use client";
import React from "react";
import { Box, Button, Input, Stack, Text, Textarea } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";

export default function ConfigurationPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              System Configuration
            </Text>
          </Text>
          <Box component="form">
            <Stack w={430} mt={16} ml={48}>
              <Input.Wrapper label="Days before users get notified about their subscription expiry">
                <Input type="number" placeholder="10" color="gray.9" />
              </Input.Wrapper>
              <Textarea
                placeholder="johndoe@gmail.com, alice@gmail.com"
                label="Recipient for Subscription Updates"
                withAsterisk
                mt={16}
              />
              <Button
                variant="light"
                bg="white"
                sx={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                }}
                w="min-content"
                ml="auto"
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
