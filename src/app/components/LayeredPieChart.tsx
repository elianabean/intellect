import { PieChartProps } from "@mui/x-charts";
import React, { useState } from "react";
import { VictoryPie } from "victory";

const CustomPieChart = (props: any) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    let sum = props.data.reduce((a: any, b: any) => a + b.y, 0);

    return (
        <React.Fragment>
            <div className="absolute w-[800px] h-[700px] z-10">
                <VictoryPie
                    width={800}
                    height={800}
                    data={props.data}
                    radius={145}
                    style={{
                        data: {
                            fill: "#FFF",
                            strokeWidth: 2,
                        },
                        parent: {
                            position: "absolute"
                        }
                    }}
                    labels={({ datum }) => null}
                />
            </div>

            <div className="absolute w-[800px] h-[700px]">
                <VictoryPie
                    width={800}
                    height={800}
                    data={props.data}
                    innerRadius={145}
                    radius={({ datum }) => datum.radius}
                    style={{
                        data: {
                            fill: ({ datum }) => datum.color,
                            strokeWidth: 2,
                            filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5))",
                        },
                        parent: {
                            position: "absolute"
                        }
                    }}
                    labels={({ datum }) => null}
                />
            </div>
            <div className="absolute w-[800px] h-[700px]">
                <VictoryPie
                    width={800}
                    height={800}
                    data={props.data}
                    innerRadius={({ datum }) => datum.radius}
                    radius={({ datum }) => datum.radius + Math.sqrt(datum.y/sum) * 80 }
                    style={{
                        data: {
                            fill: ({ datum }) => datum.borderColor,
                            strokeWidth: 2,
                            zIndex: "-1",
                            filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5))",
                        },
                        parent: {
                            zIndex: "-1",
                            position: "absolute"
                        }
                    }}
                    labels={({ datum }) => null}
                />
            </div>
        </React.Fragment>
    );
};

export default CustomPieChart;
