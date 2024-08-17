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
      <div style={{backgroundColor:"#FAFAFA",minHeight:"100vh",overflowY: "auto" }}>
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="flex flex-row h-full gap-10 ml-[25vw] mr-[100px] min-h-[100vh] mt-[100px] mb-[100px] justify-start">
            <div className="flex flex-col items-center h-screen w-[15vw] pt-[18vh]">
              <div className="mb-3">
                <h1 className="text-gray-500 text-[13px] font-inter">Your Info</h1>
              </div>
              <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="bg-green-100 rounded-md py-3 px-14 my-3">
                <h2 className="text-black text-[13px] font-inter font-semibold">Income</h2>
              </div>
              <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="my-3">
                <h2 className="text-gray-500 text-[13px] font-inter">Expenses</h2>
              </div>
              <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="my-3">
                <h2 className="text-gray-500 text-[13px] font-inter">Wants</h2>
               </div>
               <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="my-3">
                <h2 className="text-gray-500 text-[13px] font-inter">Preferences</h2>
              </div>
            </div>
          {/* //forms */}
          <div className="flex flex-col gap-5 w-[50vw]">
              <div className="flex flex-row items-center">
                <p className="text-black text-[23px] font-medium font-['Inter'] leading-[45px]">2 &rarr; Your Income</p>
                <p className="text-[#c11d1d]/80 text-xl font-medium font-['Inter'] leading-[45px]">*</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What is your Monthly Income? (number only)</p>
                <input
                  type="text"
                  name="Income"
                  value={Income}
                  onChange={handleChange}
                  className="border-1 max-w-[45vw] rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">How much did you receive in total from Financial Aid packages? (If any)</p>
                <input
                  type="text"
                  name="Aid"
                  value={Aid}
                  onChange={handleChange}
                  className="border-1 max-w-[45vw] rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Scholarships</p>
                <input
                  type="text"
                  name="Scholarships"
                  value={Scholarships}
                  onChange={handleChange}
                  className="border-1 max-w-[45vw] rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What is your Job type? (Full-time/Part-time/Internship)</p>
                <input
                  type="text"
                  name="JobType"
                  value={JobType}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Full-time"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">How much parental support (any allowance/money from parents) do you receive monthly?</p>
                <input
                  type="text"
                  name="ParentalSupport"
                  value={ParentalSupport}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What is your yearly tuition?</p>
                <input
                  type="text"
                  name="Tuition"
                  value={Tuition}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex justify-start mt-6">
                <button type="submit" className="hover:bg-[#04bf30bd] bg-gray-100 hover:text-white text-black text-[14px] font-normal font-inter py-1 px-8 rounded-[20px]">
                  Save
                </button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
