"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      window.location.href = "/week-8"; // Redirect to landing page if not authenticated
    }
  }, [user]);

  const handleItemSelect = (item) => {
    const cleanItemName = item.name
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanItemName);
  };

  if (!user) return null; // Prevent rendering if not authenticated

  return (
    <div className="flex">
      <div>
        <NewItem items={items} setItems={setItems} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default ShoppingListPage;
