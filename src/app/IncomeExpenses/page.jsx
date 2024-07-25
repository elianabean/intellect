"use client";

import React from "react";
import PieChart from "../components/PieChart";
import Sidebar from "../components/Sidebar";
import TinyBarChart from "../components/TinyBarChart";
import Month from "../components/MonthContain";
import ViewMoreButton from "../components/ViewMore";

function IncomeExpenses() {
    const dataPie = [
        { id: 0, value: 25, color: '#73937C'},
        { id: 1, value: 10, color: '#3A4F38' },
        { id: 2, value: 5, color: '#515251' },
        { id: 3, value: 5, color: '#888' },
        { id: 4, value: 20, color: '#E4E5E4' },
        { id: 5, value: 35, color: '#C4D8C4' },
    ];

    const dataBar = [-1000, 2000, 2398, 2800, -3008, -4000, 1000, 500, -2500, -1500, 800, 3000, 2500, 3000];


    return(
        <div className="relative">
            <Sidebar></Sidebar>
            <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-row flex-wrap justify-center items-center pt-[116px] gap-[92px]">
                <div className="flex flex-col gap-8">
                    <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[80px] py-[74px]">
                        <h1 className="text-center text-[#516958] text-6xl px-96 pb-20 font-bold">Income | Expenses</h1>
                        <div className="flex flex-row flex-wrap justify-center items-center gap-[92px]"> 
                            <div className="flex flex-col gap-8">
                                <Month Month='January'></Month>
                                <Month Month='February'></Month>
                                <Month Month='March'></Month>
                                <Month Month='April'></Month>
                                <Month Month='May'></Month>
                                <Month Month='June'></Month>
                            </div>

                            <div className="flex flex-col gap-8">
                                <Month Month='July'></Month>
                                <Month Month='August'></Month>
                                <Month Month='September'></Month>
                                <Month Month='October'></Month>
                                <Month Month='November'></Month>
                                <Month Month='December'></Month>
                            </div>
                        </div>
                        <div className="border-2 border-[#D3D7EF] w-full self-center mt-11"></div>
                        <div className="flex flex-row-reverse mt-10 ">
                            <ViewMoreButton></ViewMoreButton>
                        </div>
                    </div>
                </div>
            

                <div className="flex flex-col gap-8">
                    <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-10 pb-10">
                        <h2 className="text-center text-[#516958] text-5xl pb-10 pt-5 font-semibold">Educational Expenses</h2>
                        <PieChart data={dataPie}></PieChart>
                    </div>
                    <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-10 pb-10">
                        <h2 className="text-center text-[#516958] text-5xl pb-10 pt-5 font-semibold">Personal Expenses</h2>
                        <PieChart data={dataPie}></PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomeExpenses;