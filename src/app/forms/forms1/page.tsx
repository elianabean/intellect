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
  const [Birthday, setBirthday] = useState("");

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
      case 'Birthday':
        setBirthday(value);
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
      Birthday
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
              <p className="text-white text-3xl font-medium font-['Inter'] leading-[45px]">1 &rarr; Your Information</p>
              <p className="text-[#c11d1d]/80 text-3xl font-medium font-['Inter'] leading-[45px]">*</p>
            </div>
            <p className="max-w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Full Name</p>
            <input
              type="text"
              name="FullName"
              value={FullName}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="Jane Doe"
            />
            <p className="max-w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Email</p>
            <input
              type="text"
              name="Email"
              value={Email}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="example@gmail.com"
            />
            <p className="max-w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Gender</p>
            <input
              type="text"
              name="Gender"
              value={Gender}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="Female"
            />
            <p className="max-w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">University Name</p>
            <input
              type="text"
              name="UniversityName"
              value={UniversityName}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="Carnegie Mellon University"
            />
            <p className="max-w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Degree Program</p>
            <input
              type="text"
              name="DegreeProgram"
              value={DegreeProgram}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="Mechanical Engineering"
            />
            <p className="max-w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Year Of Graduation</p>
            <input
              type="text"
              name="YearOfGraduation"
              value={YearOfGraduation}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
              placeholder="2027"
            />
            <p className="text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Birthday</p>
            <input
              type="date"
              name="Birthday"
              value={Birthday}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] text-3xl font-medium font-['Inter'] leading-[45px] bg-transparent outline-none"
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
