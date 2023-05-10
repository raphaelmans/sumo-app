"use client";
import React from "react";
import { Stack, Text } from "@mantine/core";
import { NavBar } from "@shared/ui";
import { LayoutHomeContent } from "@shared/layouts";
import { SubscriptionNewForm } from "@features/subscription";
import { redirect } from "next/navigation";
import { useGetSubscription } from "@features/subscription/hooks/use-get-subscription";
import SubscriptionPreviewForm from "@features/subscription/subscription-preview-form";
import { FormLoading } from "@shared/components";
import { useGetLog } from "@features/update-logs/hooks";

export default function LogPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  if (!id && isNaN(Number(id))) {
    redirect("/logs");
  }
  const { data, isLoading } = useGetLog(Number(id));

  return (
    <Stack spacing="0">
      <NavBar />
      <LayoutHomeContent>
        <Stack miw="100%" spacing={0}>
          <Text size="lg" fw="500">
            <Text component="span" fw="700" color="sumo.6">
              Update Logs{" "}
            </Text>
          </Text>
          {data?.data && <SubscriptionPreviewForm auditLog={data.data} />}

          {isLoading && <FormLoading />}
        </Stack>
      </LayoutHomeContent>
    </Stack>
  );
}
