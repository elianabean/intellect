"use client";

import Profile from "../../components/Profile";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";

interface Answer {
  id: number;
  text: string;
}

export default function RankingForm() {
  const [expenseRankings, setExpenseRankings] = useState<{ [key: number]: number }>({});
  const [secondExpenseRankings, setSecondExpenseRankings] = useState<{ [key: number]: number }>({});
  const [lifestyle, setLifestyle] = useState<string>("");

  const router = useRouter();

  const handleExpenseRankingChange = (id: number, rank: number) => {
    setExpenseRankings({ ...expenseRankings, [id]: rank });
  };

  const handleSecondRankingChange = (id: number, rank: number) => {
    setSecondExpenseRankings({ ...secondExpenseRankings, [id]: rank });
  };

  const handleLifestyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLifestyle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { expenseRankings, secondExpenseRankings, lifestyle };

    try {
      const response = await fetch('/api/insertRanking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Data successfully sent to backend');
        router.push('/homepage2/mainpage'); // Redirect to homepage
      } else {
        console.error('Failed to send data to backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const expenseRankingAnswers: Answer[] = [
    { id: 1, text: 'Housing' },
    { id: 2, text: 'Food' },
    { id: 3, text: 'Transportation' },
    { id: 4, text: 'Insurance' },
  ];

  const secondExpenseRankingAnswers: Answer[] = [
    { id: 1, text: 'Extracurriculars' },
    { id: 2, text: 'Clothing' },
    { id: 3, text: 'Subscriptions' },
    { id: 4, text: 'Entertainment' },
    { id: 5, text: 'Extra Food' },
  ];

  const lifestyleAnswers: Answer[] = [
    { id: 1, text: 'Passive (I wouldn’t do much)' },
    { id: 2, text: 'Moderate (I’d cut down $10-$20, not more than that)' },
    { id: 3, text: 'Active (I’m willing to do what it takes, but not totally change my lifestyle)' },
    { id: 4, text: 'Aggressive (I’m the David Goggins of saving)' },
  ];

  return (
    <div className="relative">
      <Sidebar/>
      <Profile/>
      <div style={{backgroundColor:"#FAFAFA",minHeight:"100vh",overflowY: "scroll" }}>
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="flex flex-row h-full gap-10 ml-[300px] mr-[100px] min-h-[100vh] mt-[100px] mb-[100px] justify-start">
            <div className="flex flex-col items-center h-screen w-[15vw] pt-[22vh]">
              <div className="mb-3">
                <h1 className="text-gray-500 text-[13px] font-inter">Your Info</h1>
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
              <div className="bg-green-100 rounded-md py-3 px-10 my-3">
                <h2 className="text-black text-[13px] font-inter font-semibold">Preferences</h2>
              </div>
            </div>
          {/* forms */}
          <div className="flex flex-col gap-5 w-[50vw]">
              <div className="flex flex-row items-center">
                <p className="text-black text-[23px] font-medium font-['Inter'] leading-[45px]"> 5&rarr; Your Preferences</p>
                <p className="text-[#c11d1d]/80 text-xl font-medium font-['Inter'] leading-[45px]">*</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px] mb-3">Rank your Expenses based on importance to you (1 is most important, 4 is least important).</p>
                {expenseRankingAnswers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-3">
                  <input
                    type="number"
                    min="1"
                    max={expenseRankingAnswers.length}
                    value={expenseRankings[answer.id] || ''}
                    onChange={(e) => handleExpenseRankingChange(answer.id, parseInt(e.target.value))}
                    className="w-12 h-8 text-center border rounded-full mr-5 pl-3 text-black"
                  />
                  <span className="text-[#888888] text-[16px] font-medium font-['Inter'] leading-[30px]">{answer.text}</span>
              </div>
              ))}
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px] mb-3">Rank your Expenses based on importance to you (1 is most important, 4 is least important).</p>
                {secondExpenseRankingAnswers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-3">
                  <input
                    type="number"
                    max={secondExpenseRankingAnswers.length}
                    value={secondExpenseRankings[answer.id] || ''}
                    onChange={(e) => handleSecondRankingChange(answer.id, parseInt(e.target.value))}
                    className="w-12 h-8 text-center border rounded-full mr-5 pl-3 text-black"
                  />
                  <span className="text-[#888888] text-[16px] font-medium font-['Inter'] leading-[30px]">{answer.text}</span>
                </div>
              ))}
              </div>
              <div className="flex flex-col gap-1">
                <p className="max-w-[800px] h-[30px] pl-2 text-black text-[13px] font-medium font-['Inter'] leading-[34.50px] mb-3">How willing are you to change your lifestyle to meet your savings goals?</p>
                {lifestyleAnswers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-3">
                  <input
                    type="radio"
                    name="lifestyle"
                    value={answer.id}
                    checked={lifestyle === answer.id.toString()}
                    onChange={handleLifestyle}
                    className="mx-4 w-5 h-5"
                  />
                  <span className="text-[#888888] text-[16px] font-medium font-['Inter'] leading-[30px]">{answer.text}</span>
                </div>
              ))}
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
