import React from "react";

function CardSpesies({item}) {
  return (
        <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className="title">{item.name}</div>
                <div className="desc2">Classification : {item.classification}</div>
                <div className="desc2">Eye Color : {item.eye_color}</div>
                <div className="desc2">Hair Color: {item.hair_color}</div>
            </div>
        </div> 
  );
}

export default CardSpesies;