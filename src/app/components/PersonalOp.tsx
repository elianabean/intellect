import {Progress} from "@nextui-org/react";

export default function PersonalOp() {
    return (
        <div className="[background:#C4D8C4] rounded-[10px] border-[3px] border-solid border-[#516958] grid grid-rows-5 grid-flow-col px-[48px] gap-x-[60px] gap-y-[66px] py-[50px]">
            <p className="text-black text-center font-inter text-[27px] font-semibold leading-[150%]">Food</p>
            <p className="text-black text-center font-inter text-[27px] font-semibold leading-[150%]">Housing</p>
            <p className="text-black text-center font-inter text-[27px] font-semibold leading-[150%]">Transporation</p>
            <p className="text-black text-center font-inter text-[27px] font-semibold leading-[150%]">Extracurriculars</p>
            <p className="text-black text-center font-inter text-[27px] font-semibold leading-[150%]">Subscriptions</p>
            <Progress value={50} size="lg" classNames={{indicator: "[background:rgba(79,204,113,0.80)]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[50px]", base:"w-[350px]"}} aria-label="percentage bar"/>
            <Progress value={80} size="lg" classNames={{indicator: "[background:#00E4AE]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[50px]", base:"w-[350px]"}} aria-label="percentage bar"/>
            <Progress value={15} size="lg" classNames={{indicator: "[background:rgba(220,0,42,0.80)]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[50px]", base:"w-[350px]"}} aria-label="percentage bar"/>
            <Progress value={60} size="lg" classNames={{indicator: "[background:#FFDD65]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[50px]", base:"w-[350px]"}} aria-label="percentage bar"/>
            <Progress value={95} size="lg" classNames={{indicator: "[background:#4388FF]", track:"bg-[#EBEEFF] border-[2px] border-solid border-[#516958] h-[50px]", base:"w-[350px]"}} aria-label="percentage bar"/>
        </div>
    );
}