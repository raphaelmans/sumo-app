"use client";
import React from "react";
import { Stack, Text } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import AppUserNewForm from "@features/app-user/app-user-new-form";
import { redirect } from "next/navigation";
import { useGetAppUser } from "@features/app-user/hooks";
import { FormLoading } from "@shared/components";
import AppUserEditForm from "@features/app-user/app-user-edit-form";

export default function UserEditPage({
  searchParams: { id },
}: {
  searchParams: {
    id: string;
  };
}) {
  if (!id) {
    redirect("/subscription");
  }
  const { data, isLoading } = useGetAppUser(id);

  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            User Master{" "}
            <Text component="span" fw="700" color="sumo.6">
              / New User
            </Text>
          </Text>
          {(isLoading || !data) && <FormLoading px={48} py={28} />}

          {!isLoading && data && <AppUserEditForm appUser={data.data} />}
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
