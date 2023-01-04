---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import type { Meta, StoryObj } from "@storybook/react";

import { <%= Name %> } from "./<%= Name %>";

type Story = StoryObj<typeof <%= Name %>>;

const meta: Meta<typeof <%= Name %>> = {
  title: "Components/<%= Name %>",
  component: <%= Name %>,
};

export const Basic: Story = {};

export default meta;
