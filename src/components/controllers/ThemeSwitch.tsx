import { ReactComponent as MoonIcon } from '@icons/moon.svg';
import { ReactComponent as SunIcon } from '@icons/sun.svg';
import { useTheme } from '@utils/ThemeContext';

const ThemeSwitch: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
export default ThemeSwitch;
