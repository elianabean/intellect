
import Image from "next/image";

export default function Section3() {
    return (
        <div className="flex flex-row w-[100vw] h-[100vh] relative justify-center items-center bg-transparent overflow-y-visible overflow-x-clip">
            <div className="absolute top-[-125px] left-[-147px] w-[1719.11px] h-[1170.04px] z-0">
                <Image src="/images/ellipse-99.png" alt="background" fill />
            </div>
            
            <div className="flex flex-col justify-center items-start w-[40vw]  h-full pl-[84px] z-10">
                <p className="text-[#0B1215] font-inter text-[35px] font-semibold leading-[150%] mb-[16px] " data-aos="fade-up">AI Wallet Allocation</p>

                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%] " data-aos="fade-up">Intellect.AI uses deep-learning models trained on real student data to accurately assess user spending through both traditional and fintech valuations. Our AI then creates a personalized wallet that empowers users to regain control of their finances.</p>
                <br></br>
                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%] " data-aos="fade-up">By aligning with individual values and providing a holistic view of spending, we 
                guide users towards achieving financial responsibility.</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[60vw]  h-full z-10">
                <div className="flex flex-col justify-center items-center relative">
                    <Image src="/images/image-12.png" alt="Screenshot of Intellect Dashboard" width={600} height={360.13} className="shadow-[1px_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4]" data-aos="fade-up"></Image>
                    <Image src="/images/image-13.png" alt="Screenshot of Intellect Dashboard" width={200} height={208.32} className="shadow-[1px_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4] absolute bottom-[-45px] left-[-45px] " data-aos="fade-up"></Image>
                </div>
            </div>
        </div>
    );
}