import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import logo from'./assets/images/logo-rimac.svg';
import phoneIcon from'./assets/images/ic_phone.svg';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
          <Link to="/contact">
            <img src={phoneIcon} alt="" />
            Llámanos
          </Link>
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
