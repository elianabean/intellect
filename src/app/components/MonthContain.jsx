"use client";
import TinyBarChart from './TinyBarChart';

function Month(props) {
    return(
        <div className="bg-[#FBFBFF] rounded-[10px] border-[#516958] border-solid border-4 w-[800px] h-[120px]">
            <div className="flex flex-row justify-center gap-[70px]">
                <p className="text-2xl font-semibold text-gray-600 pt-10">{props.Month}</p>
                <div><TinyBarChart></TinyBarChart></div>
            </div>
        </div>
    );
}

export default Month;