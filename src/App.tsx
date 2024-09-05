import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useTheme } from '@utils/ThemeContext';

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <main className={theme}>
      <div className="flex min-h-screen flex-row justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
};
export default App;
