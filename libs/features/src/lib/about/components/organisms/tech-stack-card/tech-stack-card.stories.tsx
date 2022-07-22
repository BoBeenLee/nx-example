import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { TechStackCard, TechStackCardProps } from './tech-stack-card';

export default {
  component: TechStackCard,
  title: 'organisms/TechStackCard',
  argTypes: {},
} as Meta;

const Template: Story<TechStackCardProps> = (args) => (
  <TechStackCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  groupName: 'Test',
  items: ['t1', 't2', 't3'],
};
