import React, { useState } from "react";

function PlantCard({plants}) {
  const [stock, updateStock] = useState(true)

  function handleInStock() {
    //console.log('hi')
   updateStock(stock => !stock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {stock ? (
        <button onClick={handleInStock} className="primary">In Stock</button> 
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard;
