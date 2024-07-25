"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Forms() {
 const [HousingExpenses, setHousingExpenses] = useState("");
 const [Housing, setHousing] = useState("");
 const [FoodExpenses, setFoodExpenses] = useState("");
 const [Groceries, setGroceries] = useState("");
 const [TransportationExpenses, setTransportationExpenses] = useState("");
 const [InsuranceExpenses, setInsuranceExpenses] = useState("");
 const [Insurance, setInsurance] = useState("");

 const router = useRouter();

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   switch (name) {
     case 'HousingExpenses':
       setHousingExpenses(value);
       break;
     case 'Housing':
       setHousing(value);
       break;
     case 'FoodExpenses':
       setFoodExpenses(value);
       break;
     case 'Groceries':
       setGroceries(value);
       break;
     case 'TransportationExpenses':
       setTransportationExpenses(value);
       break;
     case 'InsuranceExpenses':
       setInsuranceExpenses(value);
       break;
     case 'Insurance':
       setInsurance(value);
       break;
     default:
       break;
   }
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const userData = {
     HousingExpenses,
     Housing,
     FoodExpenses,
     Groceries,
     TransportationExpenses,
     InsuranceExpenses,
     Insurance
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
       <div className="h-full min-h-[100vh] ml-[250px] mr-[250px] mt-[100px] mb-[100px] flex flex-col flex-wrap justify-center gap-7">
         <div className="flex flex-row">
           <p className="text-white font-inter text-[30px]">3 &rarr; Your Expenses</p>
           <p className="text-[#C11D1D] font-inter text-[30px]">*</p>
         </div>
         <form onSubmit={handleSubmit}>
           <p className="w-[637px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for housing? (If any)</p>
           <input
             type="text"
             name="HousingExpenses"
             value={HousingExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[660px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Do you live in the dorms, an apartment, or a house?</p>
           <input
             type="text"
             name="Housing"
             value={Housing}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Dorms"
           />
           <p className="w-[850px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for food? (not counting school meal plans)</p>
           <input
             type="text"
             name="FoodExpenses"
             value={FoodExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[850px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Where do you usually shop for groceries?</p>
           <input
             type="text"
             name="Groceries"
             value={Groceries}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Kroger"
           />
           <p className="w-[859px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for transportation? (car, gas, bus, subway)</p>
           <input
             type="text"
             name="TransportationExpenses"
             value={TransportationExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[637px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly insurance costs?</p>
           <input
             type="text"
             name="InsuranceExpenses"
             value={InsuranceExpenses}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="xxx$"
           />
           <p className="w-[454px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px]">Where do you get your insurance?</p>
           <input
             type="text"
             name="Insurance"
             value={Insurance}
             onChange={handleChange}
             className="border-b-2 border-[#888888] text-[#888888] font-inter text-[30px] bg-transparent outline-none"
             placeholder="Blue Cross Blue Shield"
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
