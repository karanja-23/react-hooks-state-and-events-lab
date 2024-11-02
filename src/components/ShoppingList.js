import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ filter, setFilter  ] = useState("All");
  function handleFilterChange(e) {
    setFilter(e.target.value)
    
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter(item => item.category === filter || filter === "All").map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
  
      </ul>
    </div>
  );
}

export default ShoppingList;
