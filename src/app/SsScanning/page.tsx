"use client"
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FileUpload from "../components/FileUpload";
import {Textarea} from "@nextui-org/react";
import React, { useState } from 'react';

export default function SsScanning() {
  const [text, setText] = useState<string>('');

  const handleTextChange = (event: 	React.ChangeEvent <HTMLInputElement>) => {
    setText(event.target.value);
  };

  // Calculate the dates for each day of the week
  const getWeekDates = () => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(firstDayOfWeek);
      date.setDate(date.getDate() + i);
      return date;
    });
  };

  const formatDate = (date: any) => {
    const options = { month: 'numeric', day: 'numeric', year: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  const weekDates = getWeekDates();
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] w-[100vw] pl-36 pr-4 flex flex-row flex-wrap justify-center items-start gap-[45px] py-[116px]">
        <div className="shrink-0 [background:rgba(252,251,255,0.80)] rounded-[30px] border-4 border-solid border-[#2A3A28] w-[60%] py-[32px] px-[60px]">
            <div className="flex flex-row justify-between items-center mb-3">
                <p className="text-[#2A3A28] font-raleway text-3xl font-bold leading-[150%]">Daily Payment Records</p>
            </div>
            
            <p className="text-[#2A3A28] font-raleway text-base font-bold leading-[150%]">Screenshot your purchases for the day, either on Apple Pay, E-Transfer, Zelle, or whatever else you use. I need these to keep your wallets and recommendations in Top Shape!</p>

            <div className="flex flex-col items-start mt-[35px] mb-2">
              {daysOfWeek.map((day, index) => (
                <React.Fragment key={day}>
                  <p className="text-[#2A3A28] font-raleway text-lg font-bold leading-[150%] mb-2">
                    {day} ({formatDate(weekDates[index])})
                  </p>
                  <FileUpload day={day} date={weekDates[index]} userId="f46ad135-f439-418e-b383-459a1ea78edb" />
                </React.Fragment>
              ))}
            </div>
        </div>

        <div className="[background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[30px] border-solid border-[#2A3A28] flex flex-col py-[32px] px-[60px] w-[30%] min-h-[1005px] h-full">
          <p className="font-raleway text-3xl text-[#2A3A28] font-bold leading-[150%]">Notes:</p>
          <p className="text-[#2A3A28] font-raleway text-base font-bold leading-[150%]">Jot down anything you want to remember for later. These notes get cleared after 3 days, so remember what you can!</p>

          <div className="border border-[#A5A4A4] w-full my-3"></div>
            <Textarea
              label="Description"
              placeholder="Start Typing..."
              classNames={{
                input: 'text-[#2A3A28] font-raleway text-lg font-bold leading-[150%]',
                label: 'hidden',
                inputWrapper: 'bg-transparent border-none rounded-none shadow-none p-0',
                base: 'bg-transparent p-0'
              }} 
              value={text}
              onChange={handleTextChange}
            />

        </div>
      </div>
    </div>
  );
}
