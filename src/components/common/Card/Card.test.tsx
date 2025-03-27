import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  const title = 'Test Card Title';
  const content = 'This is a test card content.';

  it('renders the card with title and content', () => {
    render(<Card title={title} content={content} />);
    
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(<Card title={title} content={content} />);
    expect(container).toMatchSnapshot();
  });
});