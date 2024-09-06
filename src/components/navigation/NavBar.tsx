import { ReactComponent as MoonIcon } from '@icons/moon.svg';
import { ReactComponent as ResetIcon } from '@icons/refresh.svg';
import { ReactComponent as SunIcon } from '@icons/sun.svg';
import { ReactComponent as ToggleIcon } from '@icons/toggle.svg';
import logo from '@images/logo.png';
import { useTheme } from '@utils/ThemeContext';

interface NavBarProps {
  reset: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ reset }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`flex items-center justify-between p-4 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'
      }`}
    >
      {/* Logo */}
      <a href="/" aria-label="Go to homepage" className="flex items-center">
        <img
          src={logo}
          alt="Website Logo"
          width={50}
          height={50}
          className="flex-shrink-0"
        />
      </a>

      {/* Navigation items (mobile menu toggle for small screens) */}
      <nav className="flex items-center space-x-4">
        {/* Hamburger Icon (Visible on Small Screens) */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <ToggleIcon />
        </button>

        {/* Desktop buttons (Visible on Medium Screens and Up) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={reset}
            className="focus:outline-none"
            aria-label="Reset settings"
          >
            <ResetIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
