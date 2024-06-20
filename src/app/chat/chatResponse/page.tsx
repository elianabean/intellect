import Sidebar from "../../components/Sidebar";
import {User} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function Chat() {
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

      <div className="min-h-[100vh] w-[100vw] pl-36 bg-[#FCFBFF] [background:linear-gradient(0deg,rgba(88,143,239,0.20)_0%,rgba(255,255,255)_30%)] flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-[repeat(2, auto)] px-[80px] mt-[10vh] mb-[20vh] auto-cols-auto">
            <div className="border [background:rgba(88,143,239,0.05)] rounded-[20px] border-solid border-[#588FEF] pl-[32px] py-[20px] w-[676px] text-[rgba(28,100,242,0.90)] font-inter text-xl font-medium leading-[150%] row-cols-1 justify-self-end"><p className="w-[90%]">How much money should my monthly car payments be for a Mercedes-Benz A-Class Sedan?</p>
        </div>
            <div className="w-[809px] h-[1488px] border [background:#FFF] rounded-[20px] border-solid border-[#588FEF] pl-[32px] py-[20px]  row-cols-2"><p className="text-[#1C64F2] font-inter text-xl font-medium leading-[150%] w-[90%] justify-self-start">To determine how much money your monthly car payments should be for a Mercedes-Benz A-Class Sedan, several factors need to be considered: your monthly income, credit score, existing university debt payments, stability of income, and the interest rate available to you. Here's a step-by-step breakdown:
<br/><br/>
Assess Your Monthly Income and Debt Obligations:
Monthly Income: Currently, you earn $5,000 per month.
University Debt Payments: Subtract any existing debt payments: you pay $500 per month towards university debt, that leaves you with $4,500.
<br/><br/>
Calculate Your Debt-to-Income (DTI) Ratio:
DTI Ratio: Lenders typically look for a DTI ratio of around 36% or lower. If your monthly income is $5,000, 36% of that is $1,800. This amount should cover all your debts, including the new car payment and the university debt payment. Given your $500 university debt payment, you have $1,300 left for potential car payments and other debts.
<br/><br/>
Consider the 15% Rule for Car Payments:
15% Rule: A common recommendation is that your car payment should not exceed 15% of your monthly income. For a $5,000 monthly income, this would mean a car payment of up to $750.
<br/><br/>
Factor in Your Credit Score and Interest Rate:
Credit Score: Your credit score of 720 will generally qualify you for a lower interest rate, which could get you an interest rate of around 3-4%.
Loan Terms: Typically, car loans range from 36 to 72 months. Longer terms mean lower monthly payments but more interest paid over time.
<br/><br/>
Estimate Monthly Car Payment:
Vehicle Cost: The cost of a new Mercedes-Benz A-Class Sedan is around $35,000.
Down Payment: Suppose you make a 10% down payment, which is $3,500.
Financed Amount: This leaves you with $31,500 to finance.
Loan Calculation: If you finance $31,500 over 60 months at a 4% interest rate, your monthly payment would be approximately $580.
<br/><br/>
Evaluate Based on Stability of Income:
Stable Income: If your income is stable, you can comfortably handle a higher payment within the 15% rule.
Unstable Income: If your income fluctuates, you might want to aim for a lower payment to ensure affordability even during lower income months.
<br/><br/>
Based on these considerations, if your monthly income is $5,000, a car payment around $580 is within the recommended range, considering it is below 15% of your income and fits within your remaining budget after accounting for existing debt payments.
</p>
        </div>
            
        </div>
        
        

        <div className="absolute bottom-16 w-[75%] ">
        <Textarea minRows={1} maxRows={3}
      placeholder="Start typing..."
      classNames={{
        inputWrapper: "border-1 border-primary bg-white hover:white focus:white active:white z-50 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white",
        innerWrapper: "bg-white hover:white focus:white active:white",
        input: "bg-white hover:bg-white",
        base: "hover:white focus:white active:white"
      }} color="primary" fullWidth={true} radius="full" 
    />
        </div>
        
      </div>
    </div>
  );
}
