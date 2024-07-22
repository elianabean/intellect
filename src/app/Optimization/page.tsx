import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import EdOpCard from "../../components/OptimizationCard";
import MonthlyBudgetTracking from "../../components/MonthlyBudgetTracking";
import OptimizationOverview from "../../components/OptimizationOverview"
import Image from 'next/image';

export default function EducationalOptimization() {

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] w-[100vw] pl-[204px] pr-[60px] pt-10 flex flex-col flex-wrap justify-center items-center gap-12">
        <div className="flex flex-row flex-wrap w-full justify-between items-center">
          <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-col justify-center items-center w-[15%] h-[280.4px] ">
            <p className="text-[#516958] text-center font-inter text-[25px] font-extrabold leading-[150%]">Total Expense</p>
            <p className="text-[#516958] text-center font-inter text-[45px] font-extrabold leading-[150%]">$10.2K</p>
            <p className="text-[#888] text-center font-inter text-xl font-semibold leading-[150%]">Wallet Allocation</p>
            <p className="text-[#636161] text-center font-inter text-xl font-semibold leading-[150%]">Current Spending</p>
            <p className="text-[#636161] text-center font-inter text-xl font-semibold leading-[150%] mt-[34px]">Over/Under Budget</p>
        </div>
            <EdOpCard title="Housing" number={3.2} walletAlloc={34.32} currSpending={29.44} budgetDiff={2.07} sign="+"></EdOpCard>
            <EdOpCard title="Food" number={2.4} walletAlloc={27.32} currSpending={30.00} budgetDiff={2.07} sign="-"></EdOpCard>
            <EdOpCard title="Entertainment" number={1.8} walletAlloc={16.58} currSpending={35.40} budgetDiff={19.07} sign="-"></EdOpCard>
            <EdOpCard title="Transportation" number={1.6} walletAlloc={13.16} currSpending={10.44} budgetDiff={3.07} sign="+"></EdOpCard>
            <EdOpCard title="Clubs" number={1.2} walletAlloc={7.63} currSpending={7.44} budgetDiff={0.07} sign="+"></EdOpCard>
        </div>

        <div className="flex flex-row justify-between w-full z-50">
          <OptimizationOverview/>
        </div>

        <Image src="/images/ellipse-34.svg" width={1524.261} height={486.942} alt="background" className="absolute bottom-0"></Image>
      </div>
    </div>
  );
}
