import React from "react";
import { sampleCategories } from "@data";
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
import { Subscription } from "@types";
import AppTable from "@shared/ui/app-table";
import { useSubscriptions } from "./hooks";
import NextLink from 'next/link'

type Props = {};

const columnHelper = createColumnHelper<Subscription>();

const SubscriptionTable = (props: Props) => {
  const { data } = useSubscriptions();

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
      cell: (props) => format(new Date(props.getValue()), "P"),
      header: () => "CREATION",
    }),
    columnHelper.accessor("lastUpdated", {
      cell: (props) => format(new Date(props.getValue()), "P"),
      header: () => "LAST UPDATE",
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
       const data = props.row.original
        return (
          <Group spacing={2}>
            <ActionIcon component={NextLink} href={`/subscription/edit?id=${data.id}`} color="blue.8">
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
    data: data?.data ?? [],
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
