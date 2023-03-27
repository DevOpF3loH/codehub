import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {Helmet} from "react-helmet";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Codehub</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Codehub" />
            </Helmet>
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
          <Header />
      <div className="app_body">
        <Sidebar />
        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path='/'>
            <Welcome />
          </Route>
        </Switch>
      </div>
      </>
        )}
      
      </Router>
    </div>
  );
}

export default App;
