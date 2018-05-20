import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllThunk } from '../redux/stock';

import StockOverview from './StockOverview';

export class Home extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    this.props.getAllThunk()
  }
  render(){
    //const {AAPL, GOOG, IBM, AMZN, MSFIT} = this.props.allStocks;
    //console.log('allstock:', this.props.allStocks)
    return (
      <div>
        <h1>Home</h1>
        {this.props.allStocks.map((stockObj,idx) => <StockOverview stock={stockObj} key={idx} />
        )}
        
      </div>
    )
  }
}
const mapState = (state) => ({
  allStocks: state.all, //{AAPL: {…}, AMZN: {…}, IBM: {…}, GOOGL: {…}, MSFT: {…}},
})
const mapDispatch = (dispatch) => ({
  getAllThunk: function(){
    dispatch(getAllThunk())
  }
})
export default connect(mapState, mapDispatch)(Home)