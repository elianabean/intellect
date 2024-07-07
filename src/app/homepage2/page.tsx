import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FullInsight from "../components/FullInsight";
import Image from "next/image";
import BarChart from '../components/BarChart';
import PieChart from "../components/PieChart";

export default function Chat() {
    const data = [
        { id: 0, value: 25, label: 'Food', color: '#73937C'},
        { id: 1, value: 10, label: 'Dining and Entertainment', color: '#3A4F38' },
        { id: 2, value: 5, label: 'Savings', color: '#515251' },
        { id: 3, value: 5, label: 'Clubs', color: '#888' },
        { id: 4, value: 20, label: 'Transportation', color: '#E4E5E4' },
        { id: 5, value: 35, label: 'Housing', color: '#C4D8C4' },
    ];

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-row justify-center items-center pt-[116px]">
        <div className="flex flex-col gap-8">
            {/* 1 */}
            <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[28px] py-[12px]">
                <p className="font-inter text-[50px] font-bold leading-[150%] "><span className="text-[#82A88D] text-[75px]">15%</span> from saving <span className="text-[#82A88D] text-[75px]">10K</span></p>
            </div>

            {/* 2 */}
            <div className="[background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid flex flex-col py-[24px] pl-[40px] items-center justify-center">
                <div className="flex flex-row items-center gap-[8px] self-start">
                    <p className="text-black font-raleway text-[40px] font-bold leading-[150%]">Value Under Management</p>
                    <Image src="/images/handCaution.png" alt="hand caution icon" width={39} height={39} className="object-contain"/>
                </div>
                <p className="text-black font-inter text-[70px] font-semibold leading-[150%] self-start">$3,410.33</p>
                <div className="flex flex-row flex-wrap gap-28 self-start">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-[8px]">
                        <p className="text-black font-raleway text-2xl font-bold leading-[150%]">Today's Change</p>
                        <Image src="/images/handCaution.png" alt="hand caution icon" width={17} height={17} className="object-contain"/>
                        </div>
                        <p className="text-[rgba(1,135,33,0.70)] font-inter text-[50px] font-semibold leading-[150%]">+$142.29</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-[8px]">
                        <p className="text-black font-raleway text-2xl font-bold leading-[150%]">Annual Return</p>
                        <Image src="/images/handCaution.png" alt="hand caution icon" width={17} height={17} className="object-contain"/>
                        </div>
                        <p className="text-[rgba(1,135,33,0.70)] font-inter text-[50px] font-semibold leading-[150%]">232.43%</p>
                    </div>

                </div>
                <div className="border-1 border-[#D3D7EF] w-[95%] -ml-[40px] self-center"></div>

                <div className="self-end mt-4 mr-[25px]">
                    <FullInsight></FullInsight>
                </div>
            </div>

            {/* 3 */}
            <div className="[background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid flex flex-col py-[24px] pl-[40px] items-center justify-center gap-[6px]">
                <p className="flex-col justify-center text-black font-raleway text-[40px] font-bold leading-[150%]">Debt Tracker</p>
                <div className="border [background:#C4D8C4] rounded-[10px] border-solid border-[#516958] flex flex-col justify-center items-center py-[28px] px-[86px] w-fit">
                    <p className="text-[rgba(193,29,29,0.80)] text-center font-inter text-[70px] font-semibold leading-[150%]  p-0 m-0">$12,409</p>
                    <p className="text-black text-center font-inter text-2xl font-semibold leading-[150%] w-[55%] p-0 m-0">You are projected to pay this off in <span className="text-[rgba(193,29,29,0.80)]">2038</span> (in <span className="text-[rgba(193,29,29,0.80)]">4 years</span>). Here’s how we can <span className="underline">help</span>.</p>
                </div>
            </div>

            {/* 4 */}
            <div className="[background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid flex flex-col py-[40px] items-center justify-center gap-[6px]">
                <p className="text-black text-center font-raleway text-[40px] font-bold leading-[150%]">Total Monthly Expenses</p>
                <PieChart data={data}></PieChart>
            </div>

        </div>

        {/*Column 2 */}
        <div>
             {/* 1 */}
             <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[28px] py-[12px]">
                <p className="text-black text-center font-raleway text-[40px] font-bold leading-[150%]">Total Monthly Expenses</p>
                <BarChart></BarChart>
            </div>
        </div>
      </div>
    </div>
  );
}
