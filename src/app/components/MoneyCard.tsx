import React from "react";

export default function MoneyCard() {
  return (
    <div className="bg-[#FBFBFF] shadow-md p-4 flex flex-row justify-between rounded-lg h-[220px] w-[436px] relative">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[rgba(1,135,33,0.70)] text-center font-inter text-[70px] font-semibold leading-[150%]">+$12,409</p>  
        <p className="flex flex-col justify-center shrink-0 text-[#1E1E1E] text-center font-inter text-2xl font-semibold leading-[150%]">You gained back 14 months of financial freedom</p>  
      </div>
    </div>
  )
}
