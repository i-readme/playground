import { ReactComponent as ResetIcon } from '@icons/reset.svg';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none"
      aria-label="Reset settings"
    >
      <ResetIcon />
    </button>
  );
};
export default ResetButton;
