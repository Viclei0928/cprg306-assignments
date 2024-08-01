"use client";
import React from "react";

const Item = ({ item, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(item)} 
      className="border border-gray-300 p-4 m-2 cursor-pointer hover:bg-gray-100"
    >
      <h3 className="font-bold">{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
};

export default Item;
