import {
  ActionIcon,
  Center,
  Stack,
  Table,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import { LogSummaryItem } from "./view_types";
import { sampleLogSummaryItems } from "@data";
import { format } from "date-fns";
import { IconChevronRight } from "@tabler/icons-react";

type Props = {};

const UpdateLogsSummary = (props: Props) => {
  return (
    <Center>
      <Table
        maw={800}
        sx={(theme) => ({
          "&& td": {
            textAlign: "center",
          },
          "&& th": {
            color: theme.colors["sumo"][3],
            textAlign: "center",
            fontWeight: "bolder",
          },
          "&& tr td:first-child": {
            fontWeight: "bold",
          },
          "&& tr td:nth-child(2), th:nth-child(2)": {
            color: theme.colors.gray[6],
            fontWeight: "bold",
          },
          "&& tr td:nth-child(3),th:nth-child(3)": {
            width: "50%",
          },
          "&& tbody tr td": {
            borderTop: "none",
          },
          "&& tbody tr:nth-child(2n+1)": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);",
            background: "transparent",
            borderRadius: rem(10),
            overflow: "visible",
          },
          "&& tbody tr:nth-child(2n+1) td": {
            background: "white",
          },
          "&& tbody tr:nth-child(2n+1) td:first-child": {
            borderTopLeftRadius: rem(10),
            borderBottomLeftRadius: rem(10),
          },
          "&& tbody tr:nth-child(2n+1) td:last-child": {
            borderTopRightRadius: rem(10),
            borderBottomRightRadius: rem(10),
          },
          "&& thead tr th": {
            borderBottom: "none",
          },
          "&& tr td:last-child": {
            width: "0%",
          },
        })}
      >
        <thead>
          <tr>
            <th>NAME</th>
            <th></th>
            <th>UPDATED AT</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sampleLogSummaryItems.map((item) => (
            <tr key={item.subscriptionName}>
              <td>{item.subscriptionName}</td>
              <td>{item.categoryName}</td>
              <td>{format(item.lastUpdated, "P")}</td>
              <td>
                <Center>
                  <ActionIcon>
                    <IconChevronRight size={rem(16)} />
                  </ActionIcon>
                </Center>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Center>
  );
};

export default UpdateLogsSummary;
