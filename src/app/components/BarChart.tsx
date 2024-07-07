"use client"

import { BarChart } from '@mui/x-charts/BarChart';

interface BarChartProps {
    data: number[];
  }

const xLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export default function BarChartExport({ data }: BarChartProps) {
  return (
    <BarChart
      width={500}
      height={300}
      slotProps={{ legend: { hidden: true }}}
      series={[
        { data: data, label: 'pv', id: 'pvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band', id: 'xAxisId'}]}
      leftAxis={null}
      yAxis={[
        {
          colorMap: {
              type: 'piecewise',
              thresholds: [0],
              colors: ['rgba(193,29,29,0.80)', 'rgba(61,112,75,0.70)'],
            },
            min: -5000,
            max: 5000
        },
      ]}
    />
  );
}