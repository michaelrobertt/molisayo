import Header from './components/Header';
import Karma from './components/InteractiveKarma';
import MainInfo from './components/MainInfo';
import Spotify from './components/Spotify';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainInfo />
      <Karma />
      <Spotify />
      <Footer />
    </div>
  );
}

export default App;
