import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route path="/" componet={Home} />
        <Route path="/actors" componet={Actors} />
        <Route path="/directors" componet={Directors} />
        < Route path="/movies" componet={Movies} />
      </div>
    </Router>
  );
};

export default App
