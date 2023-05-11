"use client";
import React from "react";
import { Stack, Text } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { SubscriptionEditForm } from "@features/subscription";
import { redirect } from "next/navigation";
import { useGetSubscription } from "@features/subscription/hooks/use-get-subscription";
import { FormLoading } from "@shared/components";

export default function SubscriptionEditPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  if (!id) {
    redirect("/subscription");
  }
  const { data, isLoading } = useGetSubscription(id);

  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            Subscription Master{" "}
            <Text component="span" fw="700" color="sumo.6">
              / Edit Subscription
            </Text>
          </Text>
          {(isLoading || !data) && <FormLoading px={48} py={28} />}

          {!isLoading && data && (
            <SubscriptionEditForm subscription={data.data} />
          )}
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
