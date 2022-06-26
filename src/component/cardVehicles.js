import React from "react";

function CardVehicles({item}) {
  return (
        <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className="title">{item.name}</div>
                <div className="desc2"> Description: {item.description}</div>
                <div className="desc2">Vehicles Class : {item.vehicle_class}</div>
                <div className="desc2">Length: {item.length}</div>
            </div>
        </div>
  );
}

export default CardVehicles;