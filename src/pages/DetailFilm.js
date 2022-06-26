import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Film from "../assets/film.jpg";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailFilm() {
    const { id } = useParams()

  const [state, setState] = useState([])

  useEffect (() =>{
    axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(result => {
        const response = result.data;
        console.log(response);
        setState(response)
    })
    .catch(err => {
        console.log('error', err)
    })
  
  }, [])

  const {title,original_title, image, description, original_title_romanised, director,producer, release_date, running_time, rt_score} = state

  return (
    <div>
            <Navbar/>

            <div  className="banner-home pb-5">
                <div className="container detail">
                    <div className="row justify-content-center"> 
                      {/* foto & judul */}
                    <div className="col-md-4 me-3">
                       <center> 
                        <h5 className="judulDetail">{title} ({original_title})</h5> 
                        <img src={image} width="250px" className="m-3" alt={title}/>
                        </center>
                    </div>
                      {/* deskripsi */}
                    <div className="col-md-6 ">
                        <div className="row p-1">
                          <h4 className="fw-bold">Details</h4>
                          <p className="mt-1 kata">Film Release Date : {release_date}</p>
                          <p className="mt-1 kata">Running Time : {running_time}</p>
                          <p className=" mt-1 kata">Film Director : {director}</p>
                          <p className=" my-1 kata">Film Producer : {producer}</p>
                                
                          <h4 className="fw-bold mt-4">Description</h4>
                          <p className="kata fw-bold">({original_title_romanised})</p>
                          <div className="kata">{description}</div>   
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default DetailFilm;