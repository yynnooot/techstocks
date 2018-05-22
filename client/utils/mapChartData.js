//function takes an array of objects (chart) and return the last 5 objects and parsed date
import addZero from './addZero';

const mapChartData = (arr) => {
  const last = arr.length;
  const front = last - 5;
  const lastFive = arr.slice(front, last)
  
  let dates = [];

  const newData = lastFive.map(stock => {

    //creates an array of dates to be used as labels for x-axis of chart
    const newDate = stock.date.slice(5)
    dates.push(newDate)

   return {
      x: stock.date,
      open: addZero(stock.open),
      close: addZero(stock.close),
      high: addZero(stock.high),
      low: addZero(stock.low)
    }
  })

  return {
    newData,
    dates
  };
}

export default mapChartData;
