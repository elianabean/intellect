import React from "react";

export default function MoneyCard() {
  return (
    <div className="bg-white shadow-md p-4 flex flex-row justify-between rounded-lg h-[200px] w-[400px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#4daa65] font-inter text-[70px]">+$12,409</p>  
        <p className="text-black font-inter text-[24px]">You gained back 14 months of financial freedom</p>  
      </div>
    </div>
  )
}
