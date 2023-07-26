import { render, screen } from '@testing-library/react';
import Greet from './Greet';
test('h1が存在するか', () => {
  render(<Greet />);
  const h1El = screen.getByText('こんにちは');
  expect(h1El).toBeInTheDocument();
});
