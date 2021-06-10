import './App.css';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <SubMenu />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <SubMenu />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
