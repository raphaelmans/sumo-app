import {
  Box,
  BoxProps,
  Button,
  Group,
  Input,
  Select,
  Stack,
} from "@mantine/core";
import React from "react";

type Props = BoxProps;

const AppUserEditForm = (props: Props) => {
  return (
    <Box component="form" maw={500} {...props}>
      <Stack px={48} py={24}>
        <Input.Wrapper label="Email" w="100%">
          <Input type="text" placeholder="Name" />
        </Input.Wrapper>
        <Input.Wrapper label="First Name" w="100%">
          <Input type="text" placeholder="Name" />
        </Input.Wrapper>
        <Input.Wrapper label="Last Name" w="100%">
          <Input type="text" placeholder="Name" />
        </Input.Wrapper>
        <Input.Wrapper label="Address" w="100%">
          <Input type="text" placeholder="Name" />
        </Input.Wrapper>
        <Select
          label="Status"
          placeholder="Choose"
          data={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
        <Group mt={28}>
          <Button variant="outline" bg="white">
            Save
          </Button>
          <Button>Delete</Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default AppUserEditForm;
