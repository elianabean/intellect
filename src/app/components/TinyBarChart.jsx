import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ResponsiveChartContainer } from '@mui/x-charts';

const uData = [4000, -3000];
const yLabels = [
  'Page A',
  'Page B',
];

export default function TinyBarChart() {
  return (
    <ResponsiveChartContainer
      width={450}
      height={150}
      series={[{data: [4000], stack: 'A', color: 'rgba(193, 29, 29, 0.80)',label: 'uv', type: 'bar', layout: 'horizontal'},
                {data: [-3000], stack: 'A', color: 'rgba(61, 112, 75, 0.70)', label: 'uv2', type: 'bar', layout: 'horizontal'}]}
      yAxis={[{ scaleType: 'band', data: yLabels }]}
    >
      <BarPlot />
    </ResponsiveChartContainer>
  );
}