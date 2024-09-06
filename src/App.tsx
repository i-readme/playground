import NavBar from '@components/navigation/NavBar';
import { useTheme } from '@utils/ThemeContext';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  const { theme } = useTheme();
  const [markdown, setMarkdown] = useState('hello');
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => setToggleMenu((prevState) => !prevState);

  const resetHandler = () => {
    console.log('click');
    setMarkdown('');
  };
  //TODO: add sidebar menu
  console.log(toggleMenu);

  return (
    <>
      <NavBar reset={resetHandler} download={markdown} toggle={toggleHandler} />
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
