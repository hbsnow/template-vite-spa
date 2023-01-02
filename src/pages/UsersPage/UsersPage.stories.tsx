import type { Meta, StoryObj } from "@storybook/react";

import UsersPage, { loader } from ".";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof UsersPage>;

const meta: Meta<typeof UsersPage> = {
  title: "Page/UsersPage",
  component: UsersPage,
};

export const Basic: Story = {
  render: () => <UsersPage />,
  decorators: [routerDecorator(loader)],
};

export default meta;
