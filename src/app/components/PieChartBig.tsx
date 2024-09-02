"use client";

import { MakeOptional } from "@mui/x-charts/internals";
import {
  PieSeriesType,
  PieValueType,
} from "@mui/x-charts/models/seriesType/pie";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import * as d3 from "d3";
import { useMemo } from "react";

// import { PieChart, Pie, Cell } from 'recharts';
interface PieChartProps {
  data: { id: number; value: number; label: string; color: string }[];
}
type DataItem = {
  id: number;
  label: string;
  value: number;
  color: string;
};
export default function PieChartExport({ data }: PieChartProps) {
  const x = 245;
  const y = 245;
  const width = 500;
  const height = 700;
  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);
  return (
    <div>
      <PieChart
        className="absolute"
        series={[
          {
            data: PieChartSlice({ data: data }, 5)["data"],
            innerRadius: 125,
            outerRadius:
              250 + Math.sqrt((pie[0].endAngle - pie[0].startAngle) * 500),
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            startAngle: pie[0].startAngle * (180 / Math.PI),
            endAngle: pie[0].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 6)["data"],
            innerRadius: 125,
            outerRadius:
              250 + Math.sqrt((pie[1].endAngle - pie[1].startAngle) * 500),
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            startAngle: pie[1].startAngle * (180 / Math.PI),
            endAngle: pie[1].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 7)["data"],
            innerRadius: 125,
            outerRadius:
              250 + Math.sqrt((pie[2].endAngle - pie[2].startAngle) * 500),
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            startAngle: pie[2].startAngle * (180 / Math.PI),
            endAngle: pie[2].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 8)["data"],
            innerRadius: 125,
            outerRadius:
              250 + Math.sqrt((pie[3].endAngle - pie[3].startAngle) * 500),
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            startAngle: pie[3].startAngle * (180 / Math.PI),
            endAngle: pie[3].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 9)["data"],
            innerRadius: 125,
            outerRadius:
              250 + Math.sqrt((pie[4].endAngle - pie[4].startAngle) * 500),
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            startAngle: pie[4].startAngle * (180 / Math.PI),
            endAngle: pie[4].endAngle * (180 / Math.PI),
          },
        ]}
        width={800}
        height={700}
        tooltip={{ trigger: "none" }}
        slotProps={{ legend: { hidden: true } }}
      />
      <PieChart
        series={[
          {
            data: PieChartSlice({ data: data }, 0)["data"],
            innerRadius: 125,
            outerRadius: 250,
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            highlightScope: { highlighted: "item" },
            highlighted: {
              innerRadius: 125,
              additionalRadius: Math.sqrt(
                (pie[0].endAngle - pie[0].startAngle) * 500
              ),
            },
            faded: { innerRadius: 40, additionalRadius: 0 },
            startAngle: pie[0].startAngle * (180 / Math.PI),
            endAngle: pie[0].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 1)["data"],
            innerRadius: 125,
            outerRadius: 250,
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            highlightScope: { highlighted: "item" },
            highlighted: {
              innerRadius: 125,
              additionalRadius: Math.sqrt(
                (pie[1].endAngle - pie[1].startAngle) * 500
              ),
            },
            faded: { innerRadius: 40, additionalRadius: 0 },
            startAngle: pie[1].startAngle * (180 / Math.PI),
            endAngle: pie[1].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 2)["data"],
            innerRadius: 125,
            outerRadius: 250,
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            highlightScope: { highlighted: "item" },
            highlighted: {
              innerRadius: 125,
              additionalRadius: Math.sqrt(
                (pie[2].endAngle - pie[2].startAngle) * 500
              ),
            },
            faded: { innerRadius: 40, additionalRadius: 0 },
            startAngle: pie[2].startAngle * (180 / Math.PI),
            endAngle: pie[2].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 3)["data"],
            innerRadius: 125,
            outerRadius: 250,
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            highlightScope: { highlighted: "item" },
            highlighted: {
              innerRadius: 125,
              additionalRadius: Math.sqrt(
                (pie[3].endAngle - pie[3].startAngle) * 500
              ),
            },
            faded: { innerRadius: 40, additionalRadius: 0 },
            startAngle: pie[3].startAngle * (180 / Math.PI),
            endAngle: pie[3].endAngle * (180 / Math.PI),
          },
          {
            data: PieChartSlice({ data: data }, 4)["data"],
            innerRadius: 125,
            outerRadius: 250,
            //  arcLabel: 'label',
            cx: 400,
            cy: 295,
            highlightScope: { highlighted: "item" },
            highlighted: {
              innerRadius: 125,
              additionalRadius: Math.sqrt(
                (pie[4].endAngle - pie[4].startAngle) * 500
              ),
            },
            faded: { innerRadius: 40, additionalRadius: 0 },
            startAngle: pie[4].startAngle * (180 / Math.PI),
            endAngle: pie[4].endAngle * (180 / Math.PI),
          },
        ]}
        width={800}
        height={700}
        tooltip={{ trigger: "item" }}
        slotProps={{ legend: { hidden: true } }}
      />
    </div>
  );
}
function PieChartSlice(
  { data }: PieChartProps,
  index: number
): MakeOptional<PieSeriesType<MakeOptional<PieValueType, "id">>, "type"> {
  return { data: [data[index]] };
}
