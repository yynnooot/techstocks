import axios from 'axios'

const initialState = {
  all: [],
  currentChart: {}
}
//action types
const GET_ALL_STOCKS = 'GET_ALL_STOCKS';
const GET_CHART = 'GET_CHART';

//action creators
const getAllStocks = (payload) => ({
  type: GET_ALL_STOCKS,
  payload
})
const getChart = (payload) => ({
  type: GET_CHART,
  payload
})

//thunk creators
export const getAllThunk = () => 
  dispatch => {
    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,amzn,ibm,googl,msft&types=quote&range=1m')  
      .then(res => {

        const allStocksObj = res.data; //{AAPL: {…}, AMZN: {…}, IBM: {…}, GOOGL: {…}, MSFT: {…}}
        
        //creates an array consisting of individual stock objects
        const arr = Object.keys(allStocksObj).map(stock => allStocksObj[stock]) 

        dispatch(getAllStocks(arr))
      })
      .catch(err => console.log(err))
  }
export const getChartThunk = (ticker) => 
  dispatch => {
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${ticker}&types=chart&range=1m`)
    .then(res => {
      console.log('res.data chart:', res.data)
      dispatch(getChart(res.data))
    })
    .catch(err => console.log(err))
  }


export default function (state = initialState, action){
  switch (action.type) {
    case GET_ALL_STOCKS:
      return { ...state, all: action.payload }
    case GET_CHART:
      return { ...state, currentChart: action.payload}
    default:
      return state
  }
} 