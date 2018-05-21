import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllThunk, getChartThunk } from '../redux/stock';
import PropTypes from 'prop-types';

import StockOverview from './StockOverview';

export class Home extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    this.props.getAllThunk()
    this.props.getChartThunk('MSFT')
  }
  render(){
    return (
      <div className='home-container'>
        <h1>Big 5 Tech Stocks</h1>
        <div className='overview-container'>
          { this.props.allStocks.map((stockObj, idx) => 
            <StockOverview stock={stockObj} key={idx} />
          )}
        </div>
         
      </div>
    )
  }
}
const mapState = (state) => ({
  allStocks: state.all //{AAPL: {…}, AMZN: {…}, IBM: {…}, GOOGL: {…}, MSFT: {…}},
})
const mapDispatch = (dispatch) => ({
  getAllThunk: function(){
    dispatch(getAllThunk())
  },
  getChartThunk: function(ticker){
    dispatch(getChartThunk(ticker))
  }
})

Home.propTypes = {
  getAllThunk: PropTypes.func,
  allStocks: PropTypes.array
}
export default connect(mapState, mapDispatch)(Home)