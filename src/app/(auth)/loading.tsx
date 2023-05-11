"use client";
import { Center, LoadingOverlay } from "@mantine/core";
import React from "react";

type Props = {};

const RootLoading = (props: Props) => {
  return (
    <Center
      mih="100vh"
      miw="100vh"
      sx={{
        zIndex: 9999,
      }}
    >
      <LoadingOverlay visible={true} overlayBlur={10} overlayColor="sumo.8" />
    </Center>
  );
};

export default RootLoading;
