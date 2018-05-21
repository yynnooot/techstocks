import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StockOverview = (props) => {

  const stock = props.stock.quote;
  const { symbol, companyName, latestPrice, high, low, open, close, latestTime, changePercent, change } = stock;
  let colorClass;
  if(change > 0) colorClass = 'red';
  if(change === 0) colorClass = 'grey';
  if(change < 0) colorClass = 'green'

  return (
    <Link to={`/${symbol}`} className='stock-overview-container'>
        <h3>{companyName} {symbol}</h3>
        <h5>Price: ${addZero(latestPrice)} <span className={colorClass}>({change}) {changePercent}%</span></h5>
        <h5>High: ${addZero(high)} | Low: ${addZero(low)}</h5>
        <h5>Open: ${addZero(open)}</h5>
        <h5>Close: ${addZero(close)} ({latestTime})</h5>
    </Link>
  )
}
//function that adds trailing zeros to dollar price
const addZero = (num) => Number.parseFloat(num).toFixed(2);

StockOverview.propTypes = {
  stock: PropTypes.object.isRequired
}
export default StockOverview;
