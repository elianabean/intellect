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
  const [daysFollowed, setDaysFollowed] = React.useState<number>(4);
  const svgScore = 50;

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

        console.log(data.expenses_details.entertainment_expenses);
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

                  <div className="absolute placeholder">{progressBar(100)}</div>
                  <div className="absolute score-circle">{progressBar(svgScore, true)}</div>
                </div>
                <div className=" score-value ">
                  <div className="score-number text-black text-center text-6xl">${Math.round(svgScore)}</div>
                  <div className=" score-name text-black">Daily Purchase Limit</div>
                </div>
              </div>
            </div>
            
            </div>
            <div  className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958] h-[150px] w-[300px] translate-y-[20%]" >
                <div className="translate-x-[10%]">
                <Box sx={{ width: "80%", }}>
                  <Slider
                    className="text-green" 
                    value={daysFollowed}
                    min={1}
                    step={1}
                    max={7}
                    getAriaValueText={valueLabelFormat}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                  />
                </Box>
                </div>
                
              <div className="text-black  text-center flex ">
              <div className="text-black text-center text-5xl translate-x-[120px]">4</div>
              <div className="text-black text-center text-3xl translate-y-[30%] translate-x-[120px]">/7</div>

              </div>
              <div className="text-[#8F8F8F] text-m text-center">days/week</div>
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
        <Button variant="contained" color="success"   endIcon={<BoltIcon/>} onclick={handleOpen}>
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

function progressBar(widthPerc: number, gradient = false) {
  const radius = 150;
  const dashArray = (Math.PI * radius * widthPerc) / 100;

  return (
    <svg width="500" height="500">
      <circle
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="50"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${dashArray} 10000`}
        stroke={gradient ? "url(#score-gradient)" : "#e5e5e5"}
      ></circle>
      {gradient && (
        <defs>
          <linearGradient id="score-gradient">
            <stop offset="0%" stopColor="red" />
            <stop offset="40%" stopColor="orange" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}