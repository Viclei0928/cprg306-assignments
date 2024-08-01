
"use client";

import { useState } from 'react';

export default function NewItem() {
  // Initialize State Variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Create a Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    // Reset state variables to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md space-y-4">
      {/* Name Field */}
      <div>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Quantity Field */}
      <div>
        <label className="block mb-2">Quantity</label>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Category Field */}
      <div>
        <label className="block mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Item
      </button>
    </form>
  );
}
