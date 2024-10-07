"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { Slider, Box, Typography, styled, Button } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import Cookies from "js-cookie";

export default function Homepage2() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [daysFollowed, setDaysFollowed] = useState<number>(1);
  const [svgScore, setSvgScore] = useState<number>(0);
  const [monthlyExpense, setMonthlyExpenses] = useState<number>(0);
  const [dailyExpense, setDailyExpenses] = useState<number>(0);
  const [dailyLimit, setDailyLimit] = useState<number>(0); // State for dailyLimit

  useEffect(() => {
    try {
      fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'jwt-token': Cookies.get("access_token") as string
        }
      })
      .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            window.location.href="/Login";
        }
      })
      .then(data => {
        if (!data.data) {
          window.location.href="/Login";
        }
      })
    } catch (e) {
      console.log("No login detected");
    }
  });

  const FunButton = styled(Button)(() => ({
    backgroundColor: "#04BF30",
    height: "35px",
    width: "350px",
  }));

  const UltraFancySlider = () => {
    const [value, setValue] = useState<number>(5);

    // Function to determine the multiplier based on the slider value
    const getMultiplier = (value: number) => {
      if (value <= 3) return 1;
      if (value <= 6) return 0.9;
      return 0.8;
    };

    // Update dailyLimit whenever slider value changes
    const handleChange = (event: Event, newValue: number | number[]) => {
      if (typeof newValue === 'number') {
        setValue(newValue);
        setDailyLimit(dailyExpense * getMultiplier(newValue)); // Calculate and set dailyLimit
      }
    };

    const FunSlider = styled(Slider)(() => ({
      color: "#eae6e6",
      height: "12px",
      width: "80%",
    }));

    function valueLabelFormat(value: number) {
      switch (true) {
        case value <= 3:
          return "Low";
        case value <= 6:
          return "Moderate";
        default:
          return "High";
      }
    }

    return (
      <Box>
        <div id="non-linear-slider" className="text-[#515251] translate-x-[10px] ml-[15vw]">
          <Typography id="discrete-slider" gutterBottom>
            
              <span className="text-sm">Willingness to Save: </span>
              <span className="text-base font-bold ">{valueLabelFormat(value)}</span>
            
          </Typography>
        </div>
        <div className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958] h-[70px] w-[800px] translate-y-[20%] ml-[15vw]">
          <FunSlider
            className="translate-x-[10%] translate-y-[40%]"
            slotProps={{ thumb: { className: 'rounded-sm bg-[#16C045] h-[30px] w-[23px]' } }}
            value={value}
            min={1}
            max={10}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </div>
      </Box>
    );
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getWalletBreakdown', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'jwt-token': Cookies.get("access_token") as string
          }
        })
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log(data);
        setWalletInfo(data);
        const monthly = data.expenses_details.food_expenses +
          data.expenses_details.transportation_expenses +
          data.wants_details.ec_expenses +
          data.wants_details.entertainment_expenses +
          data.wants_details.subscription_expenses +
          data.wants_details.clothing_expenses;
        const daily = monthly / 30.0;
        setMonthlyExpenses(monthly);
        setDailyExpenses(daily);
        setDailyLimit(daily); // Initialize dailyLimit with dailyExpense
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
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[30%] h-[90%] w-[80%] right-[100px] ml-[21vw]" >
            <div className="relative h-[300px]">
            <div className="score-wrap">
              <div className="score">
                <div className="score-bar translate-x-[-100%] h-[100px] ">
                <div className=" score-name text-[#8F8F8F] text-center translate-x-[95%]">Your Daily Limit</div>
                  <div className="absolute score-circle">{progressSemiCircle(svgScore, true)}</div>
                </div>
                <div className=" score-value ">
                  <div className="score-number text-black text-center text-6xl font-inter">${Math.round(dailyLimit)}</div>
                  <div className=" score-name text-[#8F8F8F] text-m translate-y-[25px]">Daily Purchase Limit</div>
                </div>
              </div>
            </div>
            
            </div>
            
            <div  className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958] h-[150px] w-[300px] translate-y-[30%]" >
                <div className=" score-name text-[#8F8F8F] text-center translate-y-[-155%]">Consistency Percentage</div>
                <div className="translate-x-[3%] translate-y-[3px]">
                <div className="absolute score-circle">{progressBar(daysFollowed)}</div>
                </div>
              
              <div className="text-black  text-center flex translate-y-[50px]">
              <div className="text-black text-center text-5xl font-semibold translate-x-[120px] font-inter">{daysFollowed}</div>
              <div className="text-black text-center text-3xl translate-y-[30%] translate-x-[120px] font-inter">/7</div>

              </div>
              <div className="text-[#8F8F8F] text-m text-center translate-y-[50px]">days/week</div>
            </div>
          
        </div>
        <UltraFancySlider/>
        <FunButton style={{marginTop: "100px", marginLeft: "15vw"}} variant="contained" color="success"  endIcon={<BoltIcon/>} onClick={() => {setSvgScore(svgScore+1); console.log("huh");}}>
        Regenerate 
      </FunButton> 
      </div>
      
    </div>
    
  );
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
        strokeWidth="15"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(Math.PI * radius * 100) / 100} 10000`}
        stroke={"#33ED33"}
      ></circle>
      <circle
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="16"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.76*Math.PI * radius * 100) / 100} 10000`}
        stroke={"white"}
      ></circle>
      <circle 
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="15"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.74*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#ACFFAC"}
      ></circle>
      <circle
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="16"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.51*Math.PI * radius * 100) / 100} 10000`}
        stroke={"white"}
      ></circle>
      <circle 
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="15"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.49*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FFE073"}
      ></circle>
      <circle
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="16"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.26*Math.PI * radius * 100) / 100} 10000`}
        stroke={"white"}
      ></circle>
      <circle
        cx="220"
        cy="180"
        r={radius}
        fill="none"
        strokeWidth="16"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.24*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FF3B60"}
      ></circle>
      <circle 
        cx={220 + (radius)*Math.cos((-0.97 + 0.94*(precentage/100))*Math.PI)}//0.94
        cy={180 + (radius)*Math.sin((-0.97 + 0.94*(precentage/100))*Math.PI)}
        r={10}
        fill="white"
        strokeWidth={3}
        stroke={precentage/100<=0.25?"#FF3B60":precentage/100<=0.5?"#FFE073":precentage/100<0.75?"#ACFFAC":"#33ED33"}
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
        y="8"
        height={15}
        width={65}
        fill="#FF3B60"
        strokeWidth="15"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FF3B60"}
      ></rect>
      <rect 
        x="70"
        y="8"
        height={15}
        width={65}
        fill="#FFE073"
        strokeWidth="15"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#FFE073"}
      ></rect>
      <rect 
        x="140"
        y="8"
        height={15}
        width={65}
        fill="#ACFFAC"
        strokeWidth="15"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${(0.75*Math.PI * radius * 100) / 100} 10000`}
        stroke={"#ACFFAC"}
      ></rect>
      <rect 
        x="210"
        y="8"
        height={15}
        width={65}
        fill="#33ED33"
        strokeWidth="15"
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
        stroke={day<=2?"#FF3B60":day==3?"#FFE073":day<6?"#ACFFAC":"#33ED33"}
      ></circle>
    </svg>
  );
}
