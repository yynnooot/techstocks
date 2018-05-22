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
        <h2>{companyName}</h2>
        <h3>({symbol})</h3>
        <div className='title-seperator-small'></div>
        <h2>${addZero(latestPrice)} <span className={colorClass}>({change}) {changePercent}%</span></h2>
        <h4>Open: ${addZero(open)}</h4>
        <h4>Close: ${addZero(close)} ({latestTime})</h4>
    </Link>
  )
}

StockOverview.propTypes = {
  stock: PropTypes.object.isRequired
}
export default StockOverview;
