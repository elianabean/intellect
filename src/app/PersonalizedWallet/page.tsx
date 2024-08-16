"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import PieChart  from "../components/PieChartBig";
import MyRadarChart from "../components/RadarChart";

import Image from "next/image";
import {Progress} from "@nextui-org/react";

import { useEffect, useState, useRef, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Homepage2() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [dataPie, setDataPie] = useState([
    { id: 0, value: 400, label: 'Food', color: '#bbff87', radius: 50 },
    { id: 1, value: 100, label: 'Entertainment', color: '#4edad2', radius: 50 },
    { id: 2, value: 50, label: 'Clubs', color: '#95f995', radius: 50 },
    { id: 3, value: 90, label: 'Transportation', color: '#c1e8ff', radius: 50 },
    { id: 4, value: 950, label: 'Housing', color: '#c0baff', radius: 50 },
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
  //         { id: 3, value: data.expenses_details.transportation_expenses || 0, label: 'Transportation', color: '#90E482', radius: 50 },
  //         { id: 4, value: data.expenses_details.housing_expenses || 0, label: 'Housing', color: '#96F996', radius: 50 },
  //       ];
  //       console.log(data.expenses_details.entertainment_expenses);
  //       setDataPie(newDataPie);
  //     } catch (error) {
  //       console.error('Error fetching wallet breakdown:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>
      <div className="h-full min-h-[100vh] w-[100vw] pl-28 pr-3 pb-16 pt-24 flex flex-col items-center justify-center">
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[40px] h-[90%]">
        <div className="[background:rgba(255,255,0,0)] rounded-[10px] flex flex-col justify-start items-center py-[25px] px-[40px] w-[50%]">
            {/* <div className="flex flex-col items-start">
                <p className="text-[#2A3A28] font-raleway text-2xl font-bold leading-[150%]">Personalized Ideal Wallet</p>
                <p className="text-[#2A3A28] font-raleway text-[18px] font-bold leading-[150%] w-[90%] mt-[16px]">After taking a look at your interests and expenses, I created your Ideal Wallet!</p>
            </div>
             */}
            <div className="relative">
                <PieChart data={dataPie}/>
                <p className="absolute text-[#515251] text-2xl absolute top-[38%] left-[50%] translate-x-[-50%] translate-y-[-80%] text-center">Your Personalized Wallet</p>
            </div>
            
              <div className="absolute w-[247.88px] h-[30.05px] text-gray-500 top-[50%] text-[20px] font-semibold font-['Inter'] leading-snug">KEY</div>
            
            
            
        </div>
        
        <div className="flex flex-col justify-center items-start py-[12px] px-[45px] w-[40%] ">
            <div className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958]" >
            <PrecentageAndAbsRep label="Food" realValue={15} maxValue={20} />
            <PrecentageAndAbsRep label="Entertainment" realValue={90} maxValue={60} />
            <PrecentageAndAbsRep label="Clubs" realValue={10} maxValue={50} />
            <PrecentageAndAbsRep label="Transportation" realValue={5} maxValue={10} />
            <PrecentageAndAbsRep label="Housing" realValue={50} maxValue={100} />
            </div>
            <div style={{ marginTop: 30 }} className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958]" >
            <MyRadarChart data={[
                { name: 'Food', x: 400 },
                { name: 'Entertainment', x: 100 },
                { name: 'Savings', x: 200},
                { name: 'Clubs', x: 50 },
                { name: "Housing", x: 950}
              ]}/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );

  function PrecentageAndAbsRep(props: {label: string; realValue: number; maxValue: number}) {
    var color = "#fffffff"
    switch(true){
      case(100-props.realValue/props.maxValue*100<=33):
        color = "#FF3B60"
        break;
      case(100-props.realValue/props.maxValue*100<=66):
        color = "#FFE073"
        break;
      default:
        color = "#33ED33"
        break;
    }

    return(
    <div style={{ marginBottom: 0 }}>
              <div style={{ marginTop: 0 }}>
                <div style={{ width: "100%", color:"black", alignContent:"center"}}>
                  {/* <h3 className="h5 text-center text-xl">{props.label}</h3> */}
                </div>
                <div className={"row"} style={{ width: "50%", height: "25%", paddingLeft: 30, display:"flex"}}>
                  <CircularProgressbar
                    value={100 -props.realValue/props.maxValue*100}
                    text={`${props.realValue/props.maxValue*100}%`}
                    styles={buildStyles({
                      rotation: 0.5 + (17-props.realValue/props.maxValue - 5 / 100) / 2,
                      trailColor: "black",
                      pathColor: color
                    })}
                  />
                  <div style={{width: "50%", alignContent: "center", paddingLeft: "10%"}}>
                  <Progress value={100 - props.realValue/props.maxValue*100} size="sm" classNames={{indicator: (100-props.realValue/props.maxValue*100<=33) ?"[background:#FF3B60]": (100-props.realValue/props.maxValue*100<=66)? "[background:#FFE073]": "[background:#33ED33]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[25px]", base:"w-[200px]"}} aria-label="percentage bar"/>
                  <h3 className="h5 text-center text-2xl text-black  w-[200%]">${props.realValue} Spent</h3>
                  </div>
                  
                </div>
                
              </div>
            </div>
    );
  }
}


