import {Button} from "@nextui-org/react";
import Image from "next/image";

export default function Section6() {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative overflow-x-clip overflow-y-visible z-0">
            <div className="w-[2021px] h-[1059px] absolute">
                <Image src="/images/ellipse-100.png" alt="background" fill></Image>
            </div>

            <div className="w-[85vw] h-[694px] [background:#F8F9FC] rounded-[120px] flex flex-col justify-between items-center relative pt-[32px] overflow-hidden" >
                <p className="text-[#0B1215] text-center font-inter text-[70px] font-semibold leading-[150%] w-[500px]">Grow your <span className="bg-gradient-to-r from-[1%] from-[rgba(202,255,214,0.70)] via-[rgba(1,135,33,0.70)] via-[15%] to-[rgba(202,255,214,0.70)]  bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">money tree.</span></p>

                <Button className="py-[30px] px-[83px] [background:#00A727] rounded-[30px] "><p className="text-white text-center font-inter text-[25px] font-semibold leading-[150%] ">Book a Demo</p></Button>

                <Image src="/images/image-18.png" alt="Screenshot of Intellect Dashboard" width={796} height={566.83} className="shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4]"></Image>
            </div>
        </div>
    );
}