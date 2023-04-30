"use client";
import {
  ActionIcon,
  Flex,
  Group,
  Stack,
  Table as TableUI,
  Text,
} from "@mantine/core";
import { tableSx } from "@shared/styles";
import React from "react";
import { Table, flexRender } from "@tanstack/react-table";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Props = {
  table: Table<any>;
};

const AppTable = ({ table }: Props) => {
  return (
    <Stack>
      <TableUI sx={tableSx}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableUI>
      <Group position="right">
        <Text color="sumo.4" fw={500}>
          Page
          <Text component="span" fw="bolder">
            &nbsp;
            {table.getState().pagination.pageIndex + 1}
            &nbsp;
          </Text>
          of
          <Text component="span" fw="bolder">
            &nbsp;
            {table.getPageCount()}
          </Text>
        </Text>
        <Flex gap="md">
          <ActionIcon
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            color="sumo"
          >
            <IconChevronLeft />
          </ActionIcon>
          <ActionIcon
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            color="sumo"
          >
            <IconChevronRight />
          </ActionIcon>
        </Flex>
      </Group>
    </Stack>
  );
};

export default AppTable;
