
import React, { ReactElement } from 'react';
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
    import CircleIcon from '@mui/icons-material/Circle';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface RadarChartProps {
    data: { name:  string, x: number}[];
}

export default function MyRadarChart({ data }: RadarChartProps)  {
 
    // Sample data

    return (
        <RadarChart height={250} width={250} 
            outerRadius="90%" data={data}>
            {/* <PolarAngleAxis dataKey="name" /> */}
            <PolarGrid />
            <Radar dataKey="x" stroke="#D3D0FF"
                fill="#D3D0FF" fillOpacity={0.8} max={100}/>
        </RadarChart>
    );
}
 
 MyRadarChart;
