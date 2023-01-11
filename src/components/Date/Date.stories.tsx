import type { Meta, StoryObj } from "@storybook/react";

import { Date } from "./Date";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof Date>;

const meta: Meta<typeof Date> = {
  title: "Components/Date",
  component: Date,
};

export const Basic: Story = {
  decorators: [routerDecorator()],
};

export default meta;
