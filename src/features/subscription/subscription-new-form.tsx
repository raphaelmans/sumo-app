import { Box, Button, Group, Input, Select, Stack } from "@mantine/core";
import React from "react";

type Props = {};

const SubscriptionNewForm = (props: Props) => {
  return (
    <Box component="form" maw={500}>
      <Stack px={48} py={24}>
        <Input.Wrapper label="Subscription Name" w="100%">
          <Input type="text" placeholder="Name" />
        </Input.Wrapper>
        <Select
          label="Subscription Category"
          placeholder="Choose"
          data={[
            { label: "Food", value: "food" },
            { label: "Entertainment", value: "entertainment" },
            { label: "Health", value: "health" },
            { label: "Travel", value: "travel" },
          ]}
        />
        <Select
          label="Billing Cycle"
          placeholder="Choose"
          data={[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
        />
        <Input.Wrapper label="Subscription Cost" w="100%">
          <Input type="number" placeholder="99.99" />
        </Input.Wrapper>
        <Input.Wrapper label="Creation Date" w="100%">
          <Input type="date" placeholder="MM/DD/YYYY" />
        </Input.Wrapper>
        <Input.Wrapper label="Last Updated" w="100%">
          <Input type="date" placeholder="MM/DD/YYYY" />
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
            ADD
          </Button>
          <Button>BACK</Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SubscriptionNewForm;
