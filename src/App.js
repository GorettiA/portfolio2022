import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
