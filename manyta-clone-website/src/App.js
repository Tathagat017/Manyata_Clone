import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import LandingPage from './Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;
