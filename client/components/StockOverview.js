import React from 'react';

const StockOverview = (props) =>
  (
    <h1>{props.stock.quote.symbol}</h1>
  )
export default StockOverview;
