import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link navbar', () => {
  render(<App />);
  const navbar = screen.getByTestId('Navigation');
  expect(navbar).toBeInTheDocument();
});
