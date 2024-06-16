import Sidebar from "./components/Sidebar";
import Image from "next/image";
import Link from 'next/link'
import {Button} from "@nextui-org/react"

export default function Home() {
  return (
    <div className="relative ml-36">
      <Sidebar></Sidebar>
      <div className="bg-white flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="ml-[102px] flex flex-row items-center">
            <Image
                src="/icons/sp-ai-blue.svg"
                alt="Intellect.ai logo"
                className="dark:invert"
                width={115}
                height={125}
              />
              <p className="text-[#588FEF] font-inter text-[50px] italic font-black leading-[150%]">Intellect.ai</p>
          </div>
          <div className="flex flex-row mr-[48px] justify-between space-x-[34px]">
            <Button as={Link} color="primary" href="#" variant="ghost" radius="full" className="px-[32px] py-[9px]">
            Log in
            </Button>
            <Button as={Link} color="primary" href="#" variant="solid" radius="full" className="px-[32px] py-[12px]">
            Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
