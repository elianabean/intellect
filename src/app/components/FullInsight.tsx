import Image from "next/image";
import Link from "next/link";
interface FullInsightProps {
    link: string;
  }

export default function FullInsight({ link }: FullInsightProps) {
    return (
        <div className="[background:#516958] rounded-[10px] flex flex-row items-center px-[15px] py-[10px] gap-[105px] w-fit">
            <p className="text-white font-inter text-base font-medium leading-[150%]">Last 1 month</p>
            <Link href={link}>
            <div className="flex flex-row items-center gap-[6px]">
                <p className="font-inter text-base font-semibold leading-[150%] text-white">Full Insight</p>
                <Image src="/icons/chevron-right.svg" alt="expand icon" width={16} height={16}></Image>
            </div>
            </Link>
            

        </div>
    );
  }
  