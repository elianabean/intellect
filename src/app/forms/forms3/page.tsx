"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";

export default function Forms() {
 const [HousingExpenses, setHousingExpenses] = useState("");
 const [HousingType, setHousingType] = useState("");
 const [FoodExpenses, setFoodExpenses] = useState("");
 const [Groceries, setGroceries] = useState("");
 const [TransportationExpenses, setTransportationExpenses] = useState("");
 const [InsuranceExpenses, setInsuranceExpenses] = useState("");
 const [InsuranceType, setInsuranceType] = useState("");

 const router = useRouter();

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   switch (name) {
     case 'HousingExpenses':
       setHousingExpenses(value);
       break;
     case 'HousingType':
       setHousingType(value);
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
     case 'InsuranceType':
       setInsuranceType(value);
       break;
     default:
       break;
   }
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const userData = {
     HousingExpenses,
     HousingType,
     FoodExpenses,
     Groceries,
     TransportationExpenses,
     InsuranceExpenses,
     InsuranceType
   };

   try {
     const response = await fetch('/api/insertExpensesDetails', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(userData),
     });

     if (response.ok) {
       console.log('Data successfully sent to backend');
       router.push('/forms/forms4'); // Redirect to the next page
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
            <div className="flex flex-col items-center h-screen w-[15vw] pt-[20vh]">
              <div className="mb-3">
                <h1 className="text-gray-500 text-[13px] font-inter">Your Info</h1>
              </div>
              <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="my-3">
                <h2 className="text-gray-500 text-[13px] font-inter">Income</h2>
              </div>
              <Image src="/images/Line 117.png" width={1} height={20} alt="line"></Image>
              <div className="bg-green-100 rounded-md py-3 px-12 my-3">
                <h2 className="text-black text-[13px] font-inter font-semibold">Expenses</h2>
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
          {/* forms */}
          <div className="flex flex-col gap-5 w-[50vw]">
              <div className="flex flex-row items-center">
                <p className="text-black text-[23px] font-medium font-['Inter'] leading-[45px]">3 &rarr; Your Expenses</p>
                <p className="text-[#c11d1d]/80 text-xl font-medium font-['Inter'] leading-[45px]">*</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for housing? (If any)</p>
                <input
                  type="text"
                  name="HousingExpenses"
                  value={HousingExpenses}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Do you live in the dorms, an apartment, or a house?</p>
                <input
                  type="text"
                  name="HousingType"
                  value={HousingType}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Dorms"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for food? (not counting school meal plans)</p>
                <input
                  type="text"
                  name="FoodExpenses"
                  value={FoodExpenses}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] order-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Where do you usually shop for groceries?</p>
                <input
                  type="text"
                  name="Groceries"
                  value={Groceries}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Costco"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly expenses for transportation? (car, gas, bus, subway)</p>
                <input
                  type="text"
                  name="TransportationExpenses"
                  value={TransportationExpenses}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">What are your monthly insurance costs?</p>
                <input
                  type="text"
                  name="InsuranceExpenses"
                  value={InsuranceExpenses}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="xxx$"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px]">Where do you get your insurance?</p>
                <input
                  type="text"
                  name="InsuranceType"
                  value={InsuranceType}
                  onChange={handleChange}
                  className="border-1 rounded-lg max-w-[45vw] border-rgba(172, 189, 201, 0.60) bg-white text-[#888888] text-[16px] font-normal px-5 font-['Inter'] leading-[45px] outline-none"
                  placeholder="Blue Cross Blue Shield"
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
