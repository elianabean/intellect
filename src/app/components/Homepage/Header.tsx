import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="absolute top-[20px] z-20 w-[90%] h-20 border [background:#FFF] shadow-[0px_4px_40px_0px_rgba(224,255,224,0.70)_inset,0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-[70px] border-solid border-[#C4D8C4] mt-[40px] flex flex-row justify-between pr-[80px]  pl-[24px]" data-aos="fade-in">
            
                <div className="flex flex-row items-center justify-center ">
                    <Link href="/">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60}></Image></Link>

                    <Link href="/"><p className=" text-[#00A727] font-inter text-[25px] italic font-black leading-[150%]">Intellect</p></Link>
                    
                </div>
            
            <div className="flex flex-row items-center justify-center gap-[77px]">
                <Link href="https://calendly.com/intellect-ai-team/30min"><p className="text-gray-500 font-inter text-xl font-medium leading-[150%]">Book a Demo</p></Link>
                <Link href="/PersonalizedWallet" className="text-gray-500 font-inter text-xl font-medium leading-[150%]">Intellect Dashboard</Link>
            </div>
            
        </div>
    );
}