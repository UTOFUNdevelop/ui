import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Provider from "../Providor";
import NavbarComponent from ".";

export default {
  // https://github.com/storybookjs/storybook/issues/16038
  title: "@utofun ui/Navbar",
  component: NavbarComponent,
  argTypes: {},
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = function Template(
  args
) {
  return (
    <Provider>
      <NavbarComponent {...args} />
    </Provider>
  );
};

export const Navbar = Template.bind({});

Navbar.args = {
  items: [
    { name: "搜索房源", href: "/homes" },
    { name: "社区介绍", href: "/neighborhood" },
    { name: "地产指南", href: "/blog" },
    { name: "购房指南", href: "/buyer_guider" },
    { name: "帮助中心", href: "/Q&A" },
    { name: "关于我们", href: "/aboutus" },
    { name: "经纪人工具", href: "/agent-resource" },
  ],
  _image: {
    alt: "优投房 UTOFUN logo",
  },
};
