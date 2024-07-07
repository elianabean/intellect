"use client"

import { BarChart } from '@mui/x-charts/BarChart';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BarChartExport() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}