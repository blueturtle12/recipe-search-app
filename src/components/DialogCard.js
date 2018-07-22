import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class DialogCard extends Component {
  render() {
    const { recipe } = this.props.chosenRecipe;
    let dietLabels;
    let ingredients;
    if(recipe.dietLabels) {
        dietLabels = (
            <div>
                <span className="ingredients-list__ing">Diet labels : </span>
                {recipe.dietLabels.map((label,index) => (
                    <span key={index}>{label}</span>
                ))}
            </div>
        )
    }
    if(recipe.ingredients) {
        ingredients = (
            <div className="ingredients-list">
                <span className="ingredients-list__ing">Ingredients : </span>
                <br/>
                {recipe.ingredients.map((ingredient,index) => (
                    <span key={index}>{ingredient.text}</span>
                ))}
            </div>
        )
    }
    return (
      <div className="recipe-card">
        <div className="recipe-card__top-grid">
            <img className="recipe-card__image" src={recipe.image} alt=""  />
            <div className="recipe-info">
                <span className="recipe-info__item">
                <span className="recipe-info__title">Calories</span> : {Math.floor(recipe.calories)}
                </span>
                <span className="recipe-info__item">
                <span className="recipe-info__title">Yield</span> : {recipe.yield}
                </span>
                <span className="recipe-info__item">
                <span className="recipe-info__title">Total time</span> : {recipe.totalTime}
                </span>
                {dietLabels}
            </div>
            {ingredients}
        </div>
        <div className="instructions">
            <h3>Instructions</h3>
            <br/>
            <div className="recipe-card__instructions">
                <Button variant="contained" color="secondary" onClick={this.onButtonClick}>
                    Get instructions
                </Button>
                <span> &nbsp;By {recipe.source}</span>
            </div>
        </div>
      </div>
    )
  }
}






export default DialogCard;
