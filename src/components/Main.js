import React, { Component } from 'react'
import RecipeList from './RecipeList';



class Main extends Component {
  
  render() {
    return (
      <div>
        <h1 className="main__title">Discover our recipes!</h1>
        <RecipeList recipes={this.props} />
      </div>
    )
  }
}

export default Main;