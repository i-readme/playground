import { ReactComponent as ToggleIcon } from '@icons/toggle.svg';

interface ToggleButtonProps {
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden focus:outline-none"
      aria-label="Toggle mobile menu"
    >
      <ToggleIcon />
    </button>
  );
};
export default ToggleButton;
