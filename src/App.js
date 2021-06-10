import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import { auth } from './components/Firebase';
import { useStateValues } from './components/StateProvider';

function App() {
  const [{}, dispatch] = useStateValues();

  useEffect(() => {
    //Will only run once when the app component loads.

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        //The user just logged in || The user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
