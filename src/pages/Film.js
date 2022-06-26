import React, { useState, useEffect } from "react";
import CardFilm from "../component/cardFilm";
import Navbar from "../component/Navbar";
import axios from "axios";
import Search from "../component/Search";
import {useNavigate} from "react-router-dom";
import Sort from "../component/sort";

function Film() {

  const navigate = useNavigate()
  const [film, setFilm] = useState([])
  const [search, setSearch]= useState('')
  const [sort, setSort]= useState('asc')

  useEffect (() =>{
    axios.get('https://ghibliapi.herokuapp.com/films/')
    .then(result => {
        const response = result.data;
        console.log(response);
        setFilm(response)
    })
    .catch(err => {
        console.log('error', err)
    })
  }, [sort])

  const DataSearch = film.filter(item => item.title.toLowerCase().includes(search));
  const DataSort = sort === 'asc' ? DataSearch.sort((a, b) => (a.title > b.title) ? 1 : -1) : DataSearch.sort((a, b) => (a.title > b.title) ? -1 : 1);

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
              <div className="category2 aktif" onClick={()=> navigate('/film')}>
                  Film
              </div>
              <div className="category2" onClick={()=> navigate('/people')}>
                  People
              </div>
              <div className="category2" onClick={()=> navigate('/locations')}>
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
          <div className="col-md-4 justify-content-center">
            <div onClick={()=>navigate(`/detail-film/${item.id}`)} className="card">
               <CardFilm item={item} key={item.id}/>
            </div>
          </div>
          )
        })}
    </div>
  </div>

</div>
  );
}

export default Film;
