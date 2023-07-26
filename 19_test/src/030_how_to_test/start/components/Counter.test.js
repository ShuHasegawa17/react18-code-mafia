import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';
/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
test('カウントアップボタン押下で現在のカウントが+1されるか。', () => {
  // Arrange
  render(<Counter originCount={0} />);

  //更新前
  const spanBeforeEl = screen.getByText('現在のカウント:0');
  expect(spanBeforeEl).toBeInTheDocument();

  // Act
  const btn = screen.getByRole('button', { name: 'カウントアップ' });
  fireEvent.click(btn); //ユーザ操作の実行

  // Assertion
  const spanEl = screen.getByText('現在のカウント:1');
  expect(spanEl).toBeInTheDocument();
});
