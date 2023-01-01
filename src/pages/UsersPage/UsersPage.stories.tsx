import { ComponentStory, ComponentMeta } from "@storybook/react";

import UsersPage from ".";

export default {
  title: "Page/UsersPage",
  component: UsersPage,
} as ComponentMeta<typeof UsersPage>;

const Template: ComponentStory<typeof UsersPage> = () => <UsersPage />;

export const Default = Template.bind({});
Default.args = {};
