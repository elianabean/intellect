import Image from "next/image";

export default function Section2() {
    return (
        <div className="flex flex-row w-[100vw] h-[100vh] relative justify-center items-center [background:#10171B] rounded-[60px] z-10">
            <div className="flex flex-col justify-center items-start w-[40vw]  h-full pl-[84px]">
                <p className="w-[319px] text-white font-inter text-[55px] font-semibold leading-[150%]">GET AHEAD WITH <span className="pr-2 text-[#CAFFD6] font-inter text-[55px] italic font-black leading-[150%] bg-gradient-to-r from-[#CAFFD6] to-[#00A727] from-[26.73%] to-[78.74%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color: transparent]">Intellect</span></p>

                <p className="text-white font-inter text-lg font-medium leading-[150%] pt-[40px]">Intellect.AI is a wealth management platform built to help undergraduate students take control of their wallets. </p>
                <br></br>
                <p className="text-white font-inter text-lg font-medium leading-[150%]">Our deep-learning AI streamlines personal financial management, empowering students to make informed financial decisions.</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[60vw] h-full">
                <Image src="/images/image-10.png" alt="Screenshot of Intellect Dashboard" width={550} height={389.35} className="box-border shadow-[0px_0px_4px_10px_rgba(0,0,0,0.25)] rounded-[20px] border-[3px] border-solid border-[#ACFFAC] absolute top-[160px] left-[569px]"></Image>
                <Image src="/images/image-11.png" alt="Screenshot of Intellect Dashboard" width={200} height={299.18} className="shadow-[5px_6px_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] border-solid border-[#ACFFAC] border-[3px] absolute top-[325px] left-[975px]"></Image>
            </div>
        </div>
    );
}