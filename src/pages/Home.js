import React from "react";
import Navbar from "../component/Navbar";
import {useNavigate } from "react-router-dom";
import Film from "../assets/film.jpg"
import Logo from "../assets/logoGibli.png"


function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="banner-home">
        <div className="text-center d-flex justify-content-center align-items-center">
          <div className="justify-content-center">
            <img src={Logo} width="300px" alt="logo"/>
              <div className="d-flex flex-wrap justify-content-center " style={{ marginTop: "50px"}}>
                <div className="category" onClick={()=> navigate('/film')}>
                    Film
                </div>
                <div className="category" onClick={()=> navigate('/people')}>
                    People
                </div>
                <div className="category" onClick={()=> navigate('/locations')}>
                    Locations
                </div>
                <div className="category" onClick={()=> navigate('/spesies')}>
                    Species
                </div>
                <div className="category" onClick={()=> navigate('/vehicles')}>
                    Vehicle
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
