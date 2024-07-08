"use client"

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

interface LineChartProps {
    data: number[];
  }

export default function LineChartExport({ data }: LineChartProps) {
    return (
        <div>
            <LineChart
            className="z-50"
        height={300}
        width={500}
        grid={{ horizontal: true }}
        series={[
          {
            curve: "linear",
            data: data,
            area: true,
          },
        ]}
        margin= {{
            bottom: 0,
            right: 0,
            top: 10,
            left: 50,
        }}
        sx = {{
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translateX(-10px)',
              },
              '& .MuiAreaElement-root': {
              border: '1px solid #000',
              zIndex: 50,
            },
        }}
        yAxis={[
          {
            colorMap: {
                type: 'piecewise',
                thresholds: [100],
                colors: ['#87D69E', 'rgba(239,25,25,0.80)'],
              },
              max:200,
              label: 'Budget' 
          },
        ]}
        bottomAxis={null}
        
      />
        </div>
    );
}