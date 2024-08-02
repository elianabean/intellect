"use client";

import Link from "next/link"
import Image from "next/image";

import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import PieChart from "../../components/PieChart";
import FullInsight from "../../components/FullInsight";
import PersonalOp from "../../components/PersonalOp";
import BudgetTree from "../../components/BudgetTree";
import Timeline from "../../components/Timeline";
import Slider from "../../components/Slider";
import IncomeCard from "../../components/IncomeCard";
import MoneyCard from "../../components/MoneyCard";
import BudgetingCard from "../../components/BudgetingCard";
import SSCard from "../../components/SSCard";


export default function Homepage2() {
 const dataPie = [
   { id: 0, value: 25, label: 'Food', color: '#8CB497'},
   { id: 1, value: 10, label: 'Entertainment', color: '#7FBB7A' },
   { id: 2, value: 5, label: 'Savings', color: '#386F38' },
   { id: 3, value: 5, label: 'Clubs', color: '#75AE86' },
   { id: 4, value: 20, label: 'Transportation', color: '#90E482' },
   { id: 5, value: 35, label: 'Housing', color: '#96F996' },
 ];


 return (
   <div className="relative">
     <Sidebar/>
     <Profile/>
     <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-col items-center justify-center py-[116px]">
      <p className="text-center font-inter text-6xl font-semibold leading-[150%] text-[#3A4F38]">Welcome Back,<span className="text-[rgba(1,135,33,0.70)] text-center font-inter text-56l font-semibold leading-[150%]"> Jackson!</span></p>
      <div className="flex flex-col flex-wrap justify-center items-stretch h-[80%]">
          <div className="flex flex-row justify-center items-center">
            <p className="text-[#3A4F38] text-center font-inter text-[25px] font-semibold leading-[150%] pr-2">Just one day away, the weekend is in reach!</p>
            <Image src="/images/wallet.png" alt="Wallet" width={50} height={50}></Image>
          </div>

        <div className="flex flex-row justify-center gap-16 pl-36 pr-10 pt-[0px]">
          <Slider components={[
            <MoneyCard key="moneyCard" />,
            <IncomeCard key="incomeCard" />,
            <BudgetingCard key="budgetingCard" />,
            <SSCard key = "ssCard" />
          ]} />
          
         <BudgetTree/>
         <Timeline/>
         <div className="flex flex-col gap-10 pt-20">
           <div className="w-[209px] [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[20px] py-[16px] flex flex-col items-start justify-center">
             <p className="text-black font-inter text-[17px] font-semibold leading-[150%]">Daily Savings:</p>
             <p className="text-[rgba(1,135,33,0.70)] font-inter text-[45px] font-semibold leading-[150%]">$92.65</p> 
             
               <p className="justify-center text-black font-inter text-xs font-semibold leading-[150%]">(up&nbsp;
               <span className="w-[284.175px] h-[52px] justify-center text-[rgba(1,135,33,0.70)] font-inter text-xs font-semibold leading-[150%]">23.9%&nbsp;</span>from yesterday)</p>
             
           </div>
           <div className="w-[209] [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[20px] py-[16px] flex flex-col items-start justify-center">
             <p className="text-black font-inter text-[17px] font-semibold leading-[150%]">Weekly Savings:</p>
             <p className="text-[rgba(1,135,33,0.70)] font-inter text-[45px] font-semibold leading-[150%]">$351.07</p> 
             
               <p className="justify-center text-black font-inter text-xs font-semibold leading-[150%]">(up&nbsp;
               <span className="w-[284.175px] h-[52px] justify-center text-[rgba(1,135,33,0.70)] font-inter text-xs font-semibold leading-[150%]">11.0%&nbsp;</span>from last week)</p>
             
           </div>
          </div>
        </div>
       
       <div className="flex flex-row flex-wrap w-full items-center justify-center gap-[50px]">
       <div className="w-[447px] h-[441px] shrink-0 [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid gap-5 flex flex-col justify-start items-center pt-[20px]">
         <p className=" text-black text-center font-raleway text-[23px] font-bold leading-[150%]">Your Personalized Wallet</p>    
         <div className="relative justify-center items-center">
           <PieChart  data={dataPie}></PieChart>
           <Link href="/PersonalizedWallet">
           <Image src="/images/wallet.png" alt="Wallet" width={120} height={120} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></Image></Link>
         </div>
       </div>
        <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[30px] pt-[12px] pb-[26px] flex flex-col items-center justify-center h-[441px]">
           <p className=" text-black font-raleway text-[21px] font-bold leading-[150%] text-start w-full pb-1">Your Spending: Optimized</p>
           <PersonalOp></PersonalOp>
           <div className="border-1 border-[#D3D7EF] w-full self-center mt-5">
           </div>
           <div className="self-end mt-5 ">
             <FullInsight link={"/Optimization"}></FullInsight>
           </div>
         </div>
       </div>
       
       </div>
     </div>
   </div>
 );
}
