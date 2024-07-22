import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import PieChart from "../../components/PieChart";
import Image from "next/image";
import {Progress} from "@nextui-org/react";

export default function Homepage2() {
    const dataPie = [
        { id: 0, value: 25, label: 'Food', color: '#8CB497'},
        { id: 1, value: 10, label: 'Entertainment', color: '#7FBB7A' },
        { id: 2, value: 5, label: 'Savings', color: '#386F38' },
        { id: 3, value: 5, label: 'Clubs', color: '#75AE86' },
        { id: 4, value: 20, label: 'Transportation', color: '#90E482' },
        { id: 5, value: 35, label: 'Housing', color: '#96F996' },
    ];

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-col items-center justify-center">
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[50px] h-[80%]">
        <div className="[background:rgba(252,251,255,0.80)] rounded-[30px] border-4 border-solid border-[#2A3A28] flex flex-col justify-start items-center py-[32px] px-[60px] w-[60%]">
            <div className="flex flex-col items-start">
                <p className="text-[#2A3A28] font-raleway text-3xl font-bold leading-[150%]">Personalized Ideal Wallet</p>
                <p className="text-[#2A3A28] font-raleway text-[25px] font-bold leading-[150%] w-[90%] mt-[16px]">After taking a look at your interests and expenses, I created your Ideal Wallet!</p>
            </div>
            
            <div className="relative">
                <PieChart data={dataPie}></PieChart>

                <Image src="/images/wallet.png" alt="Wallet" width={180} height={180} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></Image>
            </div>
            
        </div>

        <div className="[background:rgba(252,251,255,0.80)] rounded-[30px] border-4 border-solid border-[#2A3A28] flex flex-col justify-center items-start py-[32px] px-[60px] w-[30%] ">
            <p className="text-[#2A3A28] font-raleway text-[25px] font-bold leading-[150%] mb-[20px]">Here’s an HP Bar of each of your expenses. Please keep them alive!</p>
            
            <p className="text-[#516958] font-raleway text-[27px] font-semibold leading-[150%] mb-3">Food</p>
            <Progress value={75} size="lg" classNames={{indicator: "[background:#ACFFAC]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[27px] font-semibold leading-[150%] mb-3 mt-4 ">Entertainment</p>
            <Progress value={40} size="lg" classNames={{indicator: "[background:#FFE073]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[27px] font-semibold leading-[150%] mb-3 mt-4">Clubs</p>
            <Progress value={70} size="lg" classNames={{indicator: "[background:#FFE073]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[27px] font-semibold leading-[150%] mb-3 mt-4">Transportation</p>
            <Progress value={30} size="lg" classNames={{indicator: "[background:rgba(250,34,75,0.80)]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>

            <p className=" text-[#516958] font-raleway text-[27px] font-semibold leading-[150%] mb-3 mt-4">Housing</p>
            <Progress value={90} size="lg" classNames={{indicator: "[background:#ACFFAC]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>
            
        </div>
        </div>
      </div>
    </div>
  );
}
