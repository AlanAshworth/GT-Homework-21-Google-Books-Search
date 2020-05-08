import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar"; 
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Search}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  );
}

export default App;
