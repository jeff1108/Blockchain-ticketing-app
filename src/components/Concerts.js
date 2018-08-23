import React from 'react';

const Concerts = props => (
  <div>
  { props.concerts.map((concert) => {
    return (
      <div key={concert.id}>
        <p>{concert.name}</p>
        <p>{concert.price}</p>
        <button>Buy!</button>
      </div>
    )
  }) }
  </div>
)

export default Concerts
