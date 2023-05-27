import React from 'react';
import { useState } from 'react';

function CreateRecipe() {
	const [recipe, setRecipe] = useState({
		name: '',
		description: '',
		ingredients: [],
		instructions: '',
		imageUrl: '',
		cookingTime: 0,
		userOwner: 0,
	});
	return (
		<div className="create-recipe">
			<h2>Create Recipe</h2>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" />
				<label htmlFor="ingredients">Ingredients</label>

				<label htmlFor="instructions">Instructions</label>
				<textarea name="instructions" id="instructions"></textarea>
				<label htmlFor="imageUrl">ImageUrl</label>
				<input type="text" id="imageUrl" name="imageUrl" />
				<label htmlFor="cookingTime">CookingTime</label>
				<input type="number" id="cookingTime" name="cookingTime" />
			</form>
		</div>
	);
}

export default CreateRecipe;
