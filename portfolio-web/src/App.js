
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
     <HomePage/>

     <div className='optiondiv'>
      <ul>
        <li><a>Home</a></li><br/>
        <li><a>Projects</a></li><br/>
        <li><a>About</a></li><br/>
        <li><a>Contact</a></li><br/>
      </ul>
     </div>
    </>
    
  );
}

export default App;
