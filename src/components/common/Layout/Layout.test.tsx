import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  test('renders children components', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('renders header and footer', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming header has role="banner"
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Assuming footer has role="contentinfo"
  });
});