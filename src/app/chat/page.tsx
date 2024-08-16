"use client";

import Sidebar from "../components/Sidebar";
import Image from "next/image";
import { User } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Chat() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    router.push("/chat/loading");

    console.log(textAreaValue);

    const response = await fetch("/chat/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: textAreaValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const message = data.message;
      // Parse query parameters
      const params = new URLSearchParams();
      params.append("message", message);
      params.append("question", textAreaValue);
      router.push(`/chat/chatResponse?${params.toString()}`);
    } else {
      router.push("/chat/error");
      console.log("Failed to send message");
    }
  };

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <div className="flex flex-row justify-end absolute top-0 w-[100vw] pl-36 pr-[20px] py-[25px]">
        <User
          name="Jackson Owen"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className="[background:linear-gradient(270deg,rgba(88,143,239,0.50)_0%,rgba(28,100,242,0.25)_73.18%)] rounded-[39px] text-white font-lato text-base font-semibold pr-4"
        />
      </div>

      <div className="h-[100vh] w-[100vw] pl-36 bg-[#FCFBFF] [background:linear-gradient(0deg,rgba(88,143,239,0.20)_0%,rgba(255,255,255)_30%)] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/icons/sp-ai-blue.svg"
            alt="Intellect.ai logo"
            className="dark:invert"
            width={188}
            height={133}
          />
          <p className="w-[672px] text-black text-center font-inter text-lg font-normal leading-[150%] mt-[5px]">
            AI-Powered Responses and Analysis
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-start mt-[40px] gap-[40px]">
          <div className="rounded-[20px] border border-solid border-[#588FEF] flex flex-col justify-start items-start px-[32px] py-[30px] w-[250px] h-[275px]">
            <p className="text-black font-inter text-[15px] font-bold leading-[150%]">
              🔍 Deep Dive Analysis:
            </p>
            <p className="text-black font-inter text-[15px] font-normal leading-[150%]">
              {" "}
              Empowering you with tailored insights, our AI meticulously
              assesses your situation against financial benchmarks and
              cutting-edge quantitative analysis.
            </p>
          </div>

          <div className="rounded-[20px] border border-solid border-[#588FEF] flex flex-col justify-start items-start px-[32px] py-[30px] w-[250px] h-[275px]">
            <p className="text-black font-inter text-[15px] font-bold leading-[150%]">
              🔄 Interactive Experience:
            </p>
            <p className="text-black font-inter text-[15px] font-normal leading-[150%]">
              {" "}
              Immerse yourself in a personalized assessment of your income
              management skills, designed to ensure a thorough understanding of
              effective financial practices.
            </p>
          </div>

          <div className="rounded-[20px] border border-solid border-[#588FEF] flex flex-col justify-start items-start px-[32px] py-[30px] w-[250px] h-[275px]">
            <p className="text-black font-inter text-[15px] font-bold leading-[150%]">
              💡Comprehensive Feedback:
            </p>
            <p className="text-black font-inter text-[15px] font-normal leading-[150%]">
              {" "}
              Gain crystal-clear insights into areas for improvement. Receive
              actionable guidance to align your financial habits with goals
              effectively.
            </p>
          </div>
        </div>

        <div className="absolute bottom-16 w-[75%] flex flex-row justify-center gap-4">
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
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          <Button isIconOnly color="primary" onClick={handleClick}>
            <Image
              src="/icons/sp-ai.svg"
              alt="Intellect.ai logo"
              className="dark:invert fill-white"
              width={115}
              height={125}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
