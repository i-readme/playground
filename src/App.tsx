import NavBar from '@components/navigation/NavBar';
import { useTheme } from '@utils/ThemeContext';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  const { theme } = useTheme();
  const resetHandler = () => {
    console.log('click');
  };
  return (
    <>
      <NavBar reset={resetHandler} />
      <main className={theme}>
        <div className="flex min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
export default App;
