import type { Meta, StoryObj } from "@storybook/react";

import { RootLayout } from ".";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof RootLayout>;

const meta: Meta<typeof RootLayout> = {
  title: "Layouts/RootLayout",
  component: RootLayout,
};

export const Basic: Story = {
  render: () => <RootLayout />,
  decorators: [
    routerDecorator({ children: [{ index: true, element: <>children</> }] }),
  ],
};

export default meta;
