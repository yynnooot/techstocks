import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addZero from '../utils/addZero';
import getColor from '../utils/getColor';
const StockOverview = (props) => {

  const stock = props.stock.quote;
  const { symbol, companyName, latestPrice, high, low, open, close, latestTime, changePercent, change } = stock;
  const colorClass = getColor(change)

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

StockOverview.propTypes = {
  stock: PropTypes.object.isRequired
}
export default StockOverview;
