import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Chart from './Chart';

import { getStockThunk } from '../redux/stock'
import addZero from '../utils/addZero';
import getColor from '../utils/getColor';
import mapChartData from '../utils/mapChartData';

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
          <h3>Loading...</h3>
        </div>
        )
    } else {

      const { symbol, companyName, primaryExchange, latestSource, latestTime, open, close, high, low, latestPrice, change, changePercent, peRatio, week52High, week52Low} = this.props.quote
      const colorClass = getColor(change)
      const { newData, dates } = mapChartData(this.props.chart);

      return (
          <div className='singlestock-container'>
            <Link to='/'>&larr; Back</Link>
            <div className='singlestock-header flex baseline'>
              <h1>{companyName} ({symbol})</h1>
              <h2>{primaryExchange}</h2>
            </div>

            <div className='title-seperator'></div>

            <div className='singlestock-main flex'>

              <div className='left'>
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

              <div className='right'>
                <Chart data={newData} dates={dates}/>
              </div>

            </div>

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
