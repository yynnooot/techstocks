import React from 'react';



const SingleStock = (props) => {
  const { ticker } = props.match.params;
  return (
    <div>
      <h5>Stock page</h5>
    </div>
  )
}

export default SingleStock;