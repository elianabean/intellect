"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";

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
             <p className="text-white font-inter text-[30px]">4 &rarr; Your Wants</p>
             <p className="text-[#C11D1D] font-inter text-[30px]">*</p>
           </div>
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for extracurriculars or fraternities?</p>
           <input
             type="text"
             name="ECExpenses"
             value={ECExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for clothing?</p>
           <input
             type="text"
             name="ClothingExpenses"
             value={ClothingExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Where do you purchase clothing often?</p>
           <input
             type="text"
             name="ClothingType"
             value={ClothingType}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Nike"
           />
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly subscriptions costs?</p>
           <input
             type="text"
             name="SubscriptionExpenses"
             value={SubscriptionExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What subscriptions are you paying for?</p>
           <input
             type="text"
             name="SubscriptionType"
             value={SubscriptionType}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Netflix, Spotify"
           />
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for entertainment (Going out, drinks, movies, etc)?</p>
           <input
             type="text"
             name="EntertainmentExpenses"
             value={EntertainmentExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="max-w-[80vw] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What do you usually do for entertainment (Go out, drinks, movies)?</p>
           <input
             type="text"
             name="EntertainmentType"
             value={EntertainmentType}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Go out"
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
