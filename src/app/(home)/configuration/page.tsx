"use client";
import React from "react";
import { Box, Button, Input, Stack, Text, Textarea } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import SysConfigForm from "@features/sys-configuration/sys-config-form";

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
          <SysConfigForm />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
