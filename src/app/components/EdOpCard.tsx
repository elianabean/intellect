interface EdOpCardProps {
    title: string;
    number: number;
    percent: number;
  }

export default function EdOpCard({ title, number, percent }: EdOpCardProps) {
    return (
        <div className="[background:#FCFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[5px] border-b-[#516958] border-b border-solid flex flex-col justify-center items-center py-12 w-[15%]">
            <p className="text-[#516958] text-center font-inter text-[25px] font-medium leading-[150%]">{title}</p>
            <p className="text-[#516958] text-center font-inter text-[45px] font-extrabold leading-[150%]">${number}K</p>
            <p className="text-[#888] text-center font-inter text-xl font-semibold leading-[150%]">{percent}%</p>
        </div>
    );
}