"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";

export default function Forms() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [UniversityName, setUniversityName] = useState("");
  const [DegreeProgram, setDegreeProgram] = useState("");
  const [YearOfGraduation, setYearOfGraduation] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'FullName':
        setFullName(value);
        break;
      case 'Email':
        setEmail(value);
        break;
      case 'Gender':
        setGender(value);
        break;
      case 'UniversityName':
        setUniversityName(value);
        break;
      case 'DegreeProgram':
        setDegreeProgram(value);
        break;
      case 'YearOfGraduation':
        setYearOfGraduation(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      FullName,
      Email,
      Gender,
      UniversityName,
      DegreeProgram,
      YearOfGraduation,
    };

    try {
      const response = await fetch('/api/insertUserInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Data successfully sent to backend');
        router.push('/forms/forms2'); // Redirect to the next page
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
          <div className="flex flex-row h-full gap-10 ml-[300px] mr-[100px] min-h-[100vh] mt-[100px] mb-[100px] justify-start">
            <div className="flex flex-col items-center h-screen w-[15vw] pt-[17vh]">
              <div className="bg-green-100 rounded-md py-3 px-14 mb-3">
                <h1 className=" text-black text-[13px] font-inter font-semibold">Your Info</h1>
              </div>
              <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="my-3">
                <h2 className="text-gray-500 text-[13px] font-inter">Income</h2>
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
            {/* //form */}
            <div className="flex flex-col gap-5 w-[50vw]">
              <div className="flex flex-row items-center">
                <p className="text-black text-[23px] font-medium font-['Inter'] leading-[45px]">1 &rarr; Your Information</p>
                <p className="text-[#c11d1d]/80 text-xl font-medium font-['Inter'] leading-[45px]">*</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Full Name</p>
                <input
                  type="text"
                  name="FullName"
                  value={FullName}
                  onChange={handleChange}
                  className="border-1 rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="First, Last"
              //idea for ux
                  // if value == null (placeholder ="first, last")
                  // else (placeholder = {value})
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Email</p>
                <input
                  type="text"
                  name="Email"
                  value={Email}
                  onChange={handleChange}
                  className="border-1 rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Name@email.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Gender</p>
                <input
                  type="text"
                  name="Gender"
                  value={Gender}
                  onChange={handleChange}
                  className="border-1 rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Male"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">University Name</p>
                <input
                  type="text"
                  name="UniversityName"
                  value={UniversityName}
                  onChange={handleChange}
                  className="border-1 rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="University of Location"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Degree Program</p>
                <input
                  type="text"
                  name="DegreeProgram"
                  value={DegreeProgram}
                  onChange={handleChange}
                  className="border-1 rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Program Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Graduation Year</p>
                <input
                  type="text"
                  name="YearOfGraduation"
                  value={YearOfGraduation}
                  onChange={handleChange}
                  className="border-1 rounded-lg border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Year"
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
