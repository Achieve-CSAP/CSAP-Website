import logo from './logo.svg';
import './App.css';
import About from './About/About';
import Home from './Home/Home';
import Register from './Register/Register';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <About></About>
      <Home></Home>
      <Register></Register>
      <Contact></Contact>
      <Navbar></Navbar>

    </div>
  );
}

export default App;
