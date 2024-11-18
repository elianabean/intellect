"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";
import Cookies from "js-cookie";
import Link from 'next/link'

export default function Forms() {
 const [ECExpenses, setECExpenses] = useState("");
 const [ClothingExpenses, setClothingExpenses] = useState("");
 const [ClothingType, setClothingType] = useState("");
 const [SubscriptionExpenses, setSubscriptionExpenses] = useState("");
 const [SubscriptionType, setSubscriptionType] = useState("");
 const [EntertainmentExpenses, setEntertainmentExpenses] = useState("");
 const [EntertainmentType, setEntertainmentType] = useState("");

 const router = useRouter();

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   switch (name) {
     case 'ECExpenses':
       setECExpenses(value);
       break;
     case 'ClothingExpenses':
       setClothingExpenses(value);
       break;
     case 'ClothingType':
       setClothingType(value);
       break;
     case 'SubscriptionExpenses':
       setSubscriptionExpenses(value);
       break;
     case 'SubscriptionType':
       setSubscriptionType(value);
       break;
     case 'EntertainmentExpenses':
       setEntertainmentExpenses(value);
       break;
     case 'EntertainmentType':
       setEntertainmentType(value);
       break;
     default:
       break;
   }
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const userData = {
     ECExpenses,
     ClothingExpenses,
     ClothingType,
     SubscriptionExpenses,
     SubscriptionType,
     EntertainmentExpenses,
     EntertainmentType
   };

   try {
     const response = await fetch('/api/insertWantsDetails', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'jwt-token': Cookies.get("access_token") as string
       },
       body: JSON.stringify(userData),
     });

     if (response.ok) {
       console.log('Data successfully sent to backend');
       router.push('/forms/lastpage'); // Redirect to the next page
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
        <div className="flex flex-col items-center h-screen w-[15vw] pt-[22vh]">
          <div className="mb-3">
            <Link href="/forms/forms1"><h1 className="text-gray-500 text-[13px] font-inter">Your Info</h1></Link>
          </div>
          <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
          <div className="my-3">
            <Link href="/forms/forms2"><h2 className="text-gray-500 text-[13px] font-inter">Income</h2></Link>
          </div>
          <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
          <div className="my-3">
            <Link href="/forms/forms3"><h2 className="text-gray-500 text-[13px] font-inter">Expenses</h2></Link>
          </div>
          <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
          <div className="bg-green-100 rounded-md py-3 px-14 my-3">
            <Link href="/forms/forms4"><h2 className="text-black text-[13px] font-inter font-semibold">Wants</h2></Link>
          </div>
          <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
          <div className="my-3">
            <Link href="/forms/lastpage"><h2 className="text-gray-500 text-[13px] font-inter">Preferences</h2></Link>
          </div>
        </div>
      {/* forms */}
      <div className="flex flex-col gap-5 w-[50vw]">
          <div className="flex flex-row items-center">
            <p className="text-black text-[23px] font-medium font-['Inter'] leading-[45px]">4 &rarr; Your Wants</p>
            <p className="text-[#c11d1d]/80 text-xl font-medium font-['Inter'] leading-[45px]">*</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for extracurriculars or fraternities?</p>
            <input
              type="text"
              name="ECExpenses"
              value={ECExpenses}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="xxx$"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for clothing?</p>
            <input
              type="text"
              name="ClothingExpenses"
              value={ClothingExpenses}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="xxx$"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Where do you purchase clothing often?</p>
            <input
              type="text"
              name="ClothingType"
              value={ClothingType}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="Abercrombie & Fitch, Nike"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly subscriptions costs?</p>
            <input
              type="text"
              name="SubscriptionExpenses"
              value={SubscriptionExpenses}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="xxx$"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What subscriptions are you paying for?</p>
            <input
              type="text"
              name="SubscriptionType"
              value={SubscriptionType}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="Netflix, Spotify"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for entertainment (Going out, drinks, movies, etc)?</p>
            <input
              type="text"
              name="EntertainmentExpenses"
              value={EntertainmentExpenses}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="xxx$"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What do you usually do for entertainment (Go out, drinks, movies)?</p>
            <input
              type="text"
              name="EntertainmentType"
              value={EntertainmentType}
              onChange={handleChange}
              className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
              placeholder="Go Out"
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
