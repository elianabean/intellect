import React, { useState } from "react";
import { VictoryPie, VictoryTooltip } from "victory";
import CustomTooltip from "./CustomTooltip";

const CustomPieChart = (props: any) => {
    const [activeIndex, setActiveIndex] = useState(null);
    let sum = props.data.reduce((a: any, b: any) => a + b.y, 0);

    return (
        <React.Fragment>
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
                            position: "absolute",
                            zIndex: "1"
                        },
                        labels: {
                            zIndex: "25",
                            fontSize: 14, 
                            fill: "black"
                        }
                    }}
                    labels={({ datum }) => datum.x}
                    labelComponent={activeIndex !== null ? (<CustomTooltip activeIndex={activeIndex} setActiveIndex={setActiveIndex} />) : (<div />)}
                    events={[
                        {
                            target: "data",
                            eventHandlers: {
                            onMouseOver: () => {
                                return [
                                {
                                    target: "data",
                                    mutation: (props) => {
                                        setActiveIndex(props.index);
                                    }
                                }
                                ];
                            }
                            }
                        }
                    ]}
                    labelRadius={210}
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
                            filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5))",
                        },
                        parent: {
                            position: "absolute",
                            zIndex: "-1"
                        }
                    }}
                    labels={({ datum }) => null}
                />
            </div>
        </React.Fragment>
    );
};

export default CustomPieChart;
