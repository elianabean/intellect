import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import BudgetCard from "../components/BudgetCard";
import SavingsChart from "../components/SavingsChart";
import BudgetTree from "../components/BudgetTree";
import BalanceProjection from "../components/BalanceProjection";

export default function WhatIf() {
  return (
    <div className="relative">
      <Sidebar />
      <Profile />
      <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-row flex-wrap justify-center items-center pt-[60px]">
        <div className="grid lg:grid-cols-7 lg:grid-rows-4 w-full gap-4 px-8">
          <div className="lg:col-span-2 h-36">
            <BudgetCard
              title={"Housing"}
              text1={"800"}
              text2={"-$200"}
              text3={"-20%"}
              color={"text-green-600"}
            />
          </div>
          <div className="lg:col-span-3 lg:row-span-2">
            <SavingsChart />
          </div>
          <div className="lg:col-span-2 lg:row-span-4">
            <BudgetTree />
          </div>
          <div className="lg:col-span-2">
            <BudgetCard
              title={"Housing"}
              text1={"800"}
              text2={"-$200"}
              text3={"-20%"}
              color={"text-green-600"}
            />
          </div>
          <div className="lg:col-span-2">
            <BudgetCard
              title={"Housing"}
              text1={"800"}
              text2={"-$200"}
              text3={"-20%"}
              color={"text-green-600"}
            />
          </div>
          <div className="lg:col-span-3 lg:row-span-2">
            <BalanceProjection />
          </div>
          <div className="lg:col-span-2">
            <BudgetCard
              title={"Housing"}
              text1={"800"}
              text2={"-$200"}
              text3={"-20%"}
              color={"text-green-600"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
