import Sidebar from "./components/Sidebar";
import Image from "next/image";
import Link from 'next/link'
import {Button} from "@nextui-org/react"
import Model from "./components/3dModel/Scene";

export default function Home() {
  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <div className="absolute right-0 top-0 h-[100vh] flex flex-col justify-start z-50">
        <Model></Model>
      </div>

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

        <div className="flex flex-col h-[100vh] justify-center relative">
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
            <div className="absolute flex flex-col ml-[20%]  top-[30%] translate-y-[-30%]">
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
            <div className="w-full flex flex-row justify-center mt-[20%]">
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

        <div className="flex flex-col h-[100vh] justify-start pl-36 relative w-[100vw] items-end ">
          <div className="absolute bottom-[504px] w-[calc(100%-144px)] h-[238px]">
              <Image src="/images/rectangle-3174.svg" alt="background" fill style={{objectFit: "cover"}}/>
          </div>
          <div className="absolute bottom-0 w-[calc(100%-144px)] h-[504px] ">
              <Image src="/images/rectangle-3175.svg" alt="background" fill style={{objectFit: "cover"}} />
          </div>
            
          <Image
              src="/images/image-31.png"
              alt="ai credit valuations"
              className="absolute left-[242px] top-[154px] z-0"
              width={541} height={339}
            />
            <Image
              src="/images/image-30.png"
              alt="ai credit valuations"
              className="absolute left-[416px] top-[386px] z-0"
              width={544} height={350}
            />

          <div className="z-10 flex flex-col items-start mr-[256px] mt-[128px]">
            <p className="w-[571.359px] shrink-0 text-black font-montserrat text-5xl font-normal leading-[50px] capitalize"><span className="text-[#538DFF] font-semibold">AI Credit valuations</span> That Leaves No Room for Guesswork
            </p>

            <p className="w-[529px] text-black font-inter text-[23px] font-medium leading-[150%] mt-[50px]">Our generative AI doesn't just answer questions — Intellect.ai analyses user inefficiencies to evaluate trends and inform users on opportunities they may overlook. This reduces asymmetric information and allows users to make efficient and informed decisions.</p>
            
          </div>          
        </div>

        <div className="flex flex-col h-[100vh] justify-center pl-[242px] relative">
          <p className="w-[638px] text-black font-montserrat text-5xl font-semibold leading-[50px] capitalize">Say Goodbye to <span className="text-[#538DFF]">Risky & Inefficient</span> Money Management </p>
          <Image
              src="/images/ellipse-35.png"
              alt="background"
              className="absolute right-0 z-0"
              width={1391.834} height={1059.03}
            />
            
          <div className="z-10 flex flex-col items-start">
            <p className="w-[600px] text-black font-inter text-[22px] font-semibold leading-[150%] mb-[32px] mt-[50px]">While individuals may keep their finances afloat, building lasting wealth demands a deeper level of insight.</p>
            <p className="w-[600px] text-black font-inter text-[22px] font-semibold leading-[150%] mb-[32px]">Intellect.ai <span className="text-[#538DFF]">transcends</span> conventional financial advice. It provides an personalized analysis encompassing your account's strengths, areas for improvement, tailored investment strategies, budgeting tactics, and more.</p>
            <p className="w-[600px] text-black font-inter text-[22px] font-bold leading-[150%]">Empower Your Finances: Not Just Managing, but Mastering</p>

            <Link href="/chat"><Button variant="shadow" radius="full" color="primary" className="font-inter px-[20px] py-[24px] [background:linear-gradient(5deg,#588FEF_26.3%,#8FD7FF_86.4%)] mt-[32px]" endContent={<Image
              src="/icons/lightning-bolt.svg"
              alt="background"
              className="fill-white"
              width={20} height={20}
            />}>Continue Generation</Button></Link>
            
          </div>

          <div className="absolute top-1/2 translate-y-[-50%] right-[147px] ">
            <Image
              src="/images/image-34.png"
              alt="chat"
              width={892} height={501}
            />
            <Image
              src="/images/image-35.png"
              alt="chat" className="absolute top-[350px] right-[50px]"
              width={427} height={280}
            />
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
