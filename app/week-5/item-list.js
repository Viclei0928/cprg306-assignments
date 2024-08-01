"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  // Sort the items based on the sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
