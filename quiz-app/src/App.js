import './pages/style.css';
import './App.css';
import Login from './pages/login';
import {
  BrowserRouter as Router, Route,
  Switch,
} from "react-router-dom";
import Admin from './pages/admin';

function App() {
  return (
    <Router>
      <div className="root-container">
        <Switch>
            <Route exact path="/" component = {Login}/>
            <Route exact path="/admin" component = {Admin}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
