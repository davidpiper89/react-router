import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Home from "./components/Home";


class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/help' element={<Help />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    );
  }
}

export default App;
