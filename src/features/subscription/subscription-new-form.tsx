import {
  Box,
  Button,
  Group,
  Input,
  NativeSelect,
  Select,
  Stack,
} from "@mantine/core";
import React from "react";
import { useCreateSubscription } from "./hooks";
import {
  CreateSubscriptionForm,
} from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscriptionSchema } from "./form-utils";
import { useForm } from "react-hook-form";
import { billingCycle, subscriptionStatus } from "./constants";
import { SubscriptionCreate } from "@shared/services/subscription-service";
import { useSubscriptionCategories } from "@features/subscription-category/hooks";

const SubscriptionNewForm = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<CreateSubscriptionForm>({
    resolver: zodResolver(createSubscriptionSchema),
    mode: "onChange",
  });

  const { data: subscriptionCategories } = useSubscriptionCategories();
  const { createSubscription, isMutating } = useCreateSubscription();

  const onSubmit = (data: CreateSubscriptionForm) => {
    // TODO: UPdate subscriptionCategoryId dynamic
    const subscriptionCreate: SubscriptionCreate = {
      subscriptionName: data.subscriptionName,
      subscriptionCategoryId: Number(data.subscriptionCategoryId),
      subscriptionCost: Number(data.subscriptionCost),
      billingCycle: data.billingCycle,
      status: data.status,
      appUserId: 1,
    };
    createSubscription({
      subscription: subscriptionCreate,
    });
  };

  const onError = (error: any) => {
    console.error(
      "🚀 ~ file: subscription-new-form.tsx:43 ~ onError ~ error:",
      error
    );
  };

  return (
    <Box component="form" maw={500} onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack px={48} py={24}>
        <Input.Wrapper label="Subscription Name" w="100%">
          <Input
            type="text"
            placeholder="Name"
            error={errors?.subscriptionName?.message?.toString()}
            {...register("subscriptionName")}
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
            error={errors?.subscriptionCategoryId?.message?.toString()}
            {...register("subscriptionCategoryId")}
          />
        )}

        <NativeSelect
          label="Billing Cycle"
          placeholder="Choose"
          data={billingCycle.map((cycle) => ({
            label: cycle,
            value: cycle,
          }))}
          error={errors?.billingCycle?.message?.toString()}
          {...register("billingCycle")}
        />
        <Input.Wrapper
          label="Subscription Cost"
          w="100%"
          error={errors?.subscriptionCost?.message?.toString()}
        >
          <Input
            type="number"
            placeholder="99.99"
            {...register("subscriptionCost")}
          />
        </Input.Wrapper>
        <NativeSelect
          label="Status"
          placeholder="Choose"
          data={subscriptionStatus.map((status) => ({
            label: status,
            value: status,
          }))}
          error={errors?.status?.message?.toString()}
          {...register("status")}
        />
        <Group mt={28}>
          <Button
            disabled={!isValid}
            loading={isMutating}
            variant="outline"
            bg="white"
            type="submit"
          >
            ADD
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SubscriptionNewForm;
