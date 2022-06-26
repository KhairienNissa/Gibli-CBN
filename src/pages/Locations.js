import React, { useState, useEffect } from "react";
import CardLocations from '../component/cardLocations'
import Navbar from "../component/Navbar";
import axios from "axios";
import Search from "../component/Search";
import Sort from "../component/sort";
import {useNavigate } from "react-router-dom";

function Locations() {
  const navigate = useNavigate()
  const [state, setState] = useState([])
  const [search, setSearch]= useState('')
  const [sort, setSort]= useState('asc')

  useEffect (() =>{
    axios.get('https://ghibliapi.herokuapp.com/locations/')
    .then(result => {
        const response = result.data;
        console.log(response);
        setState(response)
    })
    .catch(err => {
        console.log('error', err)
    })
  
  }, [sort])

  const DataSearch = state.filter(item => item.name.toLowerCase().includes(search));
  const DataSort = sort === 'asc' ? DataSearch.sort((a, b) => (a.name > b.name) ? 1 : -1) : DataSearch.sort((a, b) => (a.name > b.name) ? -1 : 1);

  return (

<div>
    <Navbar/>

   {/* Search sortir */}
  <div className="banner-color">
      <div className="text-center d-flex justify-content-center align-items-center">
        <div className="justify-content-center">
          <Search search={search} setSearch={setSearch}/>
          <span> 
          <Sort sort={sort} setSort={setSort}/>
          </span>

        <div className="d-flex flex-wrap justify-content-center my-2 mx-1 " style={{ marginTop: "50px"}}>
            <div className="category2" onClick={()=> navigate('/film')}>
                Film
            </div>
            <div className="category2" onClick={()=> navigate('/people')}>
                People
            </div>
            <div className="category2 aktif" onClick={()=> navigate('/locations')}>
                Locations
            </div>
            <div className="category2" onClick={()=> navigate('/spesies')}>
                Species
            </div>
            <div className="category2" onClick={()=> navigate('/vehicles')}>
                Vehicle
            </div>
        </div>
        </div>
      </div>
  </div>

  {/* card */}
  <div className="container">
    <div className="row justify-content-center m-2">
      {DataSort?.map((item)=>{
        return (
          <CardLocations item={item} key={item.id}/>
        )
      })}   
    </div>
  </div>

</div>
  );
}

export default Locations;
