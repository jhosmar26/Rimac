import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header test">
          <Link to="/home">
            Logo
          </Link>
          <Link to="/contact">Llámanos</Link>
        </header>
        <Switch>
          <Route path="/home">
            casa dulce casa
          </Route>
          <Route path="/contact">
            llama porfavor
          </Route>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
