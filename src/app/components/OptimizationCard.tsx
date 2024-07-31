interface EdOpCardProps {
    title: string;
    number: string;
    walletAlloc: string;
    currSpending: string;
    sign: string;
    budgetDiff: string;
  }

export default function EdOpCard({ title, number, walletAlloc, currSpending, sign, budgetDiff }: EdOpCardProps) {
    return (
        <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-col justify-center items-center py-2 pt-4 w-[15%] h-[160px]">
            <p className="text-[#516958] text-center font-raleway text-[15px] font-bold leading-[150%]">{title}</p>
            <p className="text-[#516958] text-center font-inter text-[30px] font-extrabold leading-[150%]">${number}K</p>
            <p className="text-[#888] text-center font-inter text-[12px] font-semibold leading-[150%]">{walletAlloc}%</p>
            <p className="text-[#636161] text-center font-inter text-[12px] font-semibold leading-[150%]">{currSpending}%</p>

            <div className="border w-[70%] [background:#737373] mt-[6px] mb-1"></div>

            <p className={`${sign === '+' ? 'text-[rgba(1,135,33,0.70)]' : 'text-[rgba(193,29,29,0.80)]'} text-center font-inter text-[17px] font-semibold leading-[150%]`}>{sign}{budgetDiff}%</p>
        </div>
    );
}