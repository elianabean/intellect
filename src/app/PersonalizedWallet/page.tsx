"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import PieChart  from "../components/PieChartBig";
import MyRadarChart from "../components/RadarChart";
import CustomPieChart from "../components/LayeredPieChart";

import Image from "next/image";
import {Progress} from "@nextui-org/react";
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState, useRef, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Homepage2() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [dataPie, setDataPie] = useState([
    { i: 0, y: 50, x: 'Food', color: '#96F996', borderColor: '#DFFADF', radius: 290 },
    { i: 1, y: 600, x: 'Entertainment', color: '#C1E9FF', borderColor: '#DEF3FF', radius: 290 },
    { i: 2, y: 500, x: 'Clubs', color: '#C0BBFF', borderColor: '#E8E6FF', radius: 290 },
    { i: 3, y: 500, x: 'Transportation', color: '#BCFF87', borderColor: '#DBFAC2', radius: 290 },
    { i: 4, y: 3000, x: 'Housing', color: '#4EDBD2', borderColor: '#A5F1ED', radius: 290 },
  ]);


  // useEffect(() => {
  //   // Fetch data from the API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/getWalletBreakdown');
  //       if (!response.ok) throw new Error('Failed to fetch data');
  //       const data = await response.json();
  //       setWalletInfo(data);

  //       // Extract values and update dataPie based on fetched data
  //       console.log(data);
  //       const newDataPie = [
  //         { id: 0, value: data.expenses_details.food_expenses || 0, label: 'Food', color: '#8CB497', radius: 50 },
  //         { id: 1, value: data.wants_details.entertainment_expenses, label: 'Entertainment', color: '#7FBB7A', radius: 50 },
  //         { id: 2, value: data.wants_details.ec_expenses || 0, label: 'Clubs', color: '#75AE86', radius: 50 },
  //         { id: 3, value: data.expeTransportaioning wallet breakdown:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>
      <div className="h-full min-h-[100vh] w-[100vw] pl-36 pr-3 pb-16 pt-32 flex flex-col items-center justify-center translate-y-[-2.5%]">
        <div className="flex flex-row flex-wrap">
        <div className="justify-center items-stretch gap-[40px] h-[90%]">
        <div className="[background:rgba(255,255,0,0)] rounded-[10px] flex flex-col justify-start items-center py-[25px] px-[40px] w-[50%] translate-x-[70%] translate-y-[10%]">
            {/* <div className="flex flex-col items-start">
                <p className="text-[#2A3A28] font-raleway text-2xl font-bold leading-[150%]">Personalized Ideal Wallet</p>
                <p className="text-[#2A3A28] font-raleway text-[18px] font-bold leading-[150%] w-[90%] mt-[16px]">After taking a look at your interests and expenses, I created your Ideal Wallet!</p>
            </div>
             */}
            <div className="relative translate-y-[-15%] translate-x-[5%] z-10" style={{width: "50vw", height: "45vw"}}>
                {/* <PieChart data={dataPie}/> */}
                <CustomPieChart data={dataPie}></CustomPieChart>
                <span className="absolute text-[#515251] text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30%] text-center font-raleway font-bold">Your Personalized Wallet</span>
            </div>
            <div className="absolute w-[247.88px] h-[30.05px] text-gray-500 top-[60%] text-[20px] translate-x-[-20%] translate-y-[150px] font-semibold font-['Inter'] leading-snug">
            <div className="text-gray-500 top-[60%] text-[20px] pb-3 leading-snug font-inter font-semibold">KEY</div>
            <hr
                style={{
                    color: "#ACBDC9",
                    backgroundColor: "#ACBDC9",
                    height: 1,
                    width: 350
                }}
            />
            <div className="flex text-gray-500 text-[15px] pt-3 leading-snug space-x-[10px] font-inter font-medium" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#96F996]"/>
              <div className="pl-5">Food</div>  
            </div>
            <div className="flex text-gray-500 text-[15px] pt-3 leading-snug space-x-[10px] font-inter font-medium" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#C1E9FF]"/> 
              <div className="pl-5">Entertainment</div>  
            </div>
            <div className="flex text-gray-500 text-[15px] pt-3 leading-snug space-x-[10px] font-inter font-medium" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#C0BBFF]"/>
              <div className="pl-5">Clubs</div> 
            </div>
            <div className="flex text-gray-500 text-[15px] pt-3 leading-snug space-x-[10px] font-inter font-medium" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#BCFF87]"/>
              <div className="pl-5">Transportation </div>
            </div>
            <div className="flex text-gray-500 text-[15px] pt-3 leading-snug space-x-[10px] font-inter font-medium" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#A5F1ED]"/>
              <div className="pl-5">Housing</div> 
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col items-start pt-4 w-[35%] translate-x-[5%]">
            <div className="[background:rgba(252,251,255,0.80)] w-[74%] pr-[45px] items-center rounded-[10px] border-solid border-[#C4D8C4] border-1 py-5" >
              <div className="flex flex-col gap-2">
            <PrecentageAndAbsRep label="Food" realValue={15} maxValue={20} />
            <PrecentageAndAbsRep label="Entertainment" realValue={90} maxValue={60} />
            <PrecentageAndAbsRep label="Clubs" realValue={10} maxValue={50} />
            <PrecentageAndAbsRep label="Transportation" realValue={5} maxValue={10} />
            <PrecentageAndAbsRep label="Housing" realValue={50} maxValue={100} />
              </div>
            </div>
            <div style={{ marginTop: 30 }} className="[background:rgba(252,251,255,0.80)] rounded-[10px] border-b border-[#C4D8C4] border-solid border-1 pt-5 px-5" >
            <div className="translate-y-[10px]">
              <MyRadarChart data={[
                  { name: 'Food', x: 400 },
                  { name: 'Entertainment', x: 100 },
                  { name: 'Transportation', x: 200},
                  { name: 'Clubs', x: 100 },
                  { name: "Housing", x: 950}
                ]}/>
              <CircleIcon className="text-[#A5F1ED] translate-x-[-10px] translate-y-[-179px]"/>
              <CircleIcon className="text-[#C0BBFF] translate-x-[16px] translate-y-[-37px]"/>
              <CircleIcon className="text-[#BCFF87] translate-x-[141px] translate-y-[-37px]"/>
              <CircleIcon className="text-[#C1E9FF] translate-x-[165px] translate-y-[-179px]"/>
              <CircleIcon className="text-[#96F996] translate-x-[18px] translate-y-[-273px]"/>
            </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  );

  function PrecentageAndAbsRep(props: {label: string; realValue: number; maxValue: number}) {
    var color = "#fffffff"
    switch(true){
      case(props.label=="Food"):
        color = "#96F996"
        break;
      case(props.label=="Entertainment"):
        color = "#D0EEFF"
        break;
      case(props.label=="Clubs"):
        color = "#D3D0FF"
        break;
      case(props.label=="Transportation"):
        color = "#D2FFAF"
        break;
      default:
        color = "#5ae6dd"
        break;
    }

    return(
    <div style={{ marginBottom: 10 }} className="translate-x-[10%]">
              <div style={{ marginTop: 10 }}>
                <div style={{ width: "100%", color:"black", alignContent:"center"}}>
                  {/* <h3 className="h5 text-center text-xl">{props.label}</h3> */}
                </div>
                <div className={"row font-bold"} style={{ width: "67%", height: "30%", paddingLeft: 30, display:"flex"}}>
                  <CircularProgressbar
                    value={100 -props.realValue/props.maxValue*100}
                    text={`${props.realValue/props.maxValue*100}%`}
                    styles={buildStyles({
                      textColor: "#6B7280",
                      textSize: 21,
                      rotation: 0.5 + (17-props.realValue/props.maxValue - 5 / 100) / 2,
                      trailColor: "#ebebeb",
                      pathColor: color
                    })}
                  />
                  <div style={{width: "50%", alignContent: "center", paddingLeft: "10%"} } className=" translate-y-[38px] translate-x-[10px]">
                  <div style={{width: '100%', height: '100%', position: 'relative'}}>
                  <div style={{width: 84.41, height: 9, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 50, border: (100-props.realValue/props.maxValue*100<=33) ?"#FA224B 1px solid": (100-props.realValue/props.maxValue*100<=66)? "#FFE073 1px solid": "#96F996 1px solid"}} />
                  <div style={{width:  84.41 * (1 - props.realValue/props.maxValue), height: 9, left: 0.41, top: 0, position: 'absolute', background: (100-props.realValue/props.maxValue*100<=33) ?"#FA224B": (100-props.realValue/props.maxValue*100<=66)? "#FFE073": "#96F996", borderRadius: 50}} />
                  
                    <h3 className="h5 text-center font-lato font-semibold text-[#6B7280]  w-[200%] translate-y-[10px]">
                    <span className="text-base">$</span>
                    <span className="text-sm ">{props.realValue}</span>
                    <span className="text-xs "> spent</span>

                    </h3>
                  </div>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
    );
  }
}


