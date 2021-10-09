import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../components/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    variant: {
      type: "select",
      options: ["green", "blue", "purple"],
      defaultValue: "blue",
    },
    disabled: {
      type: "boolean",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
  children: "Button",
};
