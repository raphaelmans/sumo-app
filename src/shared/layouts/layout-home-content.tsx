"use client";
import { Container } from "@mantine/core";
import React from "react";

type Props = React.PropsWithChildren;

const LayoutHomeContent = ({ children }: Props) => {
  return (
    <Container miw="100%" p={48}>
      {children}
    </Container>
  );
};

export default LayoutHomeContent;
