import React from "react";
import {
  sampleDashboardData,
} from "@data";
import { ActionIcon, Group, Text, TextProps } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { format } from "date-fns";
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DashboardItem } from "@types";
import AppTable from "@shared/ui/app-table";

type Props = {};

const columnHelper = createColumnHelper<DashboardItem>();

const DashboardTable = (props: Props) => {
  const columns: ColumnDef<DashboardItem, any>[] = [
    columnHelper.accessor("user", {
      cell: (props) => {
        const user = props.getValue();
        return `${user.firstName} ${user.lastName}`;
      },
      header: () => "USER",
    }),
    columnHelper.accessor("subscriptionName", {
      cell: (props) => props.getValue(),
      header: () => "SUBSCRIPTION",
    }),
    columnHelper.accessor("categoryName", {
      cell: (props) => props.getValue(),
      header: () => "CATEGORY",
    }),
    columnHelper.accessor("subscriptionCost", {
      cell: (props) => `${props.getValue()} PHP`,
      header: () => "COST",
    }),
    columnHelper.accessor("billingCycle", {
      cell: (props) => props.getValue(),
      header: () => "BILLING CYCLE",
    }),
    columnHelper.accessor("nextBillingDate", {
      cell: (props) => format(props.getValue(), "P"),
      header: () => "BILLING DATE",
    }),
    columnHelper.accessor("status", {
      cell: (props) => {
        const style: TextProps = {
          color:
            String(props.getValue()).toLowerCase() === "active"
              ? "green"
              : "red",
        };
        return <Text {...style}>{String(props.getValue()).toUpperCase()}</Text>;
      },
      header: () => "STATUS",
    }),
    columnHelper.display({
      id: "actions",
      header: "ACTIONS",
      cell: (props) => {
        return (
          <Group spacing={2}>
            <ActionIcon color="blue.8">
              <IconEdit />
            </ActionIcon>
            <ActionIcon color="red.8">
              <IconTrash />
            </ActionIcon>
          </Group>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: sampleDashboardData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });
  return <AppTable table={table} />;
};

export default DashboardTable;
