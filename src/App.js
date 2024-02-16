
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css";
import Intro from './components/Intro';
import Trending from "./components/Trending";
import Superhero from './components/Superhero';


function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBg'>
      <NavigationBar/>     
        <Intro/>
      </div>
      {/* end of intro */}

      {/* Trending Section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* Trending Section Selesai */}

      {/* Superhero Section */}
      <div className='superhero'>
        <Superhero/>
      </div>
      {/* Superhero Selesai */}
    </div>
  );
}

export default App;
