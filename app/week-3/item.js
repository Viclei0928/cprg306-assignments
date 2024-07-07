import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
      <div className="text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;
