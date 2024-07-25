"use client";

import Profile from "../../components/Profile";
import Image from "next/image";

export default function Forms() {
  return (
    <div className="relative">
      <Profile/>
      <div style={{backgroundColor:"#3D513B",minHeight:"100vh",overflowY: "scroll" }}>
        <Image
          src="/images/ellipse-4.png"
          alt="background"
          className="absolute top-0 left-0 z-0"
          layout="fill"
        />
        <Image
          src="/images/ellipse-5.png"
          alt="background"
          className="absolute top-0 left-0 z-0"
          layout="fill"
        />
        <div className="h-full min-h-[100vh] mt-[100px] mb-[100px] flex flex-col flex-wrap justify-center items-center gap-7 z-10">
          <div className="w-[389px] h-[139px] text-[#c4d8c4] text-[70px] font-black font-['Inter'] leading-[105px]">Intellect.ai
          </div>
          <div className="w-[1197px] h-[479px] text-center text-white text-3xl font-semibold font-['Inter'] leading-[45px]">Our goal is to gain a comprehensive understanding of your financial habits and lifestyle as a college student. <br/><br/>By exploring various aspects of your expenses, income sources, and financial management practices, we aim to paint a detailed picture of your daily life and financial health. <br/><br/>This information will help us better understand the unique challenges and opportunities you face, allowing us to provide more tailored support and advice.
          </div>
          <button type="submit" className="bg-white text-black font-inter text-[24px] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
            Lets Go!
          </button>
        </div>
      </div>
    </div>
  );
}
