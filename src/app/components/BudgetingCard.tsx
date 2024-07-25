import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function BudgetingCard() {
  return (
    <div className="bg-[#FBFBFF] shadow-md p-4 flex flex-row justify-between rounded-lg h-[220px] w-[436px] relative">
      <div className="flex flex-col items-center justify-center">
        <p className="flex flex-col justify-center shrink-0 text-[#3A4F38] text-center font-raleway text-[21px] font-bold leading-[150%]">Bring your thoughts to Life! Test out your Budgeting Scenarios</p>
      </div>

      <Link href="/whatif">
        <Image src="/icons/rightArrow.svg" height={27} width={20} alt="next arrow" className="absolute bottom-4 right-4"></Image>
      </Link>
    </div>
  )
}
