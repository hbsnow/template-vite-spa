import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export const Basic: Story = {
  args: {
    children: "Button Text",
    onClick: action("clicked"),
  },
};

export default meta;
