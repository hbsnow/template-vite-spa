import { ComponentStory, ComponentMeta } from "@storybook/react";

import CounterPage from ".";

export default {
  title: "Page/CounterPage",
  component: CounterPage,
} as ComponentMeta<typeof CounterPage>;

const Template: ComponentStory<typeof CounterPage> = () => <CounterPage />;

export const Default = Template.bind({});
Default.args = {};
