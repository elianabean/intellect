"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";

export default function Forms() {
  const [Income, setIncome] = useState("");
  const [Aid, setAid] = useState("");
  const [Scholarships, setScholarships] = useState("");
  const [JobType, setJobType] = useState("");
  const [ParentalSupport, setParentalSupport] = useState("");
  const [Tuition, setTuition] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'Income':
        setIncome(value);
        break;
      case 'Aid':
        setAid(value);
        break;
      case 'Scholarships':
        setScholarships(value);
        break;
      case 'JobType':
        setJobType(value);
        break;
      case 'ParentalSupport':
        setParentalSupport(value);
        break;
      case 'Tuition':
        setTuition(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      Income,
      Aid,
      Scholarships,
      JobType,
      ParentalSupport,
      Tuition
    };

    try {
      const response = await fetch('/api/insertFinancialDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });


      if (response.ok) {
        console.log('Data successfully sent to backend');
        router.push('/forms/forms3'); // Redirect to the next page
      } else {
        console.error('Failed to send data to backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative">
      <Sidebar/>
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
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="h-full min-h-[100vh] ml-[250px] mr-[250px] mt-[100px] mb-[100px] flex flex-col flex-wrap justify-center gap-7">
            <div className="flex flex-row">
              <p className="text-white text-3xl font-medium font-['Inter'] leading-[45px]">2 &rarr; Your Income</p>
              <p className="text-[#c11d1d]/80 text-3xl font-medium font-['Inter'] leading-[45px]">*</p>
            </div>
            <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What is your Monthly Income? (number only)</p>
            <input
              type="text"
              name="Income"
              value={Income}
              onChange={handleChange}
              className=" border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="xxx$"
            />
            <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">How much did you receive in total from Financial Aid packages? (If any)</p>
            <input
              type="text"
              name="Aid"
              value={Aid}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="xxx$"
            />
            <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Scholarships</p>
            <input
              type="text"
              name="Scholarships"
              value={Scholarships}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="xxx$"
            />
            <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What is your Job type? (Full-time/Part-time/Internship)</p>
            <input
              type="text"
              name="JobType"
              value={JobType}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="Full-time"
            />
            <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">How much parental support (any allowance/money from parents) do you receive monthly?</p>
            <input
              type="text"
              name="ParentalSupport"
              value={ParentalSupport}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="xxx$"
            />
            <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What is your yearly tuition?</p>
            <input
              type="text"
              name="Tuition"
              value={Tuition}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="xxx$"
            />
            <div className="flex justify-start">
              <button type="submit" className="bg-white text-black font-inter text-[24px] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                OK
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
