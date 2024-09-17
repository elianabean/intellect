'use client'

import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const currentPath = usePathname();

    return (
      <div className="w-[23vw] h-full bg-[#FFF] flex flex-col gap-[1vh] items-start justify-start fixed left-0 pl-5 pr-6 pt-[5vh] z-50">
        <Link href="/">
        <p className="text-[#00A727] font-inter text-[30px] italic font-black ml-5 leading-[150%]">Intellect</p>
        </Link>
        <Link href="/PersonalizedWallet" >
        <div className={currentPath === "/" || currentPath === "/PersonalizedWallet" ? "bg-[#E0FFE0] text-black pr-[75px] rounded-xl flex flex-row items-center justify-start mt-[5vh]" : "flex flex-row items-center text-[#8A8A8A] justify-start mt-[5vh]"}>
          <Image
              src={currentPath === "/" || currentPath === "/PersonalizedWallet" ? "/images/simple-wallet-icon-vector-green.svg" : "/images/simple-wallet-icon-vector-grey.svg"}
              alt="PersonalizedWallet"
              className=""
              width={55}
              height={55}
            />
            
          <span className="font-inter text-[16px] font-semibold leading-[150%]">Personal Wallet</span>
          </div>
        </Link>
        <Link href="/Optimization">
        <div className={currentPath === "/Optimization" ? "bg-[#E0FFE0] pr-[105px] text-black py-3 rounded-xl flex flex-row items-center justify-start mt-[3vh]" : "flex flex-row text-[#8A8A8A] items-center justify-start mt-[5vh]"}>
        <Image
              src={currentPath === "/Optimization" ? "/images/Intellect-icon-green.svg" : "/images/Intellect-icon-grey.svg"}
              alt="IntellectAI"
              className="dark:invert"
              width={60}
              height={60}
            />
          <span className="font-inter text-[16px] font-semibold leading-[150%]">Intellect AI</span>
          </div>
        </Link>
        <Link href="/DebitLimitPrediction">
        <div className={currentPath === "/DebitLimitPrediction" ? "bg-[#E0FFE0] text-black pr-5 py-1 rounded-xl flex flex-row gap-3 items-center justify-start mt-[5vh]" : " flex flex-row text-[#8A8A8A] gap-2 items-center justify-start mt-[5vh]"}>
        <Image
              src={currentPath === "/DebitLimitPrediction" ? "/images/Debit-icon-green.svg" : "/images/Debit-icon-grey.svg"}
              alt="DebitLimitPrediction"
              className="dark:invert"
              width={50}
              height={50}
            />
          <span className="font-inter text-[16px] font-semibold leading-[150%]">Debit Limit Prediction</span>
        </div>
        </Link>
        <Link href="/forms/forms1">
        <div className={currentPath === "/forms/forms1" || currentPath === "/forms/forms2" || currentPath === "/forms/forms3" || currentPath === "/forms/forms4" || currentPath === "/forms/lastpage" ? "bg-[#E0FFE0] text-black pr-7 pl-2 py-4 rounded-xl flex flex-row gap-5 items-center justify-start mt-[3vh]" : "text-[#8A8A8A] pl-2 flex flex-row gap-5 items-center justify-start mt-[6vh]"}>
        <Image
              src={currentPath === "/forms/forms1" || currentPath === "/forms/forms2" || currentPath === "/forms/forms3" || currentPath === "/forms/forms4" || currentPath === "/forms/lastpage" ? "/images/Setting-icon-green.svg" : "/images/Setting-icon-grey.svg"}
              alt="Settings"
              className="dark:invert"
              width={31}
              height={31}
            />
          <span className="font-inter text-[16px] font-semibold leading-[150%]">Personal Information</span>
        </div>
        </Link>

        <Image src={"/images/askAlumni.png"} alt="ask alumni" className="mt-[50%] ml-2" width={100} height={100}></Image>
      </div>
    );
  }
  