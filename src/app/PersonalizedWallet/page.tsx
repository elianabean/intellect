"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import PieChart  from "../components/PieChartBig";
import MyRadarChart from "../components/RadarChart";

import Image from "next/image";
import {Progress} from "@nextui-org/react";
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState, useRef, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Homepage2() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [dataPie, setDataPie] = useState([
    { id: 0, value: 50, label: 'Food', color: '#96F996', radius: 50 },
    { id: 1, value: 600, label: 'Entertainment', color: '#C1E9FF', radius: 50 },
    { id: 2, value: 500, label: 'Clubs', color: '#C0BBFF', radius: 50 },
    { id: 3, value: 500, label: 'Transportation', color: '#BCFF87', radius: 50 },
    { id: 4, value: 3000, label: 'Housing', color: '#4EDBD2', radius: 50 },
    { id: 5, value: 10**-20, label: '', color: '#DFFADF', radius: 400 },
    { id: 6, value: 10**-20, label: '',  color: '#DEF3FF', radius: 50 },
    { id: 7, value: 10**-20, label: '',  color: '#E8E6FF', radius: 50 },
    { id: 8, value: 10**-20, label: '',  color: '#DBFAC2', radius: 50 },
    { id: 9, value: 10**-20, label: '',  color: '#A5F1ED', radius: 50 },
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
      <div className="h-full min-h-[100vh] w-[100vw] pl-28 pr-3 pb-16 pt-24 flex flex-col items-center justify-center translate-y-[-2.5%]">
        <div className="flex flex-row flex-wrap">
        <div className="justify-center items-stretch gap-[40px] h-[90%]">
        <div className="[background:rgba(255,255,0,0)] rounded-[10px] flex flex-col justify-start items-center py-[25px] px-[40px] w-[50%] translate-x-[70%]">
            {/* <div className="flex flex-col items-start">
                <p className="text-[#2A3A28] font-raleway text-2xl font-bold leading-[150%]">Personalized Ideal Wallet</p>
                <p className="text-[#2A3A28] font-raleway text-[18px] font-bold leading-[150%] w-[90%] mt-[16px]">After taking a look at your interests and expenses, I created your Ideal Wallet!</p>
            </div>
             */}
            <div className="relative ">
                <PieChart data={dataPie}/>
                <p className="absolute text-[#515251] text-2xl absolute top-[38%] left-[50%] translate-x-[-50%] translate-y-[-10%] w-[30%] text-center">Your Personalized Wallet</p>
            </div>
            <div className="absolute w-[247.88px] h-[30.05px] text-gray-500 top-[60%] text-[20px] translate-x-[-20%] translate-y-[150px] font-semibold font-['Inter'] leading-snug">
            <div className="text-gray-500 top-[60%] text-[20px] leading-snug">KEY</div>
            <div className="flex text-gray-500 text-[15px] leading-snug space-x-[10px]" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#96F996]"/>
              <div>Food</div>  
            </div>
            <div className="flex text-gray-500 text-[15px] leading-snug space-x-[10px]" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#C1E9FF]"/> 
              <div>Entertainment</div>  
            </div>
            <div className="flex text-gray-500 text-[15px] leading-snug space-x-[10px]" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#C0BBFF]"/>
              <div>Clubs</div> 
            </div>
            <div className="flex text-gray-500 text-[15px] leading-snug space-x-[10px]" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#BCFF87]"/>
              <div>Transportation </div>
            </div>
            <div className="flex text-gray-500 text-[15px] leading-snug space-x-[10px]" style={{ marginTop: 5 }}>
              <CircleIcon className="text-[#A5F1ED]"/>
              <div>Housing</div> 
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col items-start py-[12px] px-[45px] w-[35%] translate-x-[25%]">
            <div className="[background:rgba(252,251,255,0.80)] w-[75%]  items-center shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958]" >
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
                { name: 'Transportation', x: 200},
                { name: 'Clubs', x: 100 },
                { name: "Housing", x: 950}
              ]}/>
            <CircleIcon className="text-[#A5F1ED] translate-x-[5px] translate-y-[-205px]"/>
            <CircleIcon className="text-[#C0BBFF] translate-x-[32px] translate-y-[-50px]"/>
            <CircleIcon className="text-[#BCFF87] translate-x-[173px] translate-y-[-50px]"/>
            <CircleIcon className="text-[#C1E9FF] translate-x-[195px] translate-y-[-205px]"/>
            <CircleIcon className="text-[#96F996] translate-x-[41px] translate-y-[-298px]"/>

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
        color = "#FA224B"
        break;
      case(100-props.realValue/props.maxValue*100<=66):
        color = "#FFE073"
        break;
      default:
        color = "#96F996"
        break;
    }

    return(
    <div style={{ marginBottom: 10 }} className="translate-x-[10%]">
              <div style={{ marginTop: 10 }}>
                <div style={{ width: "100%", color:"black", alignContent:"center"}}>
                  {/* <h3 className="h5 text-center text-xl">{props.label}</h3> */}
                </div>
                <div className={"row"} style={{ width: "60%", height: "25%", paddingLeft: 30, display:"flex"}}>
                  <CircularProgressbar
                    value={100 -props.realValue/props.maxValue*100}
                    text={`${props.realValue/props.maxValue*100}%`}
                    styles={buildStyles({
                      rotation: 0.5 + (17-props.realValue/props.maxValue - 5 / 100) / 2,
                      trailColor: "black",
                      pathColor: color
                    })}
                  />
                  <div style={{width: "50%", alignContent: "center", paddingLeft: "10%"} } className=" translate-y-[10px]">
                  <div style={{width: '100%', height: '100%', position: 'relative'}}>
                  <div style={{width: 84.41, height: 9, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 50, border: (100-props.realValue/props.maxValue*100<=33) ?"#FA224B 1px solid": (100-props.realValue/props.maxValue*100<=66)? "#FFE073 1px solid": "#96F996 1px solid"}} />
                  <div style={{width:  84.41 * (1 - props.realValue/props.maxValue), height: 9, left: 0.41, top: 0, position: 'absolute', background: (100-props.realValue/props.maxValue*100<=33) ?"#FA224B": (100-props.realValue/props.maxValue*100<=66)? "#FFE073": "#96F996", borderRadius: 50}} />
                  <h3 className="h5 text-center text-s text-black  w-[200%] translate-y-[10px]">${props.realValue} spent</h3>
                  </div>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
    );
  }
}


