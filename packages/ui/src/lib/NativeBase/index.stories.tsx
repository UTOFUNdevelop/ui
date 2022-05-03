import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import NativeBase from ".";

export default {
  // https://github.com/storybookjs/storybook/issues/16038
  title: "@utofun ui/NativeBase",
  component: NativeBase,
  argTypes: {},
} as ComponentMeta<typeof NativeBase>;

const Template: ComponentStory<typeof NativeBase> = function Template(args) {
  return <NativeBase {...args} />;
};

export const Children = Template.bind({});
Children.args = {
  children: "Hello NativeBase",
};
