// Packages
import { Switch, Route } from 'react-router-dom';

// Screens/Layout
import Layout from './layout/Layout';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import Resume from './screens/Resume/Resume';
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
        <Resume />
        {/* <Switch>
          <Route path="">
            <Home />
          </Route>
        </Switch> */}
      </Layout>
    </div>
  );
}

export default App;
