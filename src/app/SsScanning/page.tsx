"use client"
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import FileUpload from "../../components/FileUpload";
import {Textarea} from "@nextui-org/react";
import React, { useState } from 'react';

export default function Homepage2() {
  const [text, setText] = useState<string>('');

  const handleTextChange = (event: 	React.ChangeEvent <HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-row flex-wrap justify-center items-start gap-[50px] py-[116px]">
        <div className="shrink-0 [background:rgba(252,251,255,0.80)] rounded-[30px] border-4 border-solid border-[#2A3A28] w-[60%] py-[32px] px-[60px]">
            <div className="flex flex-row justify-between items-center mb-6">
                <p className="text-[#2A3A28] font-raleway text-3xl font-bold leading-[150%]">Daily Payment Records</p>
                <p className="text-[#2A3A28] text-center font-inter text-[25px] font-bold leading-[150%]">Tuesday</p>
            </div>
            
            <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%]">Screenshot your purchases for the day, either on Apple Pay, E-Transfer, Zelle, or whatever else you use. I need these to keep your wallets and recommendations in Top Shape!</p>

            <div className="flex flex-col items-start my-[30px]">
              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mb-2">Monday</p>
              <FileUpload></FileUpload>

              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mt-[20px] mb-2">Tuesday</p>
              <FileUpload></FileUpload>

              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mt-[20px] mb-2">Wednesday</p>
              <FileUpload></FileUpload>

              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mt-[20px] mb-2">Thursday</p>
              <FileUpload></FileUpload>

              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mt-[20px] mb-2">Friday!!</p>
              <FileUpload></FileUpload>

              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mt-[20px] mb-2">Saturday</p>
              <FileUpload></FileUpload>

              <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%] mt-[20px] mb-2">Sunday</p>
              <FileUpload></FileUpload>
                
            </div>
        </div>

        <div className="[background:rgba(252,251,255,0.80)] rounded-[30px] border-4 border-solid border-[#2A3A28] flex flex-col py-[32px] px-[60px] w-[30%] min-h-[900px] h-full">
          <p className="font-raleway text-3xl font-bold leading-[150%]">Notes:</p>
          <p className="text-[#2A3A28] font-raleway text-xl font-bold leading-[150%]">Jot down anything you want to remember for later. These notes get cleared after 3 days, so remember what you can!</p>

          <div className="border border-[#A5A4A4]w-full my-3"></div>
            <Textarea
      label="Description"
      placeholder="Start Typing..."
      classNames={{
        input: 'text-[#2A3A28] font-raleway text-xl font-bold leading-[150%]',
        label: 'hidden',
        inputWrapper: 'bg-transparent border-none rounded-none shadow-none p-0',
        base: 'bg-transparent p-0'
      }} value={text}
      onChange={handleTextChange}
            />

        </div>
      </div>
    </div>
  );
}
