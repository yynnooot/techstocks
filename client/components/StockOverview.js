import React from 'react';


const StockOverview = (props) => {
  
  const stock = props.stock.quote;

  let colorClass;
  if(stock.change > 0) colorClass = 'red';
  if(stock.change === 0) colorClass = 'grey';
  if(stock.change < 0) colorClass = 'green'

  return (
    <div className='stock-overview-container'>
      <h3>{stock.companyName} {stock.symbol}</h3>
      <h5>{stock.primaryExchange}</h5>
      <h5>Price: ${addZero(stock.latestPrice)} <span className={colorClass}>({stock.change}) {stock.changePercent}%</span></h5>
      <h5>Open: ${addZero(stock.open)}</h5>
      <h5>Close: ${addZero(stock.close)} ({stock.latestTime})</h5>
    </div>
    
  )
}
//function that adds trailing zeros to dollar price
const addZero = (num) => Number.parseFloat(num).toFixed(2);

export default StockOverview;
