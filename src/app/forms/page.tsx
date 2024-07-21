"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Forms() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [UniversityName, setUniversityName] = useState("");
  const [DegreeProgram, setDegreeProgram] = useState("");
  const [YearOfGraduation, setYearOfGraduation] = useState("");
  const [Birthday, setBirthday] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
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
        router.push('/nextPage'); // Redirect to the next page
      } else {
        console.error('Failed to send data to backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative">
      <div style={{ backgroundColor: "#3D513B", minHeight: "100vh", overflowY: "scroll" }}>
        <div className="h-full min-h-[100vh] ml-[250px] mr-[250px] mt-[100px] mb-[100px] flex flex-col flex-wrap justify-center gap-7">
          <div className="flex flex-row">
            <p className="text-white font-inter text-[30px]">1 &rarr; Your Information</p>
            <p className="text-[#C11D1D] font-inter text-[30px]">*</p>
          </div>
          <form onSubmit={handleSubmit}>
            <p className="text-white font-inter text-[23px]">Full Name</p>
            <input
              type="text"
              name="FullName"
              value={FullName}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
              placeholder="Jane Doe"
            />
            <p className="text-white font-inter text-[23px]">Email</p>
            <input
              type="text"
              name="Email"
              value={Email}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
              placeholder="example@gmail.com"
            />
            <p className="text-white font-inter text-[23px]">Gender</p>
            <input
              type="text"
              name="Gender"
              value={Gender}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
              placeholder="Female"
            />
            <p className="text-white font-inter text-[23px]">University Name</p>
            <input
              type="text"
              name="UniversityName"
              value={UniversityName}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
              placeholder="Carnegie Mellon University"
            />
            <p className="text-white font-inter text-[23px]">Degree Program</p>
            <input
              type="text"
              name="DegreeProgram"
              value={DegreeProgram}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
              placeholder="Mechanical Engineering"
            />
            <p className="text-white font-inter text-[23px]">Year Of Graduation</p>
            <input
              type="text"
              name="YearOfGraduation"
              value={YearOfGraduation}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
              placeholder="2027"
            />
            <p className="text-white font-inter text-[23px]">Birthday</p>
            <input
              type="date"
              name="Birthday"
              value={Birthday}
              onChange={handleChange}
              className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
            />
            <div className="flex justify-start">
              <button type="submit" className="bg-white text-black font-inter text-[24px] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
