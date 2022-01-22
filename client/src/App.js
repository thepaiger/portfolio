// Packages

// Screens/Layout
import Layout from './components/Layout/Layout';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home id="home" />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
