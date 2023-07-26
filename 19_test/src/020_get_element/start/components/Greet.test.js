/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import Greet from './Greet';
test('h1が存在するか', () => {
  const { container } = render(<Greet />);
  const h1El = screen.getByText('こんにちは');
  expect(h1El).toBeInTheDocument();

  // const radioEl = screen.getByRole('radio');
  // screen.debug(radioEl);
  // expect(radioEl).toBeInTheDocument();
  //const imgEl = screen.getByRole('img');
  // const imgEl = screen.getByAltText('React Logo');
  // screen.debug(imgEl);

  // const headingEl = screen.getByRole('heading', { name: 'こんにちは' });
  // screen.debug(headingEl);
  // // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  // const h2El = container.querySelector('h2');
  // screen.debug(h2El);

  // // ラベルに紐づくinputタグが取れる
  // const elByLabel = screen.getByLabelText('氏名');
  // screen.debug(elByLabel);

  // const elByPlaceholder = screen.getByPlaceholderText('氏名');
  // screen.debug(elByPlaceholder);
});
