import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exatc />
      </Switch>
    </Router>
      
      </>
  );
}

export default App;
