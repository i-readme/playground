import DownloadButton from '@components/controllers/DownloadButton';
import ResetButton from '@components/controllers/ResetButton';
import ThemeSwitch from '@components/controllers/ThemeSwitch';
import ToggleButton from '@components/controllers/ToggleButton';

import logo from '@images/logo.png';
import { useTheme } from '@utils/ThemeContext';

interface NavBarProps {
  toggle: () => void;
  download: string;
  reset: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggle, download, reset }) => {
  const { theme } = useTheme();

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
        <ToggleButton onClick={toggle} />

        {/* Desktop buttons (Visible on Medium Screens and Up) */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeSwitch />

          <ResetButton onClick={reset} />

          <DownloadButton download={download} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
