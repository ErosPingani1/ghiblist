import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Ghibli from './containers/GhibliPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Movies</Link>
          </li>
        </nav>
      </div>
      <Switch>
        <Route path="/">
          <Ghibli />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
