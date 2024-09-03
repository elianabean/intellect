import React from 'react';

const CustomTooltip = ({ x, y, datum, activeIndex, setActiveIndex }: any) => {
  if (activeIndex == datum.i)
    return (
      <foreignObject x={x - 125} y={y - 60} width="250" height="120" style={{
        zIndex: "5000"
      }}>
        <div
          style={{
            pointerEvents: "none",
            flexShrink: "0",

            width: "85%",
            height: "85%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "5000",

            borderRadius: "7px",
            boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.25)",
            border: `1px solid ${datum.color}`,
            background: "#FFF",
            color: "black",
            textAlign: "center"
          }}
          className="font-inter"
        >
          <div style={{
            color: "#6B7280",
            textAlign: "center",
            fontSize: "1em",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "150%"
          }}>
            {datum.x}
          </div>
          <div style={{
            color: "rgba(1, 135, 33, 0.70)",
            fontSize: "2.5em",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "150%",
          
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}>
            ${datum.y}
          </div>
          <div style={{
            color: "#888",
            textAlign: "center",
            fontSize: "0.8em",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "150%",
          
            position: "absolute",
            bottom: "0.5em",
            left: "50%",
            transform: "translateX(-50%)"
          }}>
            Monthly Budget
          </div>
        </div>
      </foreignObject>
    );
  return null;
};

export default CustomTooltip;
