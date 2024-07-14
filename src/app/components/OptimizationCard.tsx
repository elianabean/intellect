interface EdOpCardProps {
    title: string;
    number: number;
    walletAlloc: number;
    currSpending: number;
    sign: string;
    budgetDiff: number;
  }

export default function EdOpCard({ title, number, walletAlloc, currSpending, sign, budgetDiff }: EdOpCardProps) {
    return (
        <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-col justify-center items-center py-6 w-[15%]">
            <p className="text-[#516958] text-center font-raleway text-[25px] font-bold leading-[150%]">{title}</p>
            <p className="text-[#516958] text-center font-inter text-[45px] font-extrabold leading-[150%]">${number}K</p>
            <p className="text-[#888] text-center font-inter text-xl font-semibold leading-[150%]">{walletAlloc}%</p>
            <p className="text-[#636161] text-center font-inter text-xl font-semibold leading-[150%]">{currSpending}%</p>

            <div className="border w-[70%] [background:#737373] mt-[26px] mb-2"></div>

            <p className={`${sign === '+' ? 'text-[rgba(1,135,33,0.70)]' : 'text-[rgba(193,29,29,0.80)]'} text-center font-inter text-xl font-semibold leading-[150%]`}>{sign}{budgetDiff}%</p>
        </div>
    );
}