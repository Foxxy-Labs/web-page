import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Router basename={process.env.PUBIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
