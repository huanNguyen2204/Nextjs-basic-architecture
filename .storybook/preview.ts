import { theme } from "../src/config/theme";
import type { Preview } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // controls: { expanded: true },
  chakra: {
    theme,
  },
};
