"use client";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import EdOpCard from "../components/OptimizationCard";
import OptimizationOverview from "../components/OptimizationOverview"
import Image from 'next/image';

import { useEffect, useState, useRef } from "react";

export default function EducationalOptimization() {
  // walletInfo contains all available financialInfo the user inputed on the forms (see getWalletBreakdown.js)
  const [walletInfo, setWalletInfo] = useState(null) as any;
  // defines tbg gpt4 tips
  const [message, setMessage] = useState([]);
  // gpt4 error handle
  const [strategiesError, setStrategiesError] = useState(false);

  // expenses
  let [housing, food, entertainment, transport, clubs, walletTotal] = [0, 0, 0, 0, 0, 0];
  // percentage spending by category
  let [housingSpending, foodSpending, entertainmentSpending, transportSpending, clubsSpending] = [0, 0, 0, 0, 0];
  // percent current allocation by category
  let [housingBudget, foodBudget, entertainmentBudget, transportBudget, clubsBudget] = [0, 0, 0, 0, 0];
  // optimization bar values
  let [necessity, school, discretionary] = [0, 0, 0];

  const setWalletBreakdown = () => {
    try {
      fetch('/api/getWalletBreakdown', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        setWalletInfo(data);
      });
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  const setExpenseValues = (data: any) => {
    // get expense values directly from db
    housing = data.expenses_details.housing_expenses;
    food = data.expenses_details.food_expenses;
    entertainment = data.wants_details.entertainment_expenses;
    transport = data.expenses_details.transportation_expenses;
    clubs = data.wants_details.ec_expenses;
    walletTotal = housing + food + entertainment + transport + clubs;

    // spending values as a percentage of total
    housingSpending = 100 * housing / walletTotal;
    foodSpending = 100 * food / walletTotal;
    entertainmentSpending = 100 * entertainment / walletTotal;
    transportSpending = 100 * transport / walletTotal;
    clubsSpending = 100 * clubs / walletTotal;
  };

  const setBarValues = (data: any) => {
    const clip = (num: number, min: number, max: number) => Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));

    // Breakdown: 45% -> housingDeficit, 35% -> foodDeficit, 20% -> transportDeficit
    necessity = clip(45 - 2 * (housingSpending - housingBudget), 0, 45) + 
                clip(35 - 3 * (foodSpending - foodBudget), 0, 35) + 
                clip(20 - (transportSpending - transportBudget), 0, 20);
    
    const tuition = data.financial_details.tuition;
    const scholarship = data.financial_details.scholarship;
    const aid = data.financial_details.financial_aid;

    // Breakdown: 20% -> ec relative to tuition, 80% -> scholarship+financial aid relative to tuition
    school = (20 - clip(200 * (clubsSpending / tuition - 0.05), 0, 20)) + 
             clip(400 * (scholarship + aid) / tuition, 0, 80);

    const clothing_expenses = data.wants_details.clothing_expenses;
    const subscription_expenses = data.wants_details.subscription_expenses;
    
    // Breakdown: 25% -> clothing / absolute val, 20% -> subscriptions / absolute val, 55% -> entertainment_deficit
    discretionary = clip((1 - clothing_expenses / 100) * 25, 0, 25) + 
                    clip((1 - (subscription_expenses - 40) / 80) * 20, 0, 20) +
                    clip(55 - 2 * (entertainmentSpending - entertainmentBudget), 0, 55);
  };

  const setOptimizationStrats = (data: any) => {
    // define categories & questions to be asked for each
    let expense_questions = [
      [entertainmentSpending - entertainmentBudget, ['entertainment', 'subscriptions', 'clothing']], 
      [housingSpending - housingBudget,             ['housing']], 
      [foodSpending - foodBudget,                   ['food', 'groceries']], 
      [transportSpending - transportBudget,         ['transportation']], 
      [clubsSpending - clubsBudget,                 ['student extracurriculars and clubs']]
    ] as any;
    // sort list of categories by how poorly money is being spent
    expense_questions.sort(function(a: any, b: any) {
      return a[0] > b[0] ? -1 : 1;
    });

    try {
      fetch('/Optimization/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // pick the first 3 (aka 3 worst managed) and then pick a random sub-element from 2nd part of list
          'expense1': expense_questions[0][1][Math.floor(Math.random()*expense_questions[0][1].length)],
          'expense2': expense_questions[1][1][Math.floor(Math.random()*expense_questions[1][1].length)],
          'expense3': expense_questions[2][1][Math.floor(Math.random()*expense_questions[2][1].length)],
          'message': `The user goes to ${data.personal_details.college} with a major in ${data.personal_details.major}. 
          They spend $${data.expenses_details.housing_expenses} a month on housing and live in a ${data.expenses_details.housing_type}.
          They spend $${data.expenses_details.food_expenses} a month on food, shopping primarily at ${data.expenses_details.groceries}. 
          They spend $${data.wants_details.entertainment_expenses} a month on entertainment to do things like ${data.wants_details.entertainment_type}. 
          They spend $${data.expenses_details.transportation_expenses} a month on transport.
          They spend $${data.wants_details.ec_expenses} on student clubs. 
          They spend $${data.wants_details.clothing_expenses} on clothes with the main brand being ${data.wants_details.clothing_type}. 
          They spend $${data.wants_details.subscription_expenses} on online subscriptions such as ${data.wants_details.subscription_type}`
        })
      })
      .then(response => {
        if (response.ok) return response;
        setStrategiesError(true);
        throw new Error("An error occurred getting the optimization strategies");
      })
      .then(response => response.json())
      .then(data => {
        // format gpt response into split up bullet points
        setMessage(data.message.trim().split(/(?:\n|- )/).filter((item: any) => item.trim() !== ""));
      });
    } catch (error) {
      console.error('Error: ', error);
    }
  };
  
  // useEffect b/c page should only fetch once on start of render
  useEffect(() => {
    setWalletBreakdown();
  }, []);

  const runFlag = useRef(false);
  if (walletInfo != null) {
    setExpenseValues(walletInfo);
    
    // TODO: Implement wallet allocations -- currently just using random values
    housingBudget = 34.32, foodBudget = 27.32, entertainmentBudget = 16.58, transportBudget = 13.16, clubsBudget = 7.44;
    
    setBarValues(walletInfo);

    // using runFlag so that this bit of code is only run once
    if (!runFlag.current) {
      setOptimizationStrats(walletInfo);
      runFlag.current = true;
    }
  }

  return (
    <div className="relative">
      <Sidebar></Sidebar>

      <Profile></Profile>

      <div className="h-full min-h-[100vh] max-w-full w-full pl-[204px] pr-[60px] pt-24 flex flex-col flex-wrap justify-center items-center gap-12">
        <div className="flex flex-row flex-wrap w-full justify-between items-center">

          <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-col justify-center items-center w-[15%] h-[160px] ">
            <p className="text-[#516958] text-center font-inter text-[15px] font-extrabold leading-[150%]">Total Expense</p>
            <p className="text-[#516958] text-center font-inter text-3xl font-extrabold leading-[150%]">${(walletTotal/1000).toFixed(1)}K</p>
            <p className="text-[#888] text-center font-inter text-[13px] font-semibold leading-[150%]">Wallet Allocation</p>
            <p className="text-[#636161] text-center font-inter text-[13px] font-semibold leading-[150%]">Current Spending</p>
            <p className="text-[#636161] text-center font-inter text-[13px] font-semibold leading-[150%] mt-[14px]">Over/Under Budget</p>

        </div>
            <EdOpCard title="Housing"         number={(housing/1000).toFixed(1)}        walletAlloc={housingBudget.toFixed(2)}        currSpending={housingSpending.toFixed(2)}       budgetDiff={Math.abs(housingBudget - housingSpending).toFixed(2)}             sign={housingBudget >= housingSpending ? "+" : "-"}></EdOpCard>
            <EdOpCard title="Food"            number={(food/1000).toFixed(1)}           walletAlloc={foodBudget.toFixed(2)}           currSpending={foodSpending.toFixed(2)}          budgetDiff={Math.abs(foodBudget - foodSpending).toFixed(2)}                   sign={foodBudget >= foodSpending ? "+" : "-"}></EdOpCard>
            <EdOpCard title="Entertainment"   number={(entertainment/1000).toFixed(1)}  walletAlloc={entertainmentBudget.toFixed(2)}  currSpending={entertainmentSpending.toFixed(2)} budgetDiff={Math.abs(entertainmentBudget - entertainmentSpending).toFixed(2)} sign={entertainmentBudget >= entertainmentSpending ? "+" : "-"}></EdOpCard>
            <EdOpCard title="Transportation"  number={(transport/1000).toFixed(1)}      walletAlloc={transportBudget.toFixed(2)}      currSpending={transportSpending.toFixed(2)}     budgetDiff={Math.abs(transportBudget - transportSpending).toFixed(2)}         sign={transportBudget >= transportSpending ? "+" : "-"}></EdOpCard>
            <EdOpCard title="Clubs"           number={(clubs/1000).toFixed(1)}          walletAlloc={clubsBudget.toFixed(2)}          currSpending={clubsSpending.toFixed(2)}         budgetDiff={Math.abs(clubsBudget - clubsSpending).toFixed(2)}                 sign={clubsBudget >= clubsSpending ? "+" : "-"}></EdOpCard>
        </div>

        <div className="flex justify-center w-full z-50">
          <OptimizationOverview necessity={necessity} school={school} discretionary={discretionary} strategies={message} strategiesError={strategiesError}/>
        </div>

        <Image src="/images/ellipse-34.svg" width={1524.261} height={486.942} alt="background" className="absolute bottom-0"></Image>
      </div>
    </div>
  );
}
