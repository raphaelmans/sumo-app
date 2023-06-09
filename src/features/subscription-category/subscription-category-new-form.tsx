import { Box, Button, Group, Input, Stack } from "@mantine/core";
import React from "react";
import type { CreateSubscriptionCategoryForm } from "./types";
import { SubscriptionCategoryCreate } from "@shared/services/subscription-category-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscriptionCategorySchema } from "./form-utils";
import { useForm } from "react-hook-form";
import { useCreateSubscriptionCategory } from "./hooks";
import { notifications } from "@mantine/notifications";

type Props = {};

const SubscriptionCategoryNewForm = (props: Props) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<CreateSubscriptionCategoryForm>({
    resolver: zodResolver(createSubscriptionCategorySchema),
    mode: "onChange",
  });

  const { createSubscriptionCategory, isMutating } =
    useCreateSubscriptionCategory();

  const onSubmit = async (data: CreateSubscriptionCategoryForm) => {
    // TODO: UPdate subscriptionCategoryId dynamic
    const subscriptionCreate: SubscriptionCategoryCreate = {
      categoryName: data.categoryName,
    };

    try {
      await createSubscriptionCategory({
        data: subscriptionCreate,
      });
      notifications.show({
        title: "Success",
        message: "Category created successfully",
        color: "green",
      });
    } catch (e) {
      notifications.show({
        title: "Failed",
        message: "Category failed to create",
        color: "red",
      });
    }
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
        <Input.Wrapper
          label="Category"
          w="100%"
          error={errors?.categoryName?.message}
        >
          <Input
            type="text"
            placeholder="Entertainment"
            {...register("categoryName")}
          />
        </Input.Wrapper>
        <Group mt={28}>
          <Button
            variant="outline"
            bg="white"
            type="submit"
            loading={isMutating}
            disabled={!isValid}
          >
            ADD
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SubscriptionCategoryNewForm;
