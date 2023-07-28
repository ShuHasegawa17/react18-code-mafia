import { render, screen } from '@testing-library/react';
import Message from './Message';
import userEvent from '@testing-library/user-event';

describe('Messageコンポーネントのテスト', () => {
  test('画面内にinput要素が存在すること', () => {
    render(<Message />);
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
  });
  test('input要素の値が反映されること', async () => {
    const user = userEvent.setup();
    render(<Message />);
    const inputEl = screen.getByRole('textbox');

    await user.type(inputEl, 'abcde');
    expect(inputEl.value).toBe('abcde');
  });
});
