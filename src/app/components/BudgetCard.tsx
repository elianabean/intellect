import React from "react";

export default function BudgetCard({
  title,
  text1,
  text2,
  text3,
  color,
}: {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  color: string;
}) {
  return (
    <div className="bg-white shadow-md p-4 flex flex-row justify-between rounded-lg h-full w-full">
      <div className="basis-3 w-full flex flex-col justify-between">
        <h1 className="text-3xl">{title}</h1>
        <h2 className={"text-6xl " + color}>{text1}</h2>
      </div>
      <div className="basis-2 w-full flex flex-col justify-between mt-4">
        <h3 className={"text-4xl border-b-1 border-black text-center " + color}>{text2}</h3>
        <h3 className={"text-4xl border-b-1 border-black text-center " + color}>{text3}</h3>
      </div>
    </div>
  );
}
