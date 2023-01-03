import type { Meta, StoryObj } from "@storybook/react";

import { DatePresenter } from "./Date";

type Story = StoryObj<typeof DatePresenter>;

const meta: Meta<typeof DatePresenter> = {
  title: "Components/Date",
  component: DatePresenter,
};

export const Basic: Story = {
  args: {
    date: "2023-01-03T06:53:40.944Z",
  },
};

export default meta;
