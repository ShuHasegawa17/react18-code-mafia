export const Child = () => {
  return (
    <>
      <p>
        /componentsフォルダをstart内に作成して、Childにコンポーネントを分離して、Exampleコンポーネントで読み込んでください。
      </p>
      {/* ↓↓↓ Childコンポーネントに移動 */}
      <div className="component">
        <h3>Child Component</h3>
      </div>
      {/* ↑↑↑ Childコンポーネントに移動 */}
    </>
  );
};
