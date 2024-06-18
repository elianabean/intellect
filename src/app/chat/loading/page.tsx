import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import {User} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <div className="flex flex-row justify-end absolute top-0 w-[100vw] pl-36 pr-[20px] py-[25px]">
        <User   
        name="Jackson Owen"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }} className="[background:linear-gradient(270deg,rgba(88,143,239,0.50)_0%,rgba(28,100,242,0.25)_73.18%)] rounded-[39px] text-white font-lato text-base font-semibold pr-4"
      />
      </div>

      <div className="h-[100vh] w-[100vw] pl-36 bg-[#FCFBFF] [background:linear-gradient(0deg,rgba(88,143,239,0.20)_0%,rgba(255,255,255)_30%)] flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center ">
            <p className="w-[400px] text-[#588FEF] font-semibold text-center text-xl">Sit back, relax, and let Intellect work its wonders! Your wallet is in capable hands.</p>
            <Spinner color="primary" size="lg" className="mt-[20px]"/>
            
        </div>

        <div className="absolute bottom-16 w-[75%]">
        <Textarea minRows={1} maxRows={3}
      placeholder="Start typing..."
      classNames={{
        inputWrapper: "border-1 border-primary bg-white hover:white focus:white active:white z-50 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white",
        innerWrapper: "bg-white hover:white focus:white active:white",
        input: "bg-white hover:bg-white",
        base: "hover:white focus:white active:white"
      }} color="primary" fullWidth={true} radius="full" 
    />
        </div>
        
      </div>
    </div>
  );
}
