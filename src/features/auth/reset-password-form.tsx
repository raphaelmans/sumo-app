"use client";
import { Box, Button, Input, Stack, Title, rem } from "@mantine/core";
import React from "react";

type Props = {};

const ResetPasswordForm = (props: Props) => {
  return (
    <Box component="form" w="100%" h="100%">
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
        mih={{ base: "100dvh", sm: "auto" }}
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
        <Input.Wrapper label="New Password" w="100%">
          <Input type="password" placeholder="Enter your new password" />
        </Input.Wrapper>
        <Input.Wrapper label="Confirm Password" w="100%">
          <Input type="password" placeholder="Enter confirm password" />
        </Input.Wrapper>

        <Button ml="auto" bg="black" variant="filled">
          Reset Password
        </Button>
      </Stack>
    </Box>
  );
};

export default ResetPasswordForm;
