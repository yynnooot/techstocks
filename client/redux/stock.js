import axios from 'axios'

const initialState = {all: []}
//action types
const GET_ALL_STOCKS = 'GET_ALL_STOCKS';

//action creators
const getAllStocks = (payload) => ({
  type: GET_ALL_STOCKS,
  payload
})

//thunk creators
export const getAllThunk = () => 
  dispatch => {
    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,amzn,ibm,googl,msft&types=quote,chart&range=1m')  
      .then(res => {

        const obj = res.data; //{AAPL: {…}, AMZN: {…}, IBM: {…}, GOOGL: {…}, MSFT: {…}}
        
        //creates an array consisting of individual stock objects
        const arr = Object.keys(obj).map(stock => obj[stock]) 

        dispatch(getAllStocks(arr))
      })
      .catch(err => console.log(err))
  }


export default function (state = initialState, action){
  switch (action.type) {
    case GET_ALL_STOCKS:
      return { all: action.payload } ////{AAPL: {…}, AMZN: {…}, IBM: {…}, GOOGL: {…}, MSFT: {…}},
    default:
      return state
  }
} 