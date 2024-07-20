"use client";


import Profile from "././components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { User } from "@nextui-org/react";


export default function Forms() {
 const [FullName, setFullName] = useState("");
 const [Email, setEmail] = useState("");
 const [Gender, setGender] = useState("");
 const [UniversityName, setUniversityName] = useState("");
 const [DegreeProgram, setDegreeProgram] = useState("");
 const [YearOfGraduation, setYearOfGraduation] = useState("");

  
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setFullName(e.target.value);
 };

  
 return (
   <div className="relative">
     </Profile>
     <div style={{backgroundColor:"#3D513B",minHeight:"100vh",overflowY: "scroll" }}>
       <Image
         src="/images/ellipse-4.png"
         alt="background"
         className="absolute top-0 left-0"
         layout="fill"
       />
       <Image
         src="/images/ellipse-5.png"
         alt="background"
         className="absolute top-0 left-0"
         layout="fill"
       />
       <div className="h-full min-h-[100vh] ml-[250px] mr-[250px] mt-[100px] mb-[100px] flex flex-col flex-wrap justify-center gap-7">
         <div className="flex flex-row">
           <p className="text-white font-inter text-[30px]">1 &rarr; Your Information</p>
           <p className="text-[#C11D1D] font-inter text-[30px]">*</p>
         </div>
         <p className="text-white font-inter text-[23px]">Full Name</p>
         <input
             type="text"
             value={FullName}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Jane Doe"
         />
         <p className="text-white font-inter text-[23px]">Email</p>
         <input
             type="text"
             value={Email}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="example@gmail.com"
         />
         <p className="text-white font-inter text-[23px]">Gender</p>
         <input
             type="text"
             value={Gender}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Female"
         />
         <p className="text-white font-inter text-[23px]">University Name</p>
         <input
             type="text"
             value={UniversityName}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Carnegie Mellon University"
         />
         <p className="text-white font-inter text-[23px]">Degree Program</p>
         <input
             type="text"
             value={DegreeProgram}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Mechanical Engineering"
         />
         <p className="text-white font-inter text-[23px]">Year Of Graduation</p>
         <input
             type="text"
             value={YearOfGraduation}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="2027"
         />
         <div className="flex justify-start">
           <button className="bg-white text-black font-inter text-[24px] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
             OK
           </button>
         </div>
       </div>
     </div>
   </div>
 );
}
