import type { Meta, StoryObj } from "@storybook/react";

import { ErrorBoundary } from "./ErrorBoundary";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof ErrorBoundary>;

const meta: Meta<typeof ErrorBoundary> = {
  title: "Components/ErrorBoundary",
  component: ErrorBoundary,
};

export const Basic: Story = {
  render: () => <ErrorBoundary />,
  decorators: [routerDecorator()],
};

export default meta;
