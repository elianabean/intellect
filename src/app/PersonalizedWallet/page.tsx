"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import PieChart from "../components/PieChartBig";
import Image from "next/image";
import {Progress} from "@nextui-org/react";

import { useEffect, useState, useRef } from "react";

export default function Homepage2() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [dataPie, setDataPie] = useState([
    { id: 0, value: 25, label: 'Food', color: '#8CB497' },
    { id: 1, value: 10, label: 'Entertainment', color: '#7FBB7A' },
    { id: 2, value: 5, label: 'Savings', color: '#386F38' },
    { id: 3, value: 5, label: 'Clubs', color: '#75AE86' },
    { id: 4, value: 20, label: 'Transportation', color: '#90E482' },
    { id: 5, value: 35, label: 'Housing', color: '#96F996' },
  ]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getWalletBreakdown');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setWalletInfo(data);

        // Extract values and update dataPie based on fetched data
        console.log(data);
        const newDataPie = [
          { id: 0, value: data.expenses_details.food_expenses || 0, label: 'Food', color: '#8CB497' },
          { id: 1, value: data.wants_details.entertainment_expenses, label: 'Entertainment', color: '#7FBB7A' },
          { id: 2, value: data.wants_details.ec_expenses || 0, label: 'Clubs', color: '#75AE86' },
          { id: 3, value: data.expenses_details.transportation_expenses || 0, label: 'Transportation', color: '#90E482' },
          { id: 4, value: data.expenses_details.housing_expenses || 0, label: 'Housing', color: '#96F996' },
        ];
        console.log(data.expenses_details.entertainment_expenses);
        setDataPie(newDataPie);
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
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[40px] h-[80%]">
        <div className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958] flex flex-col justify-start items-center py-[25px] px-[40px] w-[50%]">
            <div className="flex flex-col items-start">
                <p className="text-[#2A3A28] font-raleway text-2xl font-bold leading-[150%]">Personalized Ideal Wallet</p>
                <p className="text-[#2A3A28] font-raleway text-[18px] font-bold leading-[150%] w-[90%] mt-[16px]">After taking a look at your interests and expenses, I created your Ideal Wallet!</p>
            </div>
            
            <div className="relative">
                <PieChart data={dataPie}></PieChart>

                <Image src="/images/wallet.png" alt="Wallet" width={165} height={165} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></Image>
            </div>
            
        </div>

        <div className="[background:rgba(252,251,255,0.80)] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b border-solid border-b-[#516958] flex flex-col justify-center items-start py-[12px] px-[45px] w-[40%] ">
            <p className="text-[#2A3A28] font-raleway text-[18px] font-bold leading-[150%] mb-[30px]">Here’s an HP Bar of each of your expenses. Please keep them alive!</p>
            
            <p className="text-[#516958] font-raleway text-[20px] font-semibold leading-[150%] mb-1">Food</p>
            <Progress value={75} size="lg" classNames={{indicator: "[background:#ACFFAC]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[25px]", base:"w-[355px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[20px] font-semibold leading-[150%] mb-1 mt-8 ">Entertainment</p>
            <Progress value={40} size="lg" classNames={{indicator: "[background:#FFE073]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[25px]", base:"w-[355px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[20px] font-semibold leading-[150%] mb-1 mt-8">Clubs</p>
            <Progress value={70} size="lg" classNames={{indicator: "[background:#FFE073]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[25px]", base:"w-[355px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[20px] font-semibold leading-[150%] mb-1 mt-8">Transportation</p>
            <Progress value={30} size="lg" classNames={{indicator: "[background:rgba(250,34,75,0.80)]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[25px]", base:"w-[355px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[20px] font-semibold leading-[150%] mb-1 mt-8">Housing</p>
            <Progress value={90} size="lg" classNames={{indicator: "[background:#ACFFAC]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[25px]", base:"w-[355px]"}} aria-label="percentage bar"/>
            
        </div>
        </div>
      </div>
    </div>
  );
}
