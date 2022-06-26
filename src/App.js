import React from "react";
import Film from "./pages/Film";
import Home from "./pages/Home";
import Spesies from "./pages/Spesies";
import People from "./pages/People";
import Locations from "./pages/Locations";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vehicles from "./pages/Vehicles";
import DetailFilm from "./pages/DetailFilm";

function App() {
  return (
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/film' element={<Film/>} />
    <Route exact path='/people' element={<People/>} />
    <Route exact path='/spesies' element={<Spesies/>} />
    <Route exact path='/locations' element={<Locations/>} />
    <Route exact path='/vehicles' element={<Vehicles/>} />
    <Route exact path='/detail-film/:id' element={<DetailFilm/>} />
  </Routes>
  );
}

export default App;
