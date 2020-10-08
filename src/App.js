import React from "react";
import { Header } from "./Component";
import { Footer } from "./Component";
import { Navbar } from "./Component";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Route>
        <Header />
      </Route>
      <Route>
        <Navbar />
      </Route>
      <Route>
        <Footer />
      </Route>
    </Router>
  );
}

export default App;
