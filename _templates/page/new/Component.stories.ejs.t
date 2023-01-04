---
to: src/pages/<%= h.changeCase.pascalCase(name) %>Page/<%= h.changeCase.pascalCase(name) %>Page.stories.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import type { Meta, StoryObj } from "@storybook/react";

import <%= Name %>Page from ".";
import { routerDecorator } from "@/storybook/utils/routerDecorator";

type Story = StoryObj<typeof <%= Name %>Page>;

const meta: Meta<typeof <%= Name %>Page> = {
  title: "Pages/<%= Name %>Page",
  component: <%= Name %>Page,
};

export const Basic: Story = {
  render: () => <<%= Name %>Page />,
  decorators: [routerDecorator()],
};

export default meta;
