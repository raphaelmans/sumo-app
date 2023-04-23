"use client";
import { Box } from "@mantine/core";
import React from "react";

type Props = React.PropsWithChildren;

const LayoutHome = ({ children }: Props) => {
  return (
    <Box mih="100vh" h="100%" w="100%" bg="#FEFAF9">
      {children}
    </Box>
  );
};

export default LayoutHome;
