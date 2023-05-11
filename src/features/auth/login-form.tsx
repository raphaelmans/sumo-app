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
} from "@mantine/core";
import NextLink from "next/link";
import React, { useState } from "react";
import { LoginFormType } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./form-utils";
import { useLogin } from "./hooks";
import useAuthToken from "./hooks/use-auth-token";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import { logoSVG } from "@features/subscription/assets";
import NextImage from "next/image";

type Props = {};

const LoginForm = (props: Props) => {
  const router = useRouter();

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const { loginUser, isMutating } = useLogin();
  const { setAuthToken } = useAuthToken();

  const onSubmit = async (data: LoginFormType) => {
    try {
      const res = await loginUser({
        username: data.userName,
        password: data.password,
      });

      if (res?.data.access_token) {
        setAuthToken(res?.data.access_token);
        router.push("/dashboard");
      }
    } catch (e) {
      notifications.show({
        title: "Failed to login",
        message: "Please check your username and password",
        color: "red",
      });
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
        h={{ base: "100dvh", sm: 385 }}
        w={{ base: "100%", sm: 543 }}
        align="center"
        justify="center"
        spacing={8}
        px={48}
      >
        <NextImage
          src={logoSVG}
          alt="logo"
          loading="eager"
          priority={true}
          height={45}
        />
        <Input.Wrapper
          label="Username"
          w="100%"
          error={errors?.userName?.message?.toString()}
        >
          <Input
            type="text"
            placeholder="Enter your username"
            {...register("userName")}
          />
        </Input.Wrapper>
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
        <Flex w="100%">
          <Text size="xs">
            Don’t have an account?{" "}
            <Text fw="bold" component={NextLink} href="/register">
              Register here
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
          Login
        </Button>
        <Text
          ml="auto"
          size="xs"
          td="underline"
          sx={{
            cursor: "pointer",
          }}
          mt={-8}
          component={NextLink}
          href="/forgot-password"
        >
          Forgot Password
        </Text>
      </Stack>
    </Box>
  );
};

export default LoginForm;
