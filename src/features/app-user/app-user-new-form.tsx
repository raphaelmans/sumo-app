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
import { CreateAppUserForm } from "./types";
import { createAppUserSchema } from "./form-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateAppUser } from "./hooks";
import { AppUserCreate } from "@shared/services/app-user-service";
import { appUserStatus } from "./constants";

type Props = {};

const AppUserNewForm = (props: Props) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<CreateAppUserForm>({
    resolver: zodResolver(createAppUserSchema),
    mode: "onChange",
  });

  const { createUser, isMutating } = useCreateAppUser();

  const onSubmit = (data: CreateAppUserForm) => {
    // TODO: UPdate subscriptionCategoryId dynamic
    const appUserCreate: AppUserCreate = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      status: data.status,
    };
    createUser({
      data: appUserCreate,
    });
  };

  const onError = (error: any) => {
    console.log(
      "🚀 ~ file: subscription-new-form.tsx:43 ~ onError ~ error:",
      error
    );
  };

  return (
    <Box component="form" maw={500} onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack px={48} py={24}>
        <Input.Wrapper label="Email" w="100%">
          <Input type="text" placeholder="" {...register("email")} />
        </Input.Wrapper>
        <Input.Wrapper label="First Name" w="100%">
          <Input type="text" placeholder="" {...register("firstName")} />
        </Input.Wrapper>
        <Input.Wrapper label="Last Name" w="100%">
          <Input type="text" placeholder="" {...register("lastName")} />
        </Input.Wrapper>
        <Input.Wrapper label="Address" w="100%">
          <Input type="text" placeholder="" {...register("address")} />
        </Input.Wrapper>
        <NativeSelect
          label="Status"
          placeholder="Choose"
          data={appUserStatus.map((value) => ({ label: value, value }))}
          {...register("status")}
        />
        <Group mt={28}>
          <Button
            variant="outline"
            bg="white"
            type="submit"
            loading={isMutating}
          >
            ADD
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default AppUserNewForm;
