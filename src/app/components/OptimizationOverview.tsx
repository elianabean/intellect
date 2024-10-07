import {Spinner} from "@nextui-org/react";
import {Progress} from "@nextui-org/react";
import Image from "next/image";


interface OverviewProps {
    setOptimizationFunction: any;
    necessity: number;
    school: number;
    discretionary: number;
    strategies: string[];
    strategiesError: boolean;
}

export default function OptimizationOverview({ setOptimizationFunction, necessity, school, discretionary, strategies, strategiesError }: OverviewProps) {
    const regenerate = () => {
        setOptimizationFunction();
    }

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
                    <button className="text-[16px]" onClick={regenerate}>Regenerate</button>
                    <span className="mt-1"><Image src="images/lightning-bolt.svg" alt="LightingingBolt" width={20} height={20}></Image></span>
                </div>
                {/* needs functionality */}
                
            </div>
        
        <div className="[background:#FFFFFF] border-1 rounded-lg border-[#C4D8C4] flex flex-col w-[35vw] py-6">
            <div className="flex justify-start items-start">
                <p className="text-[#888] font-inter text-[15px] font-medium leading-[150%] mb-6 pl-8">Optimization Strategies:</p>
            </div>
            {/* <div className="flex w-[40%] [background:#FFFFFF] p-6">  </div> */}     
            <div className="flex justify-center w-[100%]">
                <ul className="list-disc list-inside px-8 mt-3">
                    {strategiesError ? <p className="text-[#516958] font-inter text-lg font-black leading-[150%] mb-6">Failed to generate strategies!</p> : (strategies.length == 0 ? <Spinner color="secondary" size="lg" className="pt-24" classNames={{wrapper: "w-50"}}/> : strategies.map((element) => <li key={element} className="text-[#516958] font-inter text-[15px] font-medium leading-[150%] mb-4">{element}</li>))}
                 </ul>
            </div>
        </div>
    </div>
    );
}