import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import Nav from './components/NavBar';
import Search from './components/Search';
import './App.css';


class App extends Component {
  state = {
    recipes:[]
  }
  onTextChange(newArray) {
    this.setState({
      recipes:newArray
    })
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Nav />
            <Search onTextChange={this.onTextChange.bind(this)}/>
            <Main recipes={this.state.recipes} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

