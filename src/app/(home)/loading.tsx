"use client";
import { Center, LoadingOverlay } from "@mantine/core";
import React from "react";

type Props = {};

const RootLoading = (props: Props) => {
  return (
    <Center mih="100vh" miw="100vh">
      <LoadingOverlay visible={true} overlayBlur={2} />
    </Center>
  );
};

export default RootLoading;
