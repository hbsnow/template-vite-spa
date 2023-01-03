import type { Meta, StoryObj } from "@storybook/react";

import CounterPage from ".";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof CounterPage>;

const meta: Meta<typeof CounterPage> = {
  title: "Pages/CounterPage",
  component: CounterPage,
  decorators: [routerDecorator()],
};

export const Basic: Story = {
  render: () => <CounterPage />,
};

export default meta;
