import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function IncomeCard() {
  return (
    <div className="bg-[#FBFBFF] shadow-md p-4 flex flex-row justify-between rounded-lg h-[220px] w-[436px] relative">
      <div className="flex flex-col items-center justify-center w-full">
        <p className="flex flex-col justify-center text-[#3A4F38] text-center font-raleway text-xl font-bold leading-[150%]">Your Financial Battle: Income VS Expenses</p>  
      </div>

      <Link href="/IncomeExpenses">
        <Image src="/icons/rightArrow.svg" height={27} width={20} alt="next arrow" className="absolute bottom-4 right-4"></Image>
      </Link>
    </div>
  )
}
