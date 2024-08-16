import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-[100vw] bg-white flex flex-col pt-[70px] pb-[18px] px-[100px] justify-center items-center z-10">
            
            <div className="flex flex-row items-center justify-start w-full">
                <div className="w-[65px] h-[65px]  bg-[#00A727] rounded-full flex items-center justify-center mr-[18px] " data-aos="fade-up"><Image src="/icons/rightArrow2.svg" alt="right arrow" width={17} height={28}/></div>
                <p className="text-[#0B1215] font-inter text-3xl font-semibold leading-[150%] " data-aos="fade-up">Intellect.ai.team@gmail.com</p>
            </div>
            
            <div className="w-full h-px [background:#8A8A8A] mb-[28px] mt-[53px]"></div>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center items-center " >
                    <Link href="/">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60}/></Link>

                    <Link href="/"><p className="pr-2 text-[#00A727] font-inter text-[25px] italic font-black leading-[150%]" >Intellect</p></Link>
                </div>
                <p className="text-[#0B1215] font-inter text-sm font-normal leading-[150%]">©️ 2024 - Intellect.ai</p>
            </div>
        </div>
    );
}