import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTemplate from "./createTemplate";

import Home from "./index.page";

export default {
  title: "Web/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = createTemplate(Home);

export const Render = Template.bind({});
Render.args = {
  children: null,
};
