"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Forms() {
 const [ECExpenses, setECExpenses] = useState("");
 const [ClothingExpenses, setClothingExpenses] = useState("");
 const [Clothing, setClothing] = useState("");
 const [SubscriptionExpenses, setSubscriptionExpenses] = useState("");
 const [Subscriptions, setSubscriptions] = useState("");
 const [EntertainmentExpenses, setEntertainmentExpenses] = useState("");
 const [Entertainment, setEntertainment] = useState("");

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
     case 'Clothing':
       setClothing(value);
       break;
     case 'SubscriptionExpenses':
       setSubscriptionExpenses(value);
       break;
     case 'Subscriptions':
       setSubscriptions(value);
       break;
     case 'EntertainmentExpenses':
       setEntertainmentExpenses(value);
       break;
     case 'Entertainment':
       setEntertainment(value);
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
     Clothing,
     SubscriptionExpenses,
     Subscriptions,
     EntertainmentExpenses,
     Entertainment
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
     <Profile/>
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
       <form onSubmit={handleSubmit}>
         <div className="h-full min-h-[100vh] ml-[250px] mr-[250px] mt-[100px] mb-[100px] flex flex-col flex-wrap justify-center gap-7">
           <div className="flex flex-row">
             <p className="text-white font-inter text-[30px]">4 &rarr; Your Wants</p>
             <p className="text-[#C11D1D] font-inter text-[30px]">*</p>
           </div>
           <p className="w-[800px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for extracurriculars or fraternities?</p>
           <input
             type="text"
             name="ECExpenses"
             value={ECExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[525px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for clothing?</p>
           <input
             type="text"
             name="ClothingExpenses"
             value={ClothingExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[971px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Where do you purchase clothing often?</p>
           <input
             type="text"
             name="Clothing"
             value={Clothing}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Nike"
           />
           <p className="w-[501px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly subscriptions costs?</p>
           <input
             type="text"
             name="SubscriptionExpenses"
             value={SubscriptionExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[625px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What subscriptions are you paying for?</p>
           <input
             type="text"
             name="Subscriptions"
             value={Subscriptions}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Netflix, Spotify"
           />
           <p className="w-[1002px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for entertainment (Going out, drinks, movies, etc)?</p>
           <input
             type="text"
             name="EntertainmentExpenses"
             value={EntertainmentExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[850px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What do you usually do for entertainment (Go out, drinks, movies)?</p>
           <input
             type="text"
             name="Entertainment"
             value={Entertainment}
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
