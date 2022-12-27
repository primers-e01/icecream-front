import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import chartData from './chartData';
import styled from 'styled-components';

const ChartLine = () => (
  <div style={{ width: '100%', height: '200px', margin: '0 auto' }}>
    <ResponsiveLine
      data={chartData}
      margin={{ top: 20, right: 60, bottom: 20, left: 20 }}
      xScale={{
        type: 'time',
        format: '%Y/%m/%d',
        useUTC: false,
        precision: 'day',
      }}
      yScale={{
        type: 'linear',
        min: '0',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      xFormat="time:%Y/%m/%d"
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={{
        orient: 'right',
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendOffset: 0,
      }}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      lineWidth={1}
      colors="#ef6253"
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderColor="#000000"
      enablePointLabel={true}
      pointLabelYOffset={-24}
      tooltip={({ point }) => {
        const price = Math.ceil(point.data.yFormatted).toLocaleString('ko-KR');
        const date = point.data.xFormatted;
        return (
          <TooltipWrapper>
            <TooltipDate>{date}</TooltipDate>
            <TooltipPrice>{price}원</TooltipPrice>
          </TooltipWrapper>
        );
      }}
      areaOpacity={0.05}
      crosshairType="x"
      useMesh={true}
      legends={[]}
      motionConfig="default"
    />
  </div>
);

export default ChartLine;

const TooltipWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: #000;
`;

const TooltipDate = styled.div`
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.2px;
`;

const TooltipPrice = styled.div`
  color: #fff;
  font-size: 11px;
  letter-spacing: -0.5px;
  margin-top: 4px;
`;
