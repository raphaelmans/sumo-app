import { Box, Input, NativeSelect, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { billingCycle, subscriptionStatus } from "./constants";
import { useSubscriptionCategories } from "@features/subscription-category/hooks";
import { AuditLog, Subscription } from "@types";
import { useGetSubscription } from "./hooks/use-get-subscription";
import { compareObjects } from "@shared/utils";
import { SubscriptionUpdated } from "./types";

type Props = {
  auditLog: AuditLog;
};

const SubscriptionPreviewForm = ({ auditLog }: Props) => {
  const pastSub = auditLog.pastSubscription;
  const { data: subscriptionCategories } = useSubscriptionCategories();
  const typeUpdated = auditLog.action === "Updated";

  const { data: subRes } = useGetSubscription(
    typeUpdated ? pastSub.subscriptionId.toString() : undefined
  );

  const [updatedFields, setUpdatedFields] = useState<
    SubscriptionUpdated | undefined
  >();

  useEffect(() => {
    if (subRes?.data.id) {
      const updated = compareObjects<Subscription>(
        auditLog.pastSubscription,
        subRes.data
      );

      setUpdatedFields(updated as SubscriptionUpdated);
    }
  }, [subRes?.data.id]);

  console.log(
    "🚀 ~ file: subscription-preview-form.tsx:25 ~ SubscriptionPreviewForm ~ updatedFields:",
    updatedFields
  );
  const archivedSub = subRes?.data;
  return (
    <Box component="form" maw={500}>
      <Stack px={48} py={24}>
        <Input.Wrapper
          label="Subscription Name"
          w="100%"
          error={
            updatedFields?.subscriptionName
              ? archivedSub?.subscriptionName
              : undefined
          }
        >
          <Input
            type="text"
            placeholder="Name"
            defaultValue={pastSub.subscriptionName}
            readOnly
          />
        </Input.Wrapper>

        {subscriptionCategories?.data && (
          <NativeSelect
            label="Subscription Category"
            placeholder="Choose"
            data={subscriptionCategories.data.map((item) => ({
              label: item.categoryName,
              value: String(item.id),
            }))}
            defaultValue={
              subscriptionCategories.data.find(
                (item) => item.id === pastSub.subscriptionCategoryId
              )?.categoryName ?? subscriptionCategories.data[0].categoryName
            }
            error={
              updatedFields?.subscriptionCategoryId
                ? subscriptionCategories.data.find(
                    (item) => item.id === archivedSub?.subscriptionCategoryId
                  )?.categoryName ?? subscriptionCategories.data[0].categoryName
                : undefined
            }
            disabled
          />
        )}

        <NativeSelect
          label="Billing Cycle"
          placeholder="Choose"
          data={billingCycle.map((cycle) => ({
            label: cycle,
            value: cycle,
          }))}
          defaultValue={pastSub.billingCycle}
          error={
            updatedFields?.billingCycle ? archivedSub?.billingCycle : undefined
          }
          disabled
        />
        <Input.Wrapper
          label="Subscription Cost"
          w="100%"
          error={
            updatedFields?.subscriptionCost
              ? archivedSub?.subscriptionCost
              : undefined
          }
        >
          <Input
            type="number"
            placeholder="99.99"
            defaultValue={pastSub.subscriptionCost}
            readOnly
          />
        </Input.Wrapper>
        <NativeSelect
          label="Status"
          placeholder="Choose"
          data={subscriptionStatus.map((status) => ({
            label: status,
            value: status,
          }))}
          defaultValue={pastSub.status}
          error={updatedFields?.status ? archivedSub?.status : undefined}
          disabled
        />
      </Stack>
    </Box>
  );
};

export default SubscriptionPreviewForm;
