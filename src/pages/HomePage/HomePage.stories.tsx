import { ComponentStory, ComponentMeta } from "@storybook/react";

import HomePage from ".";

export default {
  title: "Page/HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Default = Template.bind({});
Default.args = {};
