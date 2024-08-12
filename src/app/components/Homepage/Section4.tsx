
import Image from "next/image";

export default function Section3() {
    return (
        <div className="flex flex-row w-[100vw] h-[100vh] relative justify-center items-center overflow-hidden z-10">
            <div className="flex flex-col justify-center items-start w-[60vw] h-full pl-[84px] ">
                <div className="flex flex-col justify-center items-center relative">
                    <Image src="/images/image-14.png" alt="Screenshot of Intellect Dashboard" width={600} height={473.849} className="shadow-[-3px_0px_4px_2px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#C4D8C4]"></Image>
                    <Image src="/images/foodCard.png" alt="Screenshot of Intellect Dashboard" width={133} height={159} className=" absolute top-[10%] right-[-100px]"></Image>
                    <Image src="/images/housingCard.png" alt="Screenshot of Intellect Dashboard" width={133} height={159} className="absolute bottom-[10%] right-[-80px]"></Image>
                </div>
            </div>
            <div className="flex flex-col justify-center items-end w-[40vw]  h-full pr-[84px]">
                <p className="text-[#0B1215] font-inter text-[35px] font-semibold leading-[150%] w-[400px] text-right mb-[16px]">Expense Optimization</p>

                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%] text-right w-[400px]">By aligning with your unique wallet allocation goals, our AI models offer personalized financial advice to adjust your financial behaviour and provide an in-depth analysis of your current financial health.</p>
                <br></br>
                <p className="text-[#0B1215] font-inter text-lg font-normal leading-[150%] text-right w-[400px]">This enables you to understand precisely how your spending decisions impact your overall financial objectives, empowering you to make smarter, data-driven choices.</p>
            </div>
        </div>
    );
}