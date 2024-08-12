
import Image from "next/image";

export default function Section5() {
    return (
        <div className="flex flex-row w-[100vw] h-[100vh] relative justify-center items-center bg-transparent overflow-y-visible overflow-x-clip">
            
            <div className="flex flex-col justify-center items-start w-[50vw]  h-full pl-[84px] z-10">
                <p className="text-[#0B1215] font-inter text-[35px] font-semibold leading-[150%] mb-[16px]">Debit Limit Prediction</p>

                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%]">Intellect AI introduces a tailored financial offering designed to modulate your debit spending in line with your savings ambitions. This service dynamically adjusts your allowable spending based on your expressed willingness to save, incorporating days of leeway to accommodate the realities of daily life.</p>
                <br></br>
                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%]">It provides personalized recommendations on how many days per week you should maintain consistent spending to achieve your goals. This adaptive approach is finely tuned to reflect your specific needs, values, and lifestyle, ensuring that the guidance you receive is both practical and aligned with your financial objectives.</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[50vw]  h-full z-10">
                <div className="flex flex-col justify-center items-center">
                    <Image src="/images/image-15.png" alt="Screenshot of Intellect Dashboard" width={350} height={224.17} className="shadow-[1px_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4] "></Image>
                    <Image src="/images/image-16.png" alt="Screenshot of Intellect Dashboard" width={350} height={224.17} className="shadow-[1px_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4] relative top-[-25px] left-[-85px]"></Image>
                </div>
            </div>
        </div>
    );
}