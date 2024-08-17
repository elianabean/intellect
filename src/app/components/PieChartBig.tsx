"use client"

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
// import { PieChart, Pie, Cell } from 'recharts';
interface PieChartProps {
    data: { id: number, value: number, label: string, color: string}[];
  }

export default function PieChartExport({ data }: PieChartProps)  {
    return (
        <PieChart
        series={[{data,
            innerRadius: 125,
           outerRadius: 200,
          //  arcLabel: 'label',
           cx: 245,
           cy: 245,
           highlightScope: { highlighted: 'item' },
           highlighted: { innerRadius: 125, additionalRadius: 50},
           faded: { innerRadius: 40, additionalRadius: 0},

           
         },
       ]}
      //  sx={{
      //    [`& .${pieArcLabelClasses.root}`]: {
      //      fill: 'white',
      //      width: 139,
      //    },q
      //  }}
       width={500}
       height={700}
       slotProps={{ legend: { position: { vertical: 'bottom', horizontal: 'left'  } }}}
     />
    );
}