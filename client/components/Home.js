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
    return (
      <div>
        <h1>Home</h1>
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
  }
})
export default connect(mapState, mapDispatch)(Home)