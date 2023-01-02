import type { Meta } from "@storybook/react";
import { handlers } from "@/mocks/handlers";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize({ onUnhandledRequest: "bypass" });

export const parameters: Meta["parameters"] = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: { handlers },
};

export const decorators = [mswDecorator];
