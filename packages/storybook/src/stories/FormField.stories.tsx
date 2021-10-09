import { Story, Meta } from "@storybook/react";
import { FormField, FormFieldProps } from "../components/form-field";

export default {
  title: "Components/Form Field",
  component: FormField,
} as Meta;

const Template: Story<FormFieldProps> = (args) => <FormField {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "test",
};
