import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes[parseInt(id, 10)]; // Get the recipe based on the id

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.alt} style={{ width: "100%", height: "auto" }} />
      <p>Details about the recipe...</p>
    </div>
  );
};

export default RecipeDetail;
