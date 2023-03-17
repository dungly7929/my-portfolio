
import './App.css';
import {Home , NavBar, SocialLinks, 
  About, Portfolio, Experience , Contact} from './components';


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
