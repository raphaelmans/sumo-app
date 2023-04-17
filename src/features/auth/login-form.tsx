"use client";
import { Stack, Title, rem } from "@mantine/core";
import React from "react";

type Props = {};

export const LoginForm = (props: Props) => {
  return (
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
      h={{ xs: "100dvh", sm: 385 }}
      w={{ xs: "100%", sm: 543 }}
      align="center"
    >
      <Title size={32} order={3}>
        SuMo
      </Title>
    </Stack>
  );
};
