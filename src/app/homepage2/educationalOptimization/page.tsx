import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import EdOpCard from "../../components/EdOpCard";
import MonthlyBudgetTracking from "../../components/MonthlyBudgetTracking";
import OptimizationOverview from "../../components/OptimizationOverview"
import Image from 'next/image';

export default function EducationalOptimization() {

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] w-[100vw] pl-[204px] pr-[60px] flex flex-col flex-wrap justify-center items-center gap-12">
        <div className="flex flex-row flex-wrap w-full justify-between items-center">
          <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-col justify-center items-center py-12 w-[15%] h-[231px] ">
            <p className="text-[#516958] text-center font-inter text-[25px] font-extrabold leading-[150%]">Total Expense</p>
            <p className="text-[#516958] text-center font-inter text-[45px] font-extrabold leading-[150%]">$60.2K</p>
        </div>
            <EdOpCard title="Meal Plan" number={3.2} percent={5.32}></EdOpCard>
            <EdOpCard title="Course Material" number={2} percent={3.32}></EdOpCard>
            <EdOpCard title="Health Insurance" number={16} percent={26.58}></EdOpCard>
            <EdOpCard title="Student Loan" number={32} percent={53.16}></EdOpCard>
            <EdOpCard title="Technology" number={7} percent={11.63}></EdOpCard>
        </div>

        <div className="flex flex-row justify-between w-full z-50">
          <MonthlyBudgetTracking/>
          <OptimizationOverview/>
        </div>

        <p className="text-center font-inter text-[50px] font-medium leading-[150%] z-50">YOU HAVE SAVED <span className="font-extrabold text-[rgba(1,135,33,0.70)]">$1,200</span> ON EDUCATIONAL EXPENSES</p>
        <Image src="/images/ellipse-40.png" width={1396} height={342} alt="background" className="absolute bottom-0"></Image>
      </div>
    </div>
  );
}
