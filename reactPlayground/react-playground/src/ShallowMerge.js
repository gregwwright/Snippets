
import React from 'react';

class ShallowMerge extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         user: {
          name: 'Mark',  // name exists in the initial state under the user property but not in the state you’re setting 
          colors: {
            favorite: '',
          }
        }
      };
      
      this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
      this.setState({
        user: {  //            
          colors: {
            favorite: 'blue'
          }
        }
      });
    }
    render() {
      return (
        <div>
          <h1>My favorite color is {this.state.user.colors.favorite} and my 
  name is {this.state.user.name}</h1>
          <button onClick={this.onButtonClick}>show the color!</button>
        </div>
      )
    }
  }

  export { ShallowMerge };