import Image from "next/image";
import { NavLink } from "react-router-dom";
import Link from 'next/link'

export default function Sidebar() {
    return (
      <div className="3xl:w-36 h-full bg-white flex flex-col items-center justify-start fixed left-0 px-[20px] pt-[67px] z-10">
        <p className="text-[#588FEF] font-inter text-xl italic font-black leading-[150%]">Intellect.ai</p>
        
        <Link href="/">
        <Image
              src="/icons/iconly-bold-home.svg"
              alt="Home"
              className="dark:invert mt-[108px]"
              width={20}
              height={20}
            />
        </Link>
        
        <Link href="/chat">
        <Image
              src="/icons/sp-ai.svg"
              alt="Chat"
              className="dark:invert mt-[40px] border-0"
              width={63}
              height={43}
            />
        </Link>
        <Link href="/settings">
        <Image
              src="/icons/iconly-bold-setting.svg"
              alt="Settings"
              className="dark:invert mt-[40px]"
              width={24}
              height={24}
            />
        </Link>
      </div>
    );
  }
  