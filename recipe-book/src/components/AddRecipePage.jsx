import "../App.css";
import { useState } from "react";

export default function AddRecipePage() {
  // something

  return (
    <div className="AddRecipePage">
      <input type="text" placeholder="Recipe Name" />
      <input type="text" placeholder="Image" />
      <input type="text" placeholder="Calories" />
      <input type="text" placeholder="Servings" />
    </div>
  );
}
