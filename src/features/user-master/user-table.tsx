import React from "react";
import { sampleUsers } from "@data";
import { ActionIcon, Group, Text, TextProps } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { User } from "@types";
import AppTable from "@shared/ui/app-table";

type Props = {};

const columnHelper = createColumnHelper<User>();

const UserTable = (props: Props) => {
  const columns: ColumnDef<User, any>[] = [
    columnHelper.accessor("lastName", {
      cell: (props) => props.getValue(),
      header: () => "LAST NAME",
    }),
    columnHelper.accessor("firstName", {
      cell: (props) => props.getValue(),
      header: () => "FIRST NAME",
    }),
    columnHelper.accessor("email", {
      cell: (props) => props.getValue(),
      header: () => "EMAIL",
    }),
    columnHelper.accessor("address", {
      cell: (props) => props.getValue(),
      header: () => "ADDRESS",
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
    data: sampleUsers,
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

export default UserTable;
