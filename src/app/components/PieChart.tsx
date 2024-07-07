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
           cx: 295,
           cy: 295,
         },
       ]}
       sx={{
         [`& .${pieArcLabelClasses.root}`]: {
           fill: 'white',
           width: 139,
         },
       }}
       width={600}
       height={600}
       slotProps={{ legend: { hidden: true }}}
     />
    );
}