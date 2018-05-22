import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTooltip, VictoryCandlestick, VictoryTheme, VictoryVoronoiContainer} from 'victory';
import addZero from '../utils/addZero';

const Chart = (props) => {
 
  const dates = props.dates;
  const data = props.data;

  return (
    <div className='chart-container'>
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
          style={{
            tickLabels: {fontSize: 8, padding: 10, angle: -45}
          }}
          />
        <VictoryAxis 
          dependentAxis
          style={{
            tickLabels: {fontSize: 8},
          }}
        />
        <VictoryCandlestick
          candleColors={{ positive: "#3db384", negative: "#c43a31" }}
          data={props.data}
          
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