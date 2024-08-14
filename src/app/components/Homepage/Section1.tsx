import Header from "./Header";
import {Input} from "@nextui-org/react";
import Image from "next/image";
import {Button} from "@nextui-org/react";

export default function Section1() {
    return (
        <div className="flex flex-col w-[100vw] min-h-[720px] h-full relative justify-start items-center">
            <Image src="/images/ellipse-98.png" alt="background" width={1064.12} height={1042.5} className="absolute z-0 top-[-174px] left-[-395px]"></Image>

            <Header></Header>

            <div className="z-10 relative flex flex-col justify-center items-center w-full h-full mt-[10%]">
                <Image src="/images/logoBig.png" alt="logo" width={180} height={180} className="-mb-8 mt-[10px]" data-aos="fade-up" ></Image>
                <p className="px-4 text-[#00A727] text-center font-inter text-[70px] italic font-black leading-[150%] bg-gradient-to-r from-[#00A727] to-[rgba(78,219,210,0.60)]  bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color: transparent] " data-aos="fade-up">Intellect AI</p>
                <p className="mt-[4px] mb-[96px] w-[413px] text-[#162126] text-center font-inter text-[35px] font-semibold leading-[150%] " data-aos="fade-up">The ultimate AI financial management helper</p>

                <div data-aos="fade-up" data-aos-offset="-200">
                    <Input type="email" variant="flat" placeholder="Your Email" labelPlacement="outside" startContent={<Image src="/icons/mailicon.png" alt="mail icon" width={25} height={25} className="w-[25px] h-[25px]"/>} classNames={{base: "w-fit ", inputWrapper: "w-[400px] h-[70px] [background:#FFF] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[30px] pr-0", input:"text-lg ml-2"}} endContent={<Button className="w-[136px] h-[70px] border shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[30px] border-solid border-[#ACFFAC] bg-white px-16"><p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%]" >Get in Touch</p></Button>} />
                </div>                
            </div>
            
        </div>
    );
}