import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chart from './Chart';

import { getStockThunk } from '../redux/stock'
import addZero from '../utils/addZero';
import getColor from '../utils/getColor';
import lastFive from '../utils/lastFive';

class SingleStock extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    const { ticker } = this.props.match.params;
    this.props.getStock(ticker)
  }
  render(){
    if(this.props.loading){
      return (
        <div>
          <h5>Loading...</h5>
        </div>
        )
    } else {
      const { symbol, companyName, primaryExchange, latestSource, latestTime, open, close, high, low, latestPrice, change, changePercent, peRatio, week52High, week52Low} = this.props.quote
      const colorClass = getColor(change)
      const fiveDay = lastFive(this.props.chart);
      return (
          <div>
            <h1>{companyName}</h1>
            <h2>{primaryExchange}: {symbol}</h2>
            <h2>${addZero(latestPrice)} <span className={colorClass}>({change}) {changePercent}%</span></h2>
            <h3>{latestSource} {latestTime}</h3>
            <h3>Open: ${addZero(open)}</h3>
            <h3>Close: ${addZero(close)}</h3>
            <h3>High: ${addZero(high)}</h3>
            <h3>Low: ${addZero(low)}</h3>
            <h3>P/E:{peRatio}</h3>
            <h3>52-wk high: ${addZero(week52High)}</h3>
            <h3>52-wk low: ${addZero(week52Low)}</h3>

            <Chart fiveDay={fiveDay} />
          </div>
      )
    }
  }
}

SingleStock.propTypes = {
  getStock: PropTypes.func.isRequired,
  stock: PropTypes.shape({
    quote: PropTypes.object,
    chart: PropTypes.arrayOf(PropTypes.object),
  })
}
const mapState = (state) => ({
  stock: state.currentStock, //{quote:{...}, chart:[...]}
  quote: state.currentStock.quote, //{}
  chart: state.currentStock.chart, //[{},{}]
  loading: state.currentStock.loading
})
const mapDispatch= (dispatch) => ({
  getStock: function(ticker){
    dispatch(getStockThunk(ticker))
  }
})
export default connect(mapState, mapDispatch)(SingleStock);
