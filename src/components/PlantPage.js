import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlants, setSearchPlants] = useState("")

  const filteredPlants = plants.filter(plants => {
      if(searchPlants === "") return true
      return plants.name.toUpperCase().includes(searchPlants.toUpperCase())
  })
  console.log(plants)
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(plants => setPlants(plants))
  }, [])

  function addPlant(myPlant) {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        //"Accept": "Application/JSON"
      },
      body: JSON.stringify(myPlant)
    })
    .then(response => response.json())
    .then(myPlant => setPlants([...plants, myPlant]))
  }

  function updateSearchPlants(event){
    setSearchPlants(event.target.value)
}
  
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchPlants={searchPlants} updateSearchPlants={updateSearchPlants}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
