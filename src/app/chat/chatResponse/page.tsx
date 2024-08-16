"use client";
import React, { Suspense } from 'react';
import Sidebar from "../../components/Sidebar";
import { User } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import { useSearchParams } from "next/navigation";

const ChatResponse = () => {
  const searchParams = useSearchParams();

  const question = searchParams?.get("question");
  const message = searchParams?.get("message");

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <div className="flex flex-row justify-end absolute top-0 w-[100vw] pl-36 pr-[20px] py-[25px] overflow-scroll">
        <User
          name="Jackson Owen"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className="[background:linear-gradient(270deg,rgba(88,143,239,0.50)_0%,rgba(28,100,242,0.25)_73.18%)] rounded-[39px] text-white font-lato text-base font-semibold pr-4"
        />
      </div>

      <div className="min-h-[100vh] w-[100vw] pl-36 bg-[#FCFBFF] [background:linear-gradient(0deg,rgba(88,143,239,0.20)_0%,rgba(255,255,255)_30%)] flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-[repeat(2, auto)] px-[80px] mt-[10vh] mb-[20vh] auto-cols-auto">
          <div className="border [background:rgba(88,143,239,0.05)] rounded-[20px] border-solid border-[#588FEF] pl-[32px] py-[20px] w-[676px] text-[rgba(28,100,242,0.90)] font-inter text-xl font-medium leading-[150%] row-cols-1 justify-self-end">
            <p className="w-[90%]">{question}</p>
          </div>
          <div className="w-[809px] h-[1488px] border [background:#FFF] rounded-[20px] border-solid border-[#588FEF] pl-[32px] py-[20px]  row-cols-2">
            <p className="text-[#1C64F2] font-inter text-xl font-medium leading-[150%] w-[90%] justify-self-start">
              {message}
            </p>
          </div>
        </div>

        <div className="absolute bottom-16 w-[75%] ">
          <Textarea
            minRows={1}
            maxRows={3}
            placeholder="Start typing..."
            classNames={{
              inputWrapper:
                "border-1 border-primary bg-white hover:white focus:white active:white z-50 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white",
              innerWrapper: "bg-white hover:white focus:white active:white",
              input: "bg-white hover:bg-white",
              base: "hover:white focus:white active:white",
            }}
            color="primary"
            fullWidth={true}
            radius="full"
          />
        </div>
      </div>
    </div>
  );
}

const ChatResponseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ChatResponse />
  </Suspense>
);

export default ChatResponseWrapper;