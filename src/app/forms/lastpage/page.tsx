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
      <Profile />
      <div style={{ backgroundColor: "#3D513B", minHeight: "100vh", overflowY: "scroll" }}>
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
            <div className="flex flex-row mb-4">
              <p className="text-white text-3xl font-medium font-['Inter'] leading-[45px]">5 &rarr; Preferences</p>
              <p className="text-[#c11d1d]/80 text-3xl font-medium font-['Inter'] leading-[45px]">*</p>
            </div>
            <div className="mb-9">
              <p className="w-[1118px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px] mb-6">
                Rank your Expenses based on importance to you (1 is most important, 4 is least important).
              </p>
              {expenseRankingAnswers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-3">
                  <input
                    type="number"
                    min="1"
                    max={expenseRankingAnswers.length}
                    value={expenseRankings[answer.id] || ''}
                    onChange={(e) => handleExpenseRankingChange(answer.id, parseInt(e.target.value))}
                    className="w-12 h-12 text-center border rounded-full mr-4 text-black"
                  />
                  <span className="text-white text-xl font-medium font-['Inter'] leading-[30px]">{answer.text}</span>
                </div>
              ))}
            </div>
            <div className="mb-9">
              <p className="w-[1118px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px] mb-6">
                Rank your Expenses based on importance to you (1 is most important, 4 is least important).
              </p>
              {secondExpenseRankingAnswers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-3">
                  <input
                    type="number"
                    max={secondExpenseRankingAnswers.length}
                    value={secondExpenseRankings[answer.id] || ''}
                    onChange={(e) => handleSecondRankingChange(answer.id, parseInt(e.target.value))}
                    className="w-12 h-12 text-center border rounded-full mr-4 text-black"
                  />
                  <span className="text-white text-xl font-medium font-['Inter'] leading-[30px]">{answer.text}</span>
                </div>
              ))}
            </div>
            <div className="mb-9">
              <p className="w-[1118px] h-[35px] text-white text-[23px] font-medium font-['Inter'] leading-[34.50px] mb-6">
                How willing are you to change your lifestyle to meet your savings goals?
              </p>
              {lifestyleAnswers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-3">
                  <input
                    type="radio"
                    name="lifestyle"
                    value={answer.id}
                    checked={lifestyle === answer.id.toString()}
                    onChange={handleLifestyle}
                    className="mr-4"
                  />
                  <span className="text-white text-xl font-medium font-['Inter'] leading-[30px]">{answer.text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-start mt-4">
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
