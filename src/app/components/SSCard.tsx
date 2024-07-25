"use client"

import Image from "next/image";
import { useFilePicker } from 'use-file-picker';
import {
    FileAmountLimitValidator,
    FileTypeValidator,
    FileSizeValidator,
    ImageDimensionsValidator,
} from 'use-file-picker/validators';
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from 'react';


export default function SSCard() {
    const { openFilePicker, filesContent, loading, errors } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        validators: [
            new FileTypeValidator(['jpg', 'png']),
            new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ })
        ],
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errors.length) {
        return <div>Error...</div>;
    }

  return (
    <div className="bg-[#FBFBFF] shadow-md p-4 flex flex-row justify-between rounded-lg h-[220px] w-[436px] relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="flex flex-col justify-center text-[#3A4F38] text-center font-raleway text-xl font-bold leading-[150%]">Update your purchase history today with only a Screenshot!</p>
        <div className="w-full flex flex-row justify-center items-center">
            {filesContent.length === 0 ? (
                <div className="[background:#FFF] rounded-[30px] border-[3px] border-solid border-[#2A3A28] w-full flex flex-row justify-between items-center px-[24px] py-[10px] gap-2">
                    <p className="text-[#A5A4A4] font-raleway text-xl font-bold leading-[150%]">Drop it in</p>
                    <Button isIconOnly className="bg-transparent" onClick={() => openFilePicker()}>
                        <Image src="/icons/plus.png" width={26} height={26} alt="plus" />
                    </Button>
                </div>
            ) : (
                filesContent.map((file, index) => (
                    <div key={index}>
                        <Image alt={file.name} src={file.content} width={100} height={100} />
                        <br />
                    </div>
                ))
            )}
        </div>
      </div>

      <Link href="/SsScanning">
        <Image src="/icons/rightArrow.svg" height={27} width={20} alt="next arrow" className="absolute bottom-4 right-4"></Image>
      </Link>
    </div>
  )
}
