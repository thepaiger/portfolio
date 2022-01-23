// ====================IMPORTS====================
// Packages
import { useState, useRef } from "react";

// Screens/Layout
import Layout from './components/Layout/Layout';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';

// CSS
import './App.css';

// Services
import { useOnClickOutside } from "./services/hooks";

function App() {
  // const [open, setOpen] = useState(false);

  // const node = useRef();
  // useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <Layout>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
