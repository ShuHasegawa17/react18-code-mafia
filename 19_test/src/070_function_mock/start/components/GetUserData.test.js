import { render, screen } from '@testing-library/react';
import GetUserData from './GetUserData';
import { ENDPOINT_URL } from '../Example';

import axios from 'axios';

jest.mock('axios');

describe('GetUserDataコンポーネントの動作確認', () => {
  test('外部データ取得中', async () => {
    // axiosのモック
    axios.get.mockResolvedValue({
      data: {
        id: 2,
        name: 'CodeMafia2',
      },
    });
    render(<GetUserData url={ENDPOINT_URL} />);
    const h1El = await screen.findByRole('heading', { name: '通信中です！' });
    expect(h1El).toBeInTheDocument();
  });
  test('外部データ取得後', async () => {
    // axiosのモック
    axios.get.mockResolvedValue({
      data: {
        id: 2,
        name: 'CodeMafia2',
      },
    });
    render(<GetUserData url={ENDPOINT_URL} />);
    const h2El = await screen.findByRole('heading', { name: 'プロフィール' });
    expect(h2El).toBeInTheDocument();

    const itemEls = await screen.findAllByRole('listitem');

    expect(itemEls[0].textContent).toBe('ID: 2');
    expect(itemEls[1].textContent).toBe('Name: CodeMafia2');
  });
});
