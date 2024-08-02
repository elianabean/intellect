import {Progress} from "@nextui-org/react";

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
        <div className="[background:#FFFFFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-row justify-center items-center w-[80%] gap-[110px] py-[35px]">
            <div className="flex flex-col justify-center items-start">
                <p className="text-black font-raleway text-2xl font-bold leading-[150%] mb-9">Optimization Overview</p>


                <p className=" text-[#516958] font-inter text-lg font-medium leading-[150%] mb-3">Necessity</p>
                <Progress value={necessity} size="lg" classNames={{indicator: barColor(necessity), track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>

                <p className=" text-[#516958] font-inter text-lg font-medium leading-[150%]s mb-3 mt-4 ">School-Oriented</p>
                <Progress value={school} size="lg" classNames={{indicator: barColor(school), track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>

                <p className=" text-[#516958] font-inter text-lg font-medium leading-[150%] mb-3 mt-4">Discretionary Spending</p>
                <Progress value={discretionary} size="lg" classNames={{indicator: barColor(discretionary), track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[35px]", base:"w-[250px]"}} aria-label="percentage bar"/>
            </div>

            <div className="flex flex-col justify-start items-start w-[40%] border [background:#FFFFFF] rounded-[7px] border-solid border-[#2A3A28] p-6">
                <p className="text-[#516958] font-inter text-lg font-medium leading-[150%] mb-6">Optimization Strategies</p>
                <ul className="list-disc list-inside">
                    {strategiesError ? <p className="text-[#516958] font-inter text-lg font-black leading-[150%] mb-6">Failed to generate strategies!</p> : (strategies.length == 0 ? <img src={"https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/8/e/6/8e6f33126207a47f09f7c6ac5333057c1f45b5de.gif"} alt="Loading..." /> : strategies.map((element) => <li key={element} className="text-[#516958] font-inter text-[15px] font-medium leading-[150%] mb-4">{element}</li>))}
                </ul>
            </div>
        </div>
    );
}