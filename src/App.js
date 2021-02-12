
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Component/Home'
import Skills from './Component/Skills'
import Project from './Component/Project'
import Kontakt from './Component/Kontakt'
function App() {
  return (
          <Router>
            <div className="App">
            <Header />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route path="/Project">
              <Project />
            </Route>
            <Route path="/Kontakt">
              <Kontakt />
            </Route>

          
          
            </div>
        </Router>
  );
}

export default App;
