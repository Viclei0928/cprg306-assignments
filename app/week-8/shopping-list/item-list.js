"use client";
import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortType, setSortType] = useState(null);

  const sortedItems = [...items].sort((a, b) => {
    if (!sortType) return 0;
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <button onClick={() => setSortType("name")}>Sort by Name</button>
      <button onClick={() => setSortType("category")}>Sort by Category</button>
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </div>
  );
};

export default ItemList;
