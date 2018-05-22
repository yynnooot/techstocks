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
        <h2>${addZero(latestPrice)} <span className={colorClass}>({change}) {changePercent}%</span></h2>
        <h3>{latestSource} {latestTime}</h3>
      </div> 
      <div className='flex'>
        <div>
          <h3>Open: ${addZero(open)}</h3>
          <h3>Close: ${addZero(close)}</h3>
        </div>
        <div>
          <h3>High: ${addZero(high)}</h3>
          <h3>Low: ${addZero(low)}</h3>
        </div>
      </div>
      <h3>P/E:{peRatio}</h3>
      <h3>52-wk high: ${addZero(week52High)}</h3>
      <h3>52-wk low: ${addZero(week52Low)}</h3>
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
  