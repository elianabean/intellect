'use client'

import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const currentPath = usePathname();

    return (
      <div className="3xl:w-36 h-full bg-[#516958] flex flex-col items-center justify-start fixed left-0 px-[20px] pt-[67px] z-50">
        <Link href="/homepage2/mainpage">
        <p className="text-[#C4D8C4] font-inter text-xl italic font-black leading-[150%]">Intellect.ai</p>
        </Link>

        <Link href="/homepage2/mainpage" >
        <Image
              src={currentPath === "/" || currentPath === "/homepage2" ? "/icons/iconly-bold-home-color.svg" : "/icons/iconly-bold-home.svg"}
              alt="Home"
              className="dark:invert mt-[108px] "
              width={20}
              height={20}
            />
        </Link>
        
        <Link href="/Optimization">
        <Image
              src={currentPath === "/chat" ? "/icons/sp-ai-blue.svg" : "/icons/sp-ai.svg"}
              alt="Chat"
              className="dark:invert mt-[40px] border-0"
              width={currentPath === "/chat" ? 59 : 59}
              height={currentPath === "/chat" ? 36 : 36}
            />
        </Link>
        <Link href="/forms/intropage">
        <Image
              src={currentPath === "/settings" ? "/icons/iconly-bold-setting-color.svg" : "/icons/iconly-bold-setting.svg"}
              alt="Settings"
              className="dark:invert mt-[40px]"
              width={24}
              height={24}
            />
        </Link>
      </div>
    );
  }
  