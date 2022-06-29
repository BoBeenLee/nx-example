import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ActivityCard, ActivityCardProps } from './activity-card';

export default {
  component: ActivityCard,
  title: 'molecules/ActivityCard',
  argTypes: {},
} as Meta;

const Template: Story<ActivityCardProps> = (args) => <ActivityCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test',
  caption: 'Test',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};