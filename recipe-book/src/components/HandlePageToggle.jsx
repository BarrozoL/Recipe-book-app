import RenderRecipe from "./RecipePage";
import AddRecipePage from "./AddRecipePage";

export default function HandlePageToggle({ showing }) {
  // somethin
  if (showing === "recipe") return <RenderRecipe />;
  if (showing === "addRecipe") return <AddRecipePage />;
}
