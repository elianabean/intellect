import Sidebar from "./components/Sidebar";
import Image from "next/image";
import Link from 'next/link'
import {Button} from "@nextui-org/react"

export default function Home() {
  return (
    <div className="relative">
      <Sidebar></Sidebar>
      <div className="bg-white flex flex-col z-10">
        <div className="flex flex-row justify-between items-center z-10 pl-36 absolute w-[100vw]" >
          <div className="ml-[102px] flex flex-row items-center">
            <Image
                src="/icons/sp-ai-blue.svg"
                alt="Intellect.ai logo"
                className="dark:invert"
                width={115}
                height={125}
              />
              <p className="text-[#588FEF] font-inter text-[50px] italic font-black leading-[150%]">Intellect.ai</p>
          </div>
          <div className="flex flex-row mr-[48px] justify-between space-x-[34px]">
            <Button as={Link} color="primary" href="#" variant="ghost" radius="full" className="px-[32px] py-[9px]">
            Log in
            </Button>
            <Button as={Link} color="primary" href="#" variant="solid" radius="full" className="px-[32px] py-[12px]">
            Sign up
            </Button>
          </div>
        </div>

        <div className="flex flex-col h-[100vh] justify-center ">
          <Image
              src="/images/ellipse-33.png"
              alt="background"
              className="absolute top-0 left-0 z-0"
              width={1609.309} height={921.176}
            />
            <Image
              src="/images/ellipse-34.png"
              alt="background"
              className="absolute top-0 right-0 z-0"
              width={1424.004} height={732.656}
            />
            
          <div className="z-10">
          <div className="flex flex-col ml-[306px]">
            <p className="w-[629px] shrink-0 text-[#588FEF] font-raleway text-[90px] font-bold leading-[70px]">
              AI-driven
            </p>
            <Image
              src="/images/vector.png"
              alt="Home"
              className="dark:invert"
              width={471}
              height={14}
            />
            <p className="w-[629px] shrink-0 text-black fpnt-raleway text-[85px] font-bold leading-[70px] capitalize">
            Financial
            Management
            </p>
          </div>   
          <div className="w-full flex flex-row justify-center mt-[150px]">
            <p className="w-[50%] shrink-0 text-black text-center font-montserrat text-2xl font-medium leading-[150%] ">Elevate your wealth management with our dynamic AI reinforcement. Receive instant feedback on payment strategies and maintain precise risk control with income management.
            Never face uncertainty with our instant financial guidance.</p>
          </div>
          </div>
          
        </div>

        <div className="flex flex-col h-[100vh] justify-center pl-36">
          <Image
              src="/images/ellipse-35.png"
              alt="background"
              className="absolute right-0 z-0"
              width={1391.834} height={1059.03}
            />
            
          <div className="z-10 flex flex-col items-start ml-[98px]">
            <p className="w-[505px] text-black font-montserrat text-[53px] font-normal leading-[50px]">Real-Time Responses</p>
            <p className="w-[606px] h-[184px] shrink-0  font-inter text-[25px] font-bold leading-[150%] text-black mt-[50px]">Record your valuating metrics and get immediate, <span className="text-[#538DFF]">AI-driven evaluations.</span> We measure you with traditional and AI integrated metrics, offering targeted feedback that helps you polish your financial decisions with clarity and authenticity.</p>
          </div>

          <Image
              src="/images/image-28.png"
              alt="chat"
              className="absolute right-[286px] z-0"
              width={674} height={708}
            />
            <Image
              src="/images/image-29.png"
              alt="chat"
              className="absolute right-[170px] z-0"
              width={351} height={223}
            />
          
        </div>
      </div>
    </div>
  );
}
