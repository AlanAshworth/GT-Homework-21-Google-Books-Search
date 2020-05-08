import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Search}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  );
}

export default App;
