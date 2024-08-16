"use client";

import Sidebar from "@/app/components/Sidebar";
import Profile from "../../components/Profile";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Forms() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/forms/forms1'); // Replace with the actual path you want to redirect to
  };

  return (
    <div className="relative">
      <Sidebar/>
      <Profile/>
      <div style={{backgroundColor:"#3D513B",minHeight:"100vh", minWidth:"100vw", overflowY: "scroll"}}>

        <div className="h-full min-h-[100vh] mt-[100px] mb-[100px] pl-[80px] pr-[20px] flex flex-col flex-wrap justify-center items-center gap-7 z-10">
          <div className="text-[#c4d8c4] text-[70px] font-black font-['Inter'] leading-[105px]">Intellect.ai</div>
            <div className=" py-10 max-w-[70vw] text-center text-white text-2xl font-semibold font-['Inter'] leading-[45px]">Our goal is to gain a comprehensive understanding of your financial habits and lifestyle as a college student. <br/><br/>By exploring various aspects of your expenses, income sources, and financial management practices, we aim to paint a detailed picture of your daily life and financial health. <br/><br/>This information will help us better understand the unique challenges and opportunities you face, allowing us to provide more tailored support and advice.
            </div>
          <button type="submit" onClick={handleClick} className="bg-white text-black font-inter text-[24px] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
            Lets Go!
          </button>
        </div>
      </div>
    </div>
  );
}
