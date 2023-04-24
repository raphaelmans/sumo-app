import { Sx, rem } from "@mantine/core";

export const tableSx: Sx = (theme) => ({
  "&&": {
    borderCollapse: "separate",
    borderSpacing: `0 ${rem(10)}`,
  },
  "&& tbody tr": {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25);",
    borderRadius: rem(10),
    overflow: "visible",
    background: "white",
    cursor: "pointer",
  },
  "&& tbody tr:hover": {
    background: theme.colors["sumo"][3],
    color: "white",
  },
  "&& tbody tr:hover .tabler-icon, tbody tr:hover .mantine-Text-root": {
    color: "white",
  },
  "&& tbody tr:hover .mantine-ActionIcon-root:hover": {
    background: theme.colors["sumo"][8],
  },
  "&& tbody tr td": {
    fontWeight: 500,
    borderTop: "none",
  },
  "&& tbody tr td:first-child": {
    borderTopLeftRadius: rem(10),
    borderBottomLeftRadius: rem(10),
  },
  "&& tbody tr td:last-child": {
    borderTopRightRadius: rem(10),
    borderBottomRightRadius: rem(10),
  },
  "&& thead tr th": {
    borderBottom: "none",
    color: theme.colors["sumo"][4],
  },
});
