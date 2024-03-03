import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">
      {plants.map(plants => {
        return <PlantCard key={plants.id} plants={plants} />
      })}
    </ul>
  );
}

export default PlantList;
