"use client";
import {
  Box,
  Button,
  Input,
  Stack,
  Title,
  Text,
  rem,
  NavLink,
  Flex,
} from "@mantine/core";
import NextLink from "next/link";
import React from "react";

type Props = {};

export const LoginForm = (props: Props) => {
  return (
    <Box component="form" w='100%' h='100%'>
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
        <Title size={32} order={3}>
          SuMo
        </Title>
        <Input.Wrapper label="Email" w="100%">
          <Input type="text" placeholder="Enter your email" />
        </Input.Wrapper>
        <Input.Wrapper label="Password" w="100%">
          <Input type="password" placeholder="Enter your password" />
        </Input.Wrapper>
        <Flex w="100%">
          <Text size="xs">
            Don’t have an account?{" "}
            <Text fw="bold" component={NextLink} href="/register">
              Register here
            </Text>
          </Text>
        </Flex>

        <Button ml="auto" bg="black" variant="filled">
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
        >
          Reset Password
        </Text>
      </Stack>
    </Box>
  );
};
