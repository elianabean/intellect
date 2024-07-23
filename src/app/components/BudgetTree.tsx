import React from 'react';


export default function BudgetTree() {
 return (
   <div className="flex flex-col pt-20 gap-5 items-center justify-center">
     <div className="relative h-[700px] w-[700px]">
       <div className="absolute w-full h-full flex items-end">
         <img src="/images/colorlessTree.png" className="object-contain w-full"/>
       </div>
       <div className="absolute w-full h-full flex items-end z-10">
         <img src="/images/coloredTree.png" className="object-contain w-full"/>
       </div>
     </div>
     <p className="text-[#44a75b] font-inter text-[128px]">^ 41%</p>
   </div>
 );
};
