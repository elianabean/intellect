"use client"

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface PieChartProps {
    data: { id: number, value: number, label: string, color: string }[];
  }

export default function PieChartExport({ data }: PieChartProps)  {
    return (
        <PieChart series={[{data,
            innerRadius: 125,
           outerRadius: 205,
          //  arcLabel: 'label',
           cx: 200,
           cy: 230,
         },
       ]}
      //  sx={{
      //    [`& .${pieArcLabelClasses.root}`]: {
      //      fill: 'white',
      //      width: 139,
      //    },
      //  }}
       width={425}
       height={450}
       slotProps={{ legend: { hidden: true }}}
     />
    );
}