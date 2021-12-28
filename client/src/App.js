// Packages

// Screens/Layout
import Layout from './layout/Layout';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import Work from './screens/Work/Work';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home id="home" />
        <About />
        <Work />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
