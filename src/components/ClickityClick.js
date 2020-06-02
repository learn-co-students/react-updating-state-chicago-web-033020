// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      count: 0,
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...

    this.setState(previousState => {
      return {
        count: previousState.count + 1,
        hasBeenClicked: true
      }
    }, () => console.log(this.state.count)) 
    
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 