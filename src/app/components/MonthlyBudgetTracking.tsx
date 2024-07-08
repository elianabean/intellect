"use client"

import Dropdown from "./Dropdown";
import * as React from 'react';
import LineChart from "../components/LineChart";
import { useState } from 'react';


export default function MonthlyBudgetTracking() {
  const data1 = [0, 110, 90, 120, 75, 95];
const data2 = [130, 85, 10, 140, 105, 80];
const data3 = [95, 20, 110, 70, 85, 120];
const data4 = [115, 100, 5, 65, 125, 90];
const data5 = [135, 15, 125, 80, 100, 85];

  const [selectedKey, setSelectedKey] = useState<string>('Meal Plan');

  const getDataArray = (): number[] => {
    switch (selectedKey) {
      case 'Meal Plan':
        return data1;
      case 'Course Material':
        return data2;
      case 'Health Insurance':
        return data3;
      case 'Student Loan':
        return data4;
      case 'Technology':
        return data5;
      default:
        return [];
    }
  };

    return (
        <div className="bg-[#FCFBFF] [filter:drop-shadow(5px_4px_10px_rgba(0,0,0,0.25))] px-[24px] py-[32px] rounded-sm flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-between">
                <p className="font-semibold text-black text-start text-2xl w-full">Monthly Budget Tracking</p>
                <Dropdown selectedKey={selectedKey} onSelectionChange={setSelectedKey}></Dropdown>
            </div>

            <LineChart data={getDataArray()}></LineChart>
            
        </div>
    );
}