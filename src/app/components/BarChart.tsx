"use client"

import { BarChart } from '@mui/x-charts/BarChart';

interface BarChartProps {
    data: number[];
  }

const xLabels = [
  '6/1',
  '6/2',
  '6/3',
  '6/4',
  '6/5',
  '6/6',
  '6/7',
  '6/8',
  '6/9',
  '6/10',
  '6/11',
  '6/12',
  '6/13',
  '6/14',
];

export default function BarChartExport({ data }: BarChartProps) {
  return (
    <BarChart
      width={700}
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