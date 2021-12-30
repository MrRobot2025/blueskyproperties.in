import './App.css';
import NavbarComponent from './components/navbar/navbar';
import Hero from "./components/HeroSection/Hero";
import FooterPage from "./components/HeroSection/footer";
import Buy from './components/Buy/Buy';
import CP from './components/CP/cp';
import About from './components/aboutus/about';
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
       <Hero/>
       <Buy/>
       <CP/>
       <About/>
      <FooterPage/>
    </div>
  );
}

export default App;
