import React from "react";
import { NavItem } from "react-bootstrap";

function CardPeople({item}) {
  return (
    
        <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className="title">{item.name} </div>
                <div className="desc2">Gender : {item.gender}</div>
                <div className="desc2">Age : {item.age}</div>
                <div className="desc2">Eye Color : {item.eye_color}</div>
                <div className="desc2">Hair Color : {item.eye_color}</div>
            </div>
        </div>    
  );
}

export default CardPeople;