"use client";
import { Container, ContainerProps } from "@mantine/core";
import React from "react";

type Props = React.PropsWithChildren & ContainerProps;

const LayoutHomeContent = ({ children, ...props }: Props) => {
  return (
    <Container miw="100%" p={48} {...props}>
      {children}
    </Container>
  );
};

export default LayoutHomeContent;
