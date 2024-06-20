import Sidebar from "../components/Sidebar";
import Image from "next/image";
import {User} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/react";

export default function Settings() {
  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <div className="flex flex-row justify-end absolute top-0 w-[100vw] pl-36 pr-[20px] py-[25px] overflow-scroll">
        <User   
        name="Jackson Owen"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }} className="[background:linear-gradient(270deg,rgba(88,143,239,0.50)_0%,rgba(28,100,242,0.25)_73.18%)] rounded-[39px] text-white font-lato text-base font-semibold pr-4"
      />
      </div>

      <div className="bg-[#FCFBFF] pl-36 w-[100vw] h-[100vh] flex flex-row justify-center items-center z-10">
        <div className="flex flex-col items-center">
          <p className="text-[#588FEF] font-lato text-2xl font-bold leading-[normal] w-full text-left">Profile Metrics</p>
          <div className="h-[705px] bg-white mt-[20px] flex flex-col gap-10 pl-16 pr-16 pt-8 shadow-[0px_0px_24px_0px_rgba(42,35,48,0.03)] rounded-[32px]">
            <Input type="number" label="Annual Salary" labelPlacement="outside-left" placeholder="0.00" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] p-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}} isClearable startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }/>
            <Input type="number" label="Monthly Debt" labelPlacement="outside-left" placeholder="0.00" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] pr-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}}isClearable startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }/>
            <Input type="number" label="Non-Debt Expenses" labelPlacement="outside-left" placeholder="0.00" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] pr-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}} isClearable startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }/>
            <Input type="number" label="Monthly Savings Goal" labelPlacement="outside-left" placeholder="0.00" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] pr-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}} isClearable startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }/>
            <Input type="number" label="Credit Score" labelPlacement="outside-left" placeholder="300 - 850" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] pr-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}} isClearable/>
            <Input type="text" label="Location (Address/City)" labelPlacement="outside-left" placeholder="Address, City" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] pr-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}} isClearable/>
            <Input type="number" label="Current Rent (if applicable)" labelPlacement="outside-left" placeholder="0.00" variant="bordered" classNames={{label:"text-[#252840] font-lato text-base font-semibold leading-[normal] mr-[24px] w-[110px] pr-0", inputWrapper:"h-[45px]", mainWrapper:"w-[342px]"}} isClearable startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }/>
          </div>
          <Button color="primary" radius="full" className="px-[48px] py-[16px] mt-10">Save</Button>
        </div>
        
        <div className="relative">
          <Image src="/images/ellipse-28.png" alt="background" className="dark:invert absolute top-[50%] translate-y-[-50%] z-20" width={842} height={769}/>
          <Image src="/images/settingsVisual.png" alt="3d visual of graphs" className="dark:invert relative z-50" width={716} height={541}/>
        </div>
      </div>
    </div>
  );
}
