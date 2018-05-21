import axios from 'axios'

const initialState = {
  all: [],
  currentStock: {loading: true},
}
//action types
const GET_ALL_STOCKS = 'GET_ALL_STOCKS';
const GET_STOCK = 'GET_STOCK';

//action creators
const getAllStocks = (payload) => ({
  type: GET_ALL_STOCKS,
  payload
})
const getSingleStock = (payload) => ({
  type: GET_STOCK,
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

export const getStockThunk = (ticker) =>
  dispatch => {
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${ticker}&types=quote,chart&range=1m`)
    .then(res => {
      const stockObj = res.data[ticker]
      dispatch(getSingleStock(stockObj))
    })
    .catch(err => console.log(err))
  }


export default function (state = initialState, action){
  switch (action.type) {
    case GET_ALL_STOCKS:
      return { ...state, all: action.payload }
    case GET_STOCK:
      return { ...state, currentStock: {...action.payload, loading: false}}
    default:
      return state
  }
} 