import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
