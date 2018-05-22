import React from 'react';
import { VictoryChart, VictoryAxis, VictoryCandlestick, VictoryTheme, VictoryVoronoiContainer} from 'victory';


const Chart = (props) => {
  console.log(props.fiveDay)
  const dates = []
  const newData = props.fiveDay.map(stock => {
    dates.push(stock.date)
    return {
      x: stock.date,
      open: stock.open,
      close: stock.close,
      high: stock.high,
      low: stock.low
    }
  })
  return (
    <div className='chart-container'>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: "linear" }}
      >
        <VictoryAxis 
          tickFormat={dates}
          style={{
            axisLabel: {fontSize: 20, padding: 30},
          }}
          />
        <VictoryAxis dependentAxis/>
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={newData}
          containerComponent={
            <VictoryVoronoiContainer />
            }
        />
      </VictoryChart >

    </div>
  )
}

export default Chart;