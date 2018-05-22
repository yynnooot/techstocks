import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTooltip, VictoryCandlestick, VictoryTheme, VictoryVoronoiContainer} from 'victory';


const Chart = (props) => {
  console.log(props.fiveDay)
  const dates = []
  const newData = props.fiveDay.map(stock => {

    let newdate = stock.date.slice(5)
    dates.push(newdate)

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
        domainPadding={{ x: 50 }}
        scale={{ x: "linear" }}
        animate={{duration: 1000}}
        containerComponent={
        	<VictoryVoronoiContainer />
        }
        >
        <VictoryAxis 
          tickFormat={dates}
          style={{
            tickLabels: {fontSize: 8, padding: 10, angle: -45},
          }}
          />
        <VictoryAxis 
          dependentAxis
          style={{
            tickLabels: {fontSize: 8},
          }}
        />
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={newData}
          style={{
            data: {width: 50}
            }}
          labels={(d) => [`${d.x}`, `open: ${d.open}`, `close: ${d.close}`, `high: ${d.high}`, `low: ${d.low}`]}
          labelComponent={
            <VictoryTooltip />
          }  
        />
      </VictoryChart >

    </div>
  )
}

export default Chart;