import React from 'react';
import { Card } from './Card';

export default {
  title: 'Common/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card Title',
  content: 'This is a sample card content that provides information about a specific topic.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card includes an image to enhance the content.',
  imageUrl: 'https://via.placeholder.com/150',
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  title: 'Long Content Card',
  content: 'This card contains a significantly longer piece of content that demonstrates how the card handles overflow and text wrapping. It is important for the design to accommodate various lengths of text gracefully.',
};