import { Box, Button, Group, Input, NativeSelect, Stack } from "@mantine/core";
import React from "react";
import {
  BillingCycle,
  EditSubscriptionForm,
  SubscriptionStatus,
} from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscriptionSchema } from "./form-utils";
import { useForm } from "react-hook-form";
import { billingCycle, subscriptionStatus } from "./constants";
import { SubscriptionEdit } from "@shared/services/subscription-service";
import { useSubscriptionCategories } from "@features/subscription-category/hooks";
import { Subscription } from "@types";
import { useEditSubscription } from "./hooks/use-edit-subscripion";
import useAuthToken from "@features/auth/hooks/use-auth-token";
import { useRouter } from "next/navigation";

type Props = {
  subscription: Subscription;
};

const SubscriptionEditForm = ({ subscription }: Props) => {
  const router = useRouter();
  const { getId } = useAuthToken();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<EditSubscriptionForm>({
    resolver: zodResolver(createSubscriptionSchema),
    mode: "onChange",

    defaultValues: {
      subscriptionName: subscription.subscriptionName,
      subscriptionCategoryId: subscription.subscriptionCategoryId.toString(),
      subscriptionCost: subscription.subscriptionCost.toString(),
      billingCycle: subscription.billingCycle as BillingCycle,
      status: subscription.status as SubscriptionStatus,
    },
  });

  const { editSubscription, isMutating } = useEditSubscription();
  const { data: subscriptionCategories } = useSubscriptionCategories();

  const onSubmit = async (data: EditSubscriptionForm) => {
    const subEdit: SubscriptionEdit = {
      subscriptionName: data.subscriptionName,
      subscriptionCategoryId: Number(data.subscriptionCategoryId),
      subscriptionCost: Number(data.subscriptionCost),
      billingCycle: data.billingCycle,
      status: data.status,
      userId: getId()!,
    };

    try {
      const res = await editSubscription({
        id: subscription.id,
        subscription: subEdit,
      });

      if (res?.status === 204) {
        router.push("/subscription");
      }
    } catch (e) {}
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
          data={...billingCycle.map((cycle) => ({
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
            Edit
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SubscriptionEditForm;
