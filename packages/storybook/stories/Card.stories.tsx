import { Story, Meta } from "@storybook/react";
import { Card, CardProps } from "../components/card";

export default {
  title: "Primitives/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Base = Template.bind({});
