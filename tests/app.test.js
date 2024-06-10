import React from 'react';
import { render } from '@testing-library/react';
import App from '../app'; // Assuming app.js is in the same directory as __tests__

test('renders app without crashing', () => {
  render(<App />);
});
