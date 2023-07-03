import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const THEMES = ['light', 'dark', 'red'];
  const [theme, setTheme] = useTheme();

  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((t) => (
        <label key={t}>
          <input
            type="radio"
            name="theme"
            value={t}
            checked={t === theme}
            onChange={changeTheme}
          />
          {t}
        </label>
      ))}
    </header>
  );
};

export default Header;
