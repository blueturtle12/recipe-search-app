import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';


const myStyle = {
    color:"black",
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold'
};

const styledTitle = (
    <span style={myStyle}>
        Deliciously
    </span>
)


class Nav extends Component {
  render() {
    return (
      <div>
      <AppBar 
      title={styledTitle}
      style={{ backgroundColor: 'white', textAlign: 'center', color:'black' }}
      /> 
      </div>
    )
  }
}
/*
const Nav = () => <AppBar 
    title={styledTitle}
    children={
        <Search
            onTextChange={this.props}
         />
        
    }
    />
*/



export default Nav;
