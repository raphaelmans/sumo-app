import React from "react";
import { sampleCategories, sampleSubscriptions } from "@data";
import { ActionIcon, Group, Sx, Table, rem } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { format } from "date-fns";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Subscription } from "@types";
import { tableSx } from "@shared/styles";
import AppTable from "@shared/ui/app-table";

type Props = {};

const columnHelper = createColumnHelper<Subscription>();

const SubscriptionTable = (props: Props) => {
  const columns: ColumnDef<Subscription, any>[] = [
    columnHelper.accessor("subscriptionName", {
      cell: (props) => props.getValue(),
      header: () => "NAME",
    }),
    columnHelper.accessor("subscriptionCategoryId", {
      cell: (props) =>
        sampleCategories.find((c) => c.id === props.getValue())?.categoryName,
      header: () => "CATEGORY",
    }),
    columnHelper.accessor("subscriptionCost", {
      cell: (props) => `${props.getValue()} PHP`,
      header: () => "COST",
    }),
    columnHelper.accessor("creationDate", {
      cell: (props) => format(props.getValue(), "P"),
      header: () => "CREATION",
    }),
    columnHelper.accessor("lastUpdated", {
      cell: (props) => format(props.getValue(), "P"),
      header: () => "LAST UPDATE",
    }),
    columnHelper.accessor("status", {
      cell: (props) => props.getValue(),
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
    data: sampleSubscriptions,
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

export default SubscriptionTable;
