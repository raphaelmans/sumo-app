"use client";
import React from "react";
import { ActionIcon, Button, Flex, Stack, Text, rem } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { IconFilter, IconPlus, IconTableExport } from "@tabler/icons-react";
import UserTable from "@features/user-master/user-table";
import NextLink from "next/link";
import UserNewForm from "@features/user-master/user-new-form";
import UserEditForm from "@features/user-master/user-edit-form";

export default function UserPage() {
  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            User Master{" "}
            <Text component="span" fw="700" color="sumo.6">
              {/* TODO: Make dynamic */}/ John Doe
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
              component={NextLink}
              sx={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              bg="sumo.4"
              href="/user/new"
            >
              <IconPlus color="white" size={rem(16)} />
              New User
            </Button>
          </Flex>
          <UserEditForm mb={16} />

          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              Subscriptions
            </Text>
          </Text>
          <UserTable />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
