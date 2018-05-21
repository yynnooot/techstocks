import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StockOverview = (props) => {

  const stock = props.stock.quote;
  
  let colorClass;
  if(stock.change > 0) colorClass = 'red';
  if(stock.change === 0) colorClass = 'grey';
  if(stock.change < 0) colorClass = 'green'

  return (
    <Link to={`/${stock.symbol}`} className='stock-overview-container'>
        <h3>{stock.companyName} {stock.symbol}</h3>
        <h5>{stock.primaryExchange}</h5>
        <h5>Price: ${addZero(stock.latestPrice)} <span className={colorClass}>({stock.change}) {stock.changePercent}%</span></h5>
        <h5>High: ${addZero(stock.high)} | Low: ${addZero(stock.low)}</h5>
        <h5>Open: ${addZero(stock.open)}</h5>
        <h5>Close: ${addZero(stock.close)} ({stock.latestTime})</h5>
    </Link>
  )
}
//function that adds trailing zeros to dollar price
const addZero = (num) => Number.parseFloat(num).toFixed(2);

StockOverview.propTypes = {
  stock: PropTypes.object
}
export default StockOverview;
