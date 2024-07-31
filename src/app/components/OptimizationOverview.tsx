import {Progress} from "@nextui-org/react";

export default function OptimizationOverview() {
    return (
        <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-row justify-center items-center w-[80%] gap-[110px] py-[35px]">
            <div className="flex flex-col justify-center items-start">
                <p className="text-black font-raleway text-2xl font-bold leading-[150%] mb-9">Optimization Overview</p>

                <p className=" text-[#516958] font-inter text-lg font-medium leading-[150%] mb-2">Necessity</p>
                <Progress value={50} size="lg" classNames={{indicator: "[background:#ACFFAC]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[30px]", base:"w-[250px]"}} aria-label="percentage bar"/>

                <p className=" text-[#516958] font-inter text-lg font-medium leading-[150%] mb-2 mt-5 ">Debt Obligations</p>
                <Progress value={20} size="lg" classNames={{indicator: "[background:rgba(250,34,75,0.80)]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[30px]", base:"w-[250px]"}} aria-label="percentage bar"/>

                <p className=" text-[#516958] font-inter text-lg font-medium leading-[150%] mb-3 mt-5">Discretionary Spending</p>
                <Progress value={70} size="lg" classNames={{indicator: "[background:#FFE073]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[30px]", base:"w-[250px]"}} aria-label="percentage bar"/>
            </div>

            <div className="flex flex-col justify-start items-start w-[40%] border [background:#FBFBFF] rounded-[7px] border-solid border-[#2A3A28] p-6">
                <p className="text-[#516958] font-inter text-lg font-medium leading-[150%] mb-6">Optimization Strategies</p>
                <ul className="list-disc list-inside">
                    <li className="text-[#516958] font-inter text-[15px] font-medium leading-[150%] mb-4">Food: Plan major purchases around back-to-school sales, when many retailers offer significant discounts on laptops, tablets, and accessories.</li>
                    <li className="text-[#516958] font-inter text-[15px] font-medium leading-[150%] mb-4">Entertainment: Check if UMich has partnerships with tech companies that offer discounts or free software to students.</li>
                    <li className="text-[#516958] font-inter text-[15px] font-medium leading-[150%]">Amazon Prime Student: Sign up for Amazon Prime Student, which offers benefits like free shipping, streaming, and exclusive discounts.</li>
                </ul>
            </div>
        </div>
    );
}