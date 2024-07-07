"use client"

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface PieChartProps {
    data: { id: number, value: number, label: string, color: string }[];
  }

export default function PieChartExport({ data }: PieChartProps)  {
    return (
        <PieChart series={[{data,
            innerRadius: 130,
           outerRadius: 300,
           arcLabel: 'label',
         },
       ]}
       sx={{
         [`& .${pieArcLabelClasses.root}`]: {
           fill: 'white',
           width: 139,
         },
       }}
       width={700}
       height={700}
       slotProps={{ legend: { hidden: true }}}
     />
    );
}