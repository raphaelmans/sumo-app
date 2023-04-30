import { MantineThemeOverride } from "@mantine/core";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const theme: MantineThemeOverride = {
  fontFamily: `${inter.style.fontFamily}, sans-serif`,
  colors: {
    sumo: [
      "#FBE9EC",
      "#F4C2C9",
      "#ED9BA6",
      "#E77483",
      "#E04D60",
      "#D9263E",
      "#AE1E31",
      "#821725",
      "#570F19",
      "#2B080C",
    ],
  },
  primaryColor: "sumo",
};
