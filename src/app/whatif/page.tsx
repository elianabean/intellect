import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

export default function WhatIf() {
  return (
    <div className="relative">
      <Sidebar />
      <Profile />
      <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-row flex-wrap justify-center items-center pt-[84px]">
        <div className="grid lg:grid-cols-7 lg:grid-rows-4 w-full gap-4">
          <div className="lg:col-span-2 h-36"></div>
          <div className="lg:col-span-3 lg:row-span-2">2</div>
          <div className="lg:col-span-2 lg:row-span-4">3</div>
          <div className="lg:col-span-2">4</div>
          <div className="lg:col-span-2">5</div>
          <div className="lg:col-span-3 lg:row-span-2">6</div>
          <div className="lg:col-span-2">7</div>
        </div>
      </div>
    </div>
  );
}
