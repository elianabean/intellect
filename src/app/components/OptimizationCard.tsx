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
        <div className="[background:#FCFBFF] border-1 rounded-lg border-[#C4D8C4] flex flex-col justify-center items-center py-2 pt-4 w-[135px] h-[160px]">
            <p className="text-[#8F8F8F] text-center font-raleway text-[15px] font-bold leading-[150%]">{title}</p>
            <p className="text-[rgba(1,135,33,0.70)] text-center font-inter text-[27px] font-extrabold leading-[150%]">${number}K</p>
            <p className="text-[#888] text-center font-inter text-[13px] font-semibold leading-[150%]">{walletAlloc}%</p>
            <p className="text-[#636161] text-center font-inter text-[13px] font-semibold leading-[150%]">{currSpending}%</p>

            <div className="border w-[70%] [background:#737373] mt-[6px] mb-1"></div>

            <p className={`${sign === '+' ? 'text-[rgba(1,135,33,0.70)]' : 'text-[rgba(193,29,29,0.80)]'} text-center font-inter text-[17px] font-semibold leading-[150%]`}>{sign}{budgetDiff}%</p>
        </div>
    );
}