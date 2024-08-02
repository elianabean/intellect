import React from 'react';
import Image from "next/image";


export default function BudgetTree() {
 return (
   <div className="flex flex-col gap-5 items-center justify-center">
     <div className="relative h-[450px] w-[400px] pl-24">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[600px] z-0">
          <Image src="/images/ellipse-37.png"  alt="background" fill className="object-fill"></Image>
        </div>
        
       <div className="absolute w-full h-full flex items-end z-10">
         <img src="/images/colorlessTree.png" className="object-contain w-full"/>
       </div>
       <div className="absolute w-full h-full flex items-end z-10">
         <img src="/images/coloredTree.png" className="object-contain w-full"/>
       </div>
     </div>
     <div className="flex flex-row justify-center items-center gap-[16px] pl-48 z-10">
      <Image src="/icons/upArrow.svg" width={35} height={58} alt='up arrow'></Image>
      <p className="justify-center text-[rgba(1,135,33,0.70)] font-inter text-5xl font-semibold leading-[150%]">41%</p>
     </div>
     
   </div>
 );
};
