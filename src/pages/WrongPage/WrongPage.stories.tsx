import type { Meta, StoryObj } from "@storybook/react";

import WrongPage from ".";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof WrongPage>;

const meta: Meta<typeof WrongPage> = {
  title: "Pages/WrongPage",
  component: WrongPage,
};

export const Basic: Story = {
  render: () => <WrongPage />,
  decorators: [routerDecorator({ errorElement: <ErrorBoundary /> })],
};

export default meta;
