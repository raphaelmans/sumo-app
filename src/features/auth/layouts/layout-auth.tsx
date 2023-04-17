"use client";
import { Box, Grid } from "@mantine/core";
import React from "react";

type Props = React.PropsWithChildren;

export const LayoutAuth = ({ children }: Props) => {
  return (
    <Box h="100vh" mah="stretch" w="100%" pos="relative">
      <Grid
        h="100%"
        w="100%"
        m="0"
        p="0"
        sx={(theme) => ({
          [theme.fn.smallerThan("sm")]: {
            display: "none",
          },
        })}
      >
        <Grid.Col bg="#DB283D" span={6}></Grid.Col>
        <Grid.Col bg="#FFFFFF" span={6}></Grid.Col>
      </Grid>
      <Box
        sx={(theme) => ({
          [theme.fn.largerThan("sm")]: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          },
          [theme.fn.smallerThan("sm")]: {
            height: "100%",
            width: "100%",
          },
        })}
      >
        {children}
      </Box>
    </Box>
  );
};
