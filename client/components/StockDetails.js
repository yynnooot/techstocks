import React from 'react';
import { connect } from 'react-redux';
import addZero from '../utils/addZero';
import PropTypes from 'prop-types';
import getColor from '../utils/getColor';

const StockDetails = (props) => {
  
  const { latestSource, latestTime, open, close, high, low, latestPrice, change, changePercent, peRatio, week52High, week52Low } = props.quote
  const colorClass = getColor(change)
  return (
    <div className='stockdetails-container left'>
      <div className='flex baseline'>
        <h1>${addZero(latestPrice)} <span className={colorClass}>({change}) {changePercent}%</span></h1>
        <h3>{latestSource} {latestTime}</h3>
      </div> 
      <div className='flex'>
        <div>
          <h2>Open: ${addZero(open)}</h2>
          <h2>Close: ${addZero(close)}</h2>
        </div>
        <div>
          <h2>High: ${addZero(high)}</h2>
          <h2>Low: ${addZero(low)}</h2>
        </div>
      </div>
      <h2>P/E:{peRatio}</h2>
      <h2>52-wk high: ${addZero(week52High)}</h2>
      <h2>52-wk low: ${addZero(week52Low)}</h2>
    </div>
  )}

StockDetails.propTypes = {
    stock: PropTypes.shape({
      quote: PropTypes.object,
      chart: PropTypes.arrayOf(PropTypes.object),
    })
  }
  const mapState = (state) => ({
    stock: state.currentStock, //{quote:{...}, chart:[...]}
    quote: state.currentStock.quote, //{}
    chart: state.currentStock.chart, //[{},{}]
  })
  
  export default connect(mapState)(StockDetails);
  