import React, { Component } from 'react';
import RecipeCard from './Card';

class RecipeList extends Component {
    
    render() {
        let recipeList;
        const  { recipes }  = this.props.recipes;

        
        if(recipes) {
            recipeList = (
                <div className="container">
                    {recipes.map((recipe,index) => (
                        <div
                        key={index}
                        >
                            <RecipeCard recipe={recipe.recipe}/>
                        </div>
                        
                    ))}
                </div>
            )
        } else {
            recipeList = null;
        }
        
    return (
      <div>
        {recipeList}
      </div>
    );
  };
};



export default RecipeList;