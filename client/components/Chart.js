import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTooltip, VictoryCandlestick, VictoryTheme, VictoryVoronoiContainer} from 'victory';
import addZero from '../utils/addZero';

const Chart = (props) => {
 
  const dates = props.dates;
  const data = props.data;

  return (
    <div className='chart-container'>
      <h1>5 Day Candlestick Chart:</h1>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 30 }}
        scale={{ x: "linear" }}
        animate={{duration: 500}}
        containerComponent={
        	<VictoryVoronoiContainer />
        }
        style={{parent: {cursor: "pointer"}}}
        >
        <VictoryAxis 
          tickFormat={dates}
          label="MM-DD"
          style={{
            tickLabels: {fontSize: 12, padding: 10, angle: -45, fill: '#FFFFFF'},
            axisLabel: { fontSize: 10, padding: 50, fill: "#CCCCCC" }
          }}
          />
        <VictoryAxis 
          dependentAxis
          label="U.S. Dollars"
          style={{
            tickLabels: {fontSize: 12, fill: '#FFFFFF'},
            axisLabel: { fontSize: 10, padding: 50, fill: "#CCCCCC" }
          }}
        />
        <VictoryCandlestick
          candleColors={{ positive: "#3db384", negative: "#c43a31" }}
          data={props.data}        
          style={{
            data: {
              stroke: '#FFD347',
              strokeWidth: 2
            }
          }}
          labels={(d) => [`${d.x}`, `open: $${d.open}`, `close: $${d.close}`, `high: $${d.high}`, `low: $${d.low}`]}
          labelComponent={
            <VictoryTooltip />
          }  
        />
      </VictoryChart >
    </div>
  )
}

export default Chart;