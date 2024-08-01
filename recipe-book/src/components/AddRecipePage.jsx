import "../App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
