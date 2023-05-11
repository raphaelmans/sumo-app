"use client";
import {
  Box,
  Button,
  Input,
  Stack,
  Title,
  Text,
  rem,
  Flex,
  NativeSelect,
} from "@mantine/core";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { RegisterFormType } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./form-utils";
import { useRegister } from "./hooks";
import { appUserStatus } from "@features/app-user/constants";
import { RegisterAuthUser } from "@types";

type Props = {};

const RegisterForm = (props: Props) => {
  const router = useRouter();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const { registerUser, isMutating } = useRegister();

  const onSubmit = async (data: RegisterFormType) => {
    try {
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
      const res = await registerUser({
        data: user,
      });

      if (res?.status === 200) {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onError = (error: any) => {
    console.error(
      "🚀 ~ file: subscription-new-form.tsx:43 ~ onError ~ error:",
      error
    );
  };
  return (
    <Box
      component="form"
      w="100%"
      h="100%"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Stack
        bg="white"
        sx={(theme) => ({
          [theme.fn.largerThan("xs")]: {
            borderRadius: 0,
          },
          [theme.fn.largerThan("sm")]: {
            borderRadius: rem(50),
          },
          boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.3);",
        })}
        mih={{ base: "100dvh", sm: 385 }}
        w={{ base: "100%", sm: 543 }}
        align="center"
        justify="center"
        spacing={8}
        px={48}
        py={64}
      >
        <Title size={32} order={3}>
          SuMo
        </Title>
        <Input.Wrapper
          label="Username"
          w="100%"
          error={errors?.userName?.message?.toString()}
        >
          <Input
            placeholder="Enter your username"
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
            placeholder="Enter your email"
            {...register("emailAddress")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="First Name" w="100%">
          <Input
            type="text"
            placeholder="Enter your first name"
            {...register("firstName")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Last Name" w="100%">
          <Input
            type="text"
            placeholder="Enter your last name"
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
            placeholder="Enter your address"
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
            placeholder="Enter your password"
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
        <Flex w="100%">
          <Text size="xs">
            Already have an account?{" "}
            <Text fw="bold" component={NextLink} href="/">
              Login here
            </Text>
          </Text>
        </Flex>

        <Button
          ml="auto"
          bg="black"
          variant="filled"
          type="submit"
          loading={isMutating}
          disabled={!isValid}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
