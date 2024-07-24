
export default function ViewMoreButton() {
    return(
        <div className="[background:#516958] rounded-[10px] flex flex-row items-center px-[50px] py-[25px] gap-[190px] w-fit">
            <p className="text-white font-inter text-base font-normal leading-[150%]">Last 1 month</p>
            {/* row for arrow icon that's supposed to be there */}
            <div className="flex flex-row items-center gap-[6px]"> 
                <p className="font-inter text-base font-bold leading-[150%] text-white">Full Insight</p>
            </div>
        </div>
    );
}