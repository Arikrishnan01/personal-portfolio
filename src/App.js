import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
// import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Projects />
        {/* <Contacts /> */}
        <Contact />
    </div>
  );
}

export default App;
