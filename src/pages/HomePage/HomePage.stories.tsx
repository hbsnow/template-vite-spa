import type { Meta, StoryObj } from "@storybook/react";

import HomePage from ".";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof HomePage>;

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
};

export const Basic: Story = {
  render: () => <HomePage />,
  decorators: [routerDecorator()],
};

export default meta;
