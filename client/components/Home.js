import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
  allStocks: state.all //[{AAPL: {…}, AMZN: {…}, IBM: {…},...}],
})
const mapDispatch = (dispatch) => ({
  getAllThunk: function(){
    dispatch(getAllThunk())
  }
})

Home.propTypes = {
  getAllThunk: PropTypes.func,
  allStocks: PropTypes.arrayOf(PropTypes.object)
}
export default connect(mapState, mapDispatch)(Home);
