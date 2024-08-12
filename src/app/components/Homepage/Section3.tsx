
import Image from "next/image";

export default function Section3() {
    return (
        <div className="flex flex-row w-[100vw] h-[100vh] relative justify-center items-center bg-transparent overflow-y-visible overflow-x-clip">
            <div className="absolute top-[-125px] left-[-147px] w-[1719.11px] h-[1170.04px] z-0">
                <Image src="/images/ellipse-99.png" alt="background" fill />
            </div>
            
            <div className="flex flex-col justify-center items-start w-[40vw]  h-full pl-[84px] z-10">
                <p className="text-[#0B1215] font-inter text-[35px] font-semibold leading-[150%] mb-[16px]">AI Wallet Allocation</p>

                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%]">Intellect.AI leverages deep-learning models, honed with authentic student data, to meticulously assess user spending through traditional and fintech-based valuations.</p>
                <br></br>
                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%]">This advanced approach enables our AI to craft a personalized wallet, helping users take back control of their finances. By aligning with individual values and providing a holistic view of spending, it 
                guides users towards achieving financial responsibility.</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[60vw]  h-full z-10">
                <div className="flex flex-col justify-center items-center relative">
                    <Image src="/images/image-12.png" alt="Screenshot of Intellect Dashboard" width={600} height={360.13} className="shadow-[1px_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4] "></Image>
                    <Image src="/images/image-13.png" alt="Screenshot of Intellect Dashboard" width={200} height={208.32} className="shadow-[1px_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4] absolute bottom-[-45px] left-[-45px]"></Image>
                </div>
            </div>
        </div>
    );
}