import heart from '../assets/icons/heart.svg';
import ThemeSwitch from '../components/controllers/ThemeSwitch';

const Home: React.FC = () => {
  return (
    <div>
      <p>Hello , welcome home</p>

      <div className="App">
        <ThemeSwitch />

        <header className="App-header">
          <img src={heart} alt="Logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          Hello
        </header>
      </div>
    </div>
  );
};
export default Home;
