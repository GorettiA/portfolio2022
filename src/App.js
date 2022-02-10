import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
