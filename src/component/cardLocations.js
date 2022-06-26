import React from "react";

function CardLocation({item}) {
  return (
        <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className="title">{item.name}</div>
                <div className="desc2">Climate : {item.climate}</div>
                <div className="desc2">Terrain : {item.terrain}</div>
                <div className="desc2">Surface water: {item.surface_water}</div>
            </div>
        </div>
  );
}

export default CardLocation;