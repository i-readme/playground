import { ReactComponent as DownloadIcon } from '@icons/download.svg';

interface DownloadButtonProps {
  download: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ download }) => {
  const handleDownload = () => {
    const blob = new Blob([download], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleDownload}>
      <DownloadIcon />
    </button>
  );
};

export default DownloadButton;
