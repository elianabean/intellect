"use client"

import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Dropdown from "./Dropdown";
import * as React from 'react';
import LineChart2 from "../components/LineChart2";

export default function MonthlyBudgetTracking() {
    return (
        <div className="bg-[#FCFBFF] [filter:drop-shadow(5px_4px_10px_rgba(0,0,0,0.25))] px-[24px] py-[32px] rounded-sm flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-between">
                <p className="font-semibold text-black text-start text-2xl w-full">Monthly Budget Tracking</p>
                <Dropdown></Dropdown>
            </div>

            <LineChart2></LineChart2>
            
            <LineChart
            className="z-50"
        height={300}
        width={500}
        grid={{ horizontal: true }}
        series={[
          {
            curve: "linear",
            data: [0, 110, 90, 120, 75, 95],
            area: true,
          },
        ]}
        margin= {{
            bottom: 0,
            right: 0,
            top: 0,
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