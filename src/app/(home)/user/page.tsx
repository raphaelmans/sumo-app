"use client";
import React from "react";
import { ActionIcon, Button, Flex, Stack, Text, rem } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { IconFilter, IconPlus, IconTableExport } from "@tabler/icons-react";
import AppUserTable from "@features/app-user/app-user-table";
import NextLink from "next/link";
import { useAppUsers } from "@features/app-user/hooks";
import { CSVDownload, CSVLink } from "react-csv";

export default function UserPage() {
  const { data } = useAppUsers();

  const users = data?.data;
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
            {users && (
              <CSVLink
                data={users}
                headers={[
                  { label: "id", key: "id" },
                  { label: "Username", key: "userName" },
                  { label: "Email Address", key: "emailAddress" },
                  { label: "First Name", key: "firstName" },
                  { label: "Last Name", key: "lastName" },
                  { label: "Address", key: "address" },
                  { label: "Status", key: "status" },
                ]}
                target="_blank"
                filename="users"
              >
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
              </CSVLink>
            )}

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
          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              App Users
            </Text>
          </Text>
          <AppUserTable data={data?.data ?? []} />
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
