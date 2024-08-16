"use client"

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface PieChartProps {
    data: { id: number, value: number, label: string, color: string }[];
  }

export default function PieChartExport({ data }: PieChartProps)  {
    return (
        <PieChart series={[{data,
            innerRadius: 95,
           outerRadius: 160,
          //  arcLabel: 'label',
           cx: 155,
           cy: 170,
         },
       ]}
      //  sx={{
      //    [`& .${pieArcLabelClasses.root}`]: {
      //      fill: 'white',
      //      width: 139,
      //    },
      //  }}
       width={325}
       height={350}
       slotProps={{ legend: { hidden: true }}}
     />
    );
}