// Screens/Layout
import Layout from './components/Layout/Layout.jsx';
import About from './screens/About/About.jsx';
import Contact from './screens/Contact/Contact.jsx';
import Home from './screens/Home/Home.jsx';
import Projects from './screens/Projects/Projects.jsx';

// CSS
import './App.css';

function App() {
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
