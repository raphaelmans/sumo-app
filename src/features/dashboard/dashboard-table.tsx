import { Table, createStyles } from "@mantine/core";
import React from "react";
import { useReactTable } from "@tanstack/react-table";

type Props = {};

const DashboardTable = (props: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Subscription</th>
          <th>Expires In</th>
          <th>Subscribed On</th>
          <th>Date of Expiry</th>
          <th>Status</th>
          <th>Reminder</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td> <td>Basic</td>
          <td>30 Days</td> <td>2022-01-01</td> <td>2022-01-31</td>{" "}
          <td>Active</td> <td>Yes</td>
        </tr>
        <tr>
          <td>Mary</td> <td>Premium</td> <td>30 Days</td>
          <td>2022-03-15</td> <td>2022-06-13</td> <td>Expired</td> <td>No</td>
        </tr>
        <tr>
          <td>Peter</td> <td>Pro</td>
          <td>30 Days</td> <td>2022-02-28</td> <td>2023-02-28</td>{" "}
          <td>Active</td> <td>Yes</td>
        </tr>
        <tr>
          <td>David</td> <td>Basic</td>
          <td>30 Days</td> <td>2022-04-10</td> <td>2022-05-10 </td>
          <td>Active</td> <td>Yes</td>
        </tr>
        <tr>
          <td>Lisa</td> <td>Premium</td>
          <td>30 Days</td> <td>2022-03-01</td> <td>2022-05-30</td>{" "}
          <td>Expired</td> <td>No</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DashboardTable;
