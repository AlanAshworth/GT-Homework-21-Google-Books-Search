import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Saved}/>
      <Route exact path="/books" component={Saved}/>
      <Route exact path="/saved" component={Saved}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/books/:id" component={Search}/>
    </Router>
  );
}

export default App;
