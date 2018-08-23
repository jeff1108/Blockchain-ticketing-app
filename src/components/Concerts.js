import React, { Component } from 'react';

class Concerts extends Component {

  render() {
    return (
      <div className='concert'>
       <p>{this.props.concert.name}</p>
       <p>{this.props.concert.price}</p>
     </div>
    )
  }
}



export default Concerts
