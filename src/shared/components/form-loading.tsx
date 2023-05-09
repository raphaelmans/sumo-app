import { Skeleton, Stack, StackProps } from "@mantine/core";
import React from "react";

type Props = StackProps;

const FormLoading = (props: Props) => {
  return (
    <Stack maw={500} spacing="md" {...props}>
      <Skeleton height={16} />
      <Skeleton height={16} />
      <Skeleton height={16} width="70%" />
      <Skeleton height={16} width="70%" />
      <Skeleton height={16} width="50%" />
    </Stack>
  );
};

export default FormLoading;
