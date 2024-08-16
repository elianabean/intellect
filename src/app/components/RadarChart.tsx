
import React from 'react';
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';

interface RadarChartProps {
    data: { name: string, x: number}[];
}

export default function MyRadarChart({ data }: RadarChartProps)  {
 
    // Sample data

    return (
        <RadarChart height={400} width={410} 
            outerRadius="100%" data={data}>
            <PolarGrid />
            <Radar dataKey="x" stroke="purple"
                fill="purple" fillOpacity={0.3} />
        </RadarChart>
    );
}
 
 MyRadarChart;
