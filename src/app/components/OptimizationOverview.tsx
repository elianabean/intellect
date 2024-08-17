import {Progress} from "@nextui-org/react";
import Image from "next/image";

interface OverviewProps {
    necessity: number;
    school: number;
    discretionary: number;
    strategies: string[];
    strategiesError: boolean;
}

export default function OptimizationOverview({ necessity, school, discretionary, strategies, strategiesError }: OverviewProps) {
    let barColor = (percent: number) => {
        if (percent <= 25) return "[background:rgba(250,34,75,0.80)]";
        else if (percent <= 70) return "[background:#FFE073]";
        return "[background:#ACFFAC]";
    }

    return (
    <div className="flex flex-row gap-14 justify-center pb-10">
        <div className="flex flex-col justify-center items-start">
                <p className="text-[#515251] font-inter text-[22px] font-bold leading-[150%] mb-9">Optimization Overview</p>


                <p className=" text-[#515251] font-inter text-lg font-medium leading-[150%] mb-2">Necessity</p>
                <Progress value={necessity} size="lg" classNames={{indicator: barColor(necessity), track:"bg-[#FEFEFF] border-[1px] border-solid border-[#C4D8C4] h-[25px]", base:"w-[275px]"}} aria-label="percentage bar"/>

                <p className=" text-[#515251] font-inter text-lg font-medium leading-[150%]s mb-2 mt-4 ">School-Oriented</p>
                <Progress value={school} size="lg" classNames={{indicator: barColor(school), track:"bg-[#FEFEFF] border-[1px] border-solid border-[#C4D8C4] h-[25px]", base:"w-[275px]"}} aria-label="percentage bar"/>

                <p className=" text-[#515251] font-inter text-lg font-medium leading-[150%] mb-2 mt-4">Discretionary Spending</p>
                <Progress value={discretionary} size="lg" classNames={{indicator: barColor(discretionary), track:"bg-[#FEFEFF] border-[1px] border-solid border-[#C4D8C4] h-[25px]", base:"w-[275px]"}} aria-label="percentage bar"/>

                <div className=" flex flex-row gap-2 mt-9 font-inter bg-[rgba(4,191,48,0.70)] px-[80px] justify-center py-1 rounded-lg ">
                    <button className="text-[16px]">Regenerate</button>
                    <span className="mt-1"><Image src="images/lightning-bolt.svg" alt="LightingingBolt" width={20} height={20}></Image></span>
                </div>
                {/* needs functionality */}
                
            </div>
        
        <div className="[background:#FFFFFF] border-1 rounded-lg border-[#C4D8C4] flex flex-row justify-center items-center w-[50%] gap-[110px] py-[15px]">
            <div className="flex flex-col justify-start items-start w-[40%] [background:#FFFFFF] p-6">
                <p className="text-[#888] justify-start font-inter text-[15px] font-medium leading-[150%] w-[45vw] mb-6">Optimization Strategies</p>
                <ul className="list-disc list-inside">
                    {strategiesError ? <p className="text-[#516958] font-inter text-lg font-black leading-[150%] mb-6">Failed to generate strategies!</p> : (strategies.length == 0 ? <img src={"https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/8/e/6/8e6f33126207a47f09f7c6ac5333057c1f45b5de.gif"} alt="Loading..." /> : strategies.map((element) => <li key={element} className="text-[#516958] font-inter text-[15px] font-medium leading-[150%] mb-4">{element}</li>))}
                </ul>
            </div>
        </div>
    </div>
    );
}