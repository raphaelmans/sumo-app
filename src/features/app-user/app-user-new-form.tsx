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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateAppUser } from "./hooks";
import { appUserStatus } from "./constants";
import { RegisterFormType } from "@features/auth/types";
import { registerSchema } from "@features/auth/form-utils";
import { RegisterAuthUser } from "@types";

type Props = {};

const AppUserNewForm = (props: Props) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const { createUser, isMutating } = useCreateAppUser();

  const onSubmit = (data: RegisterFormType) => {
    // TODO: UPdate subscriptionCategoryId dynamic
    const user: RegisterAuthUser = {
      emailAddress: data.emailAddress,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      status: data.status,
      userName: data.userName,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: "User",
    };
    createUser({
      data: user,
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
        <Input.Wrapper
          label="Username"
          w="100%"
          error={errors?.userName?.message?.toString()}
        >
          <Input
            placeholder="Enter username"
            type="text"
            {...register("userName")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="Email"
          w="100%"
          error={errors?.emailAddress?.message?.toString()}
        >
          <Input
            type="text"
            placeholder="Enter email"
            {...register("emailAddress")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="First Name" w="100%">
          <Input
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Last Name" w="100%">
          <Input
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="Address"
          error={errors?.address?.message?.toString()}
          w="100%"
        >
          <Input
            type="text"
            placeholder="Enter address"
            {...register("address")}
          />
        </Input.Wrapper>
        <NativeSelect
          label="Status"
          placeholder="Choose"
          data={appUserStatus.map((value) => ({ label: value, value }))}
          error={errors?.status?.message?.toString()}
          w="100%"
          {...register("status")}
        />
        <Input.Wrapper
          label="Password"
          w="100%"
          error={errors?.password?.message?.toString()}
        >
          <Input
            type="password"
            placeholder="Enter password"
            {...register("password")}
          />
        </Input.Wrapper>

        <Input.Wrapper
          label="Confirm Password"
          w="100%"
          error={errors?.confirmPassword?.message?.toString()}
        >
          <Input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
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

export default AppUserNewForm;
