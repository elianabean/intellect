'use client'

import Image from "next/image";
import { NavLink } from "react-router-dom";
import Link from 'next/link'
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const currentPath = usePathname();

    return (
      <div className="3xl:w-36 h-full bg-white flex flex-col items-center justify-start fixed left-0 px-[20px] pt-[67px] z-50">
        <Link href="/">
        <p className="text-[#588FEF] font-inter text-xl italic font-black leading-[150%]">Intellect.ai</p>
        </Link>

        <Link href="/" >
        <Image
              src={currentPath === "/" ? "/icons/iconly-bold-home-blue.svg" : "/icons/iconly-bold-home.svg"}
              alt="Home"
              className="dark:invert mt-[108px] "
              width={20}
              height={20}
            />
        </Link>
        
        <Link href="/chat">
        <Image
              src={currentPath === "/chat" ? "/icons/sp-ai-blue.svg" : "/icons/sp-ai.svg"}
              alt="Chat"
              className="dark:invert mt-[40px] border-0"
              width={currentPath === "/chat" ? 59 : 59}
              height={currentPath === "/chat" ? 36 : 36}
            />
        </Link>
        <Link href="/settings">
        <Image
              src={currentPath === "/settings" ? "/icons/iconly-bold-setting-blue.svg" : "/icons/iconly-bold-setting.svg"}
              alt="Settings"
              className="dark:invert mt-[40px]"
              width={24}
              height={24}
            />
        </Link>
      </div>
    );
  }
  