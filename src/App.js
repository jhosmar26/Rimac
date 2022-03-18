import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState } from "react";
import logo from "./assets/images/logo-rimac.svg";
import phoneIcon from "./assets/images/ic_phone.svg";
import Home from "./pages/Home.js";
import Plan from "./pages/Plan.js";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <div className="app">
        <div className="wrapper">
          <header className="header">
            <Link to="/home">
              <img className="logo-img" src={logo} alt="" />
            </Link>
            <div className="phone-link">
              <a href="tel:+014116001" className="mobile">
                <img src={phoneIcon} alt="" />
                <span className="phone-text">Llámanos</span>
              </a>
              <div className="web">
                <a href="#" className="text-left">
                  ¿Tienes alguna duda?
                </a>
                <a href="tel:+014116001" className="purple-right">
                  <img src={phoneIcon} alt="" />
                  <span className="phone-text">(01) 411 6001</span>
                </a>
              </div>
            </div>
          </header>
          <UserContext.Provider value={{ userData, setUserData }}>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/arma-tu-plan">
                <Plan />
              </Route>
              {/* <Route path="/contact">llama porfavor</Route> */}
              <Route exact path="/">
                <Redirect to="/home"></Redirect>
              </Route>
            </Switch>
          </UserContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
