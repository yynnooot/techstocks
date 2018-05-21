import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getStockThunk } from '../redux/stock'

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
      const { symbol, companyName, primaryExchange, open, close, high, low, latestPrice, change, changePercent, peRatio, week52High, week52Low} = this.props.quote
      return (
          <div>
            <h1>{companyName} ({symbol})</h1>
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
