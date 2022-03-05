import "./App.css";
import React from "react"
import About from "./Components/About";
import Dinner from './Components/Dinner';
import Footer from "./Components/Footer"
import WineList from "./Components/WineList"
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Reservations from "./Components/Reservations";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/dinnermenu" element={<Dinner/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/reservations" element={<Reservations />}/>
        <Route path="/winelist" element={<WineList/>}/>
      </Routes>
    </div>
  <Footer />

  </>
  );
}

export default App;
