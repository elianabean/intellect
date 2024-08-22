"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import PieChart from "../components/PieChartBig";
import MyRadarChart from "../components/RadarChart";
import Image from "next/image";
import { useEffect, useState, useRef, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Backdrop, Box, Button, CircularProgress, Slider, SliderTrack, StyledEngineProvider } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import React from "react";
export default function Homepage2() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [value, setValue] = React.useState<number>(5);
  const [daysFollowed, setDaysFollowed] = React.useState<number>(1);
  const [svgScore, setSvgScore] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };



  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getWalletBreakdown');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setWalletInfo(data);
      } catch (error) {
        console.error('Error fetching wallet breakdown:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <Sidebar></Sidebar>
      
      <Profile></Profile>
      <div className="h-full min-h-[100vh] w-[100vw] pl-28 pr-3 pb-16 pt-24 flex flex-col items-center justify-center">
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[30%] h-[90%] w-[80%] right-[100px]" >
            <div className="relative h-[300px]">
            <div className="score-wrap">
              <div className="score">
                <div className="score-bar translate-x-[-100%] h-[100px] ">
                <div className=" score-name text-[#8F8F8F] text-center translate-x-[95%]">Daily Purchase Limit</div>
                  <div className="absolute score-circle">{progressSemiCircle(svgScore, true)}</div>
                </div>
                <div className=" score-value ">
                  <div className="score-number text-black text-center text-6xl">${Math.round(svgScore)}</div>
                  <div className=" score-name text-black">Daily Purchase Limit</div>
                </div>
              </div>
            </div>
            
            </div>
            <div  className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958] h-[150px] w-[300px] translate-y-[20%]" >
                <div className="translate-x-[3%] translate-y-[3px]">
                <div className="absolute score-circle">{progressBar(daysFollowed)}</div>
                </div>
              
              <div className="text-black  text-center flex translate-y-[50px]">
              <div className="text-black text-center text-5xl translate-x-[120px]">{daysFollowed}</div>
              <div className="text-black text-center text-3xl translate-y-[30%] translate-x-[120px]">/7</div>

              </div>
              <div className="text-[#8F8F8F] text-m text-center translate-y-[50px]">days/week</div>
            </div>
          
        </div>
        <StyledEngineProvider injectFirst>
        <Box sx={{ width: "50%", }}>
          <div id="non-linear-slider" className="text-[#515251]">
            Willingness to Save: {valueLabelFormat(value)}
          </div>
          <Slider
            className="text-teal-600" 
            size=""
            slotProps={{ thumb: { className: 'rounded-sm bg-[#fffff]' }}}
            value={value}
            min={1}
            step={1}
            max={10}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={(handleChange)}
            valueLabelDisplay="auto"
            thinkness
            aria-labelledby="non-linear-slider"
          />
        </Box>
        </StyledEngineProvider>
        <Button variant="contained" color="success"  endIcon={<BoltIcon/>} onClick={() => {setDaysFollowed(daysFollowed+1); console.log("huh");}}>
        Regenerate 
      </Button> 
      </div>
      
    </div>
    
  );
}



function valueLabelFormat(value: number) {
  if(value<=3){

  }
  switch (true){
    case (value<=3):
        return "Low";
        break;
    case (value<=6):
        return "Mid";
        break; 
    default:
        return "High"
  }
  
}

function progressSemiCircle(precentage: number, gradient = false) {
  const radius = 150;
  const dashArray = (0.25*Math.PI * radius * 100) / 100;

  return (
    <svg width="500" height="500">
      <circle 
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(Math.PI * radius * 100) / 100} 10000`}
        stroke={"#33ED33"}
      ></circle>
      <circle 
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#ACFFAC"}
      ></circle>
      <circle 
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.5*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FFE073"}
      ></circle>
      <circle
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="51"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.25*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FF3B60"}
      ></circle>
      <circle 
        cx={220 + (radius)*Math.cos((-0.97 + 0.94*(precentage/100))*Math.PI)}//0.94
        cy={180 + (radius)*Math.sin((-0.97 + 0.94*(precentage/100))*Math.PI)}
        r={10}
        fill="white"
        strokeWidth={3}
        stroke={"#000000"}
      ></circle>
    </svg>
  );
}

function progressBar(day: number) {
  const radius = 150;
  const dashArray = (0.25*Math.PI * radius * 100) / 100;

  return (
    <svg width="500" height="500">
      <rect 
        x="0"
        y="0"
        height={30}
        width={65}
        fill="#FF3B60"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FF3B60"}
      ></rect>
      <rect 
        x="70"
        y="0"
        height={30}
        width={65}
        fill="#FFE073"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FFE073"}
      ></rect>
      <rect 
        x="140"
        y="0"
        height={30}
        width={65}
        fill="#ACFFAC"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#ACFFAC"}
      ></rect>
      <rect 
        x="210"
        y="0"
        height={30}
        width={65}
        fill="#33ED33"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#33ED33"}
      ></rect>
      <circle 
        cx={20 +(day-1)*(240/6)}//0.94
        cy={15}
        r={10}
        fill="white"
        strokeWidth={3}
        stroke={"#000000"}
      ></circle>
    </svg>
  );
}