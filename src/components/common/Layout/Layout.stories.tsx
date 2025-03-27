import React from 'react';
import Layout from './Layout';

export default {
  title: 'Common/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Your content goes here</div>,
};