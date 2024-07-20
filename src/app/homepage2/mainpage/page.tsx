import Sidebar from "../../components/Sidebar";
import Profile from "./../components/Profile";
import PieChart from "../../components/PieChart";
import Image from "next/image";
import FullInsight from "../../components/FullInsight";
import PersonalOp from "../../components/PersonalOp";
import BudgetTree from "../../components/BudgetTree";
import Timeline from "../../components/Timeline";


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
     </Sidebar>
     </Profile>
     <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-col items-center justify-center">
       <div className="flex flex-row flex-wrap justify-center items-stretch gap-[50px] h-[80%]">
         <div className="flex flex-row mt-[50px]">
           <p className="text-[#3A4F38] font-inter text-[96px]">Welcome Back, </p>
           <p className="text-[#309d48] font-inter text-[96px]">Jackson!</p>
         </div>
         <div className="flex flex-row">
           <p className="text-[#3A4F38] font-inter text-[40px]">See what progress you&apos;ve made.&nbsp;&nbsp;&nbsp;&nbsp;</p>
           <Image src="/images/wallet.png" alt="Wallet" width={90} height={90}></Image>
         </div>
         <div className="flex flex-row gap-20">
           <div className="flex flex-col gap-20">
             <div className="bg-white shadow-md p-4 flex flex-col justify-between rounded-lg h-full w-full">
               <p className="text-[#3A4F38] font-inter text-[35px]">Just one day away the weekend is in reach!</p>
               <Image src="/images/wallet.png" alt="Wallet" width={180} height={180} className="translate-x-[50%]"></Image>
             </div>
             <div className="bg-white shadow-md p-4 flex flex-col justify-between rounded-lg h-full w-full"> 
               <p className="text-black font-inter text-[35px]">Daily Savings:</p> 
               <p className="text-[#4baa64] font-inter text-[80px]">$92.65</p>  
               <div className="flex flex-row">
                 <p className="text-black font-inter text-[20px]">(up&nbsp;</p>
                 <p className="text-[#7dc090] font-inter text-[20px]">23.9%&nbsp;</p>
                 <p className="text-black font-inter text-[20px]">from yesterday)</p>
               </div>
             </div>
             <div className="bg-white shadow-md p-4 flex flex-col justify-between rounded-lg h-full w-full"> 
               <p className="text-black font-inter text-[35px]">Weekly Savings:</p> 
               <p className="text-[#4baa64] font-inter text-[80px]">$351.07</p>  
               <div className="flex flex-row">
                 <p className="text-black font-inter text-[20px]">(up&nbsp;</p>
                 <p className="text-[#7dc090] font-inter text-[20px]">11.0%&nbsp;</p>
                 <p className="text-black font-inter text-[20px]">from last week)</p>
               </div>
             </div>
           </div>
           <BudgetTree/>
           <Timeline/>
         </div>
         <div className="[background:rgba(252,251,255,0.80)] rounded-[30px] border-4 border-solid border-[#2A3A28] flex flex-col justify-start items-center py-[32px] px-[60px] w-[60%] gap-5">
           <p className="text-[#2A3A28] font-raleway text-3xl font-bold leading-[150%]">Your Personalized Wallet</p>     
           <div className="relative">
             <PieChart data={dataPie}></PieChart>
             <Image src="/images/wallet.png" alt="Wallet" width={180} height={180} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></Image>
           </div>
         </div>
         <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[50px] pt-[12px] pb-[46px] flex flex-col items-center justify-center">
           <p className=" text-black font-raleway text-[40px] font-bold leading-[150%] text-start w-full">Your Spending: Optimized</p>
           <PersonalOp></PersonalOp>
           <div className="border-1 border-[#D3D7EF] w-full self-center mt-8">
           </div>
           <div className="self-end mt-10 ">
             <FullInsight link={"/homepage2"}></FullInsight>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
