"use client"

import Image from "next/image";
import { useFilePicker } from 'use-file-picker';
import {
    FileAmountLimitValidator,
    FileTypeValidator,
    FileSizeValidator,
    ImageDimensionsValidator,
} from 'use-file-picker/validators';
import {Button} from "@nextui-org/button";

export default function FileUpload() {
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
        <div className="w-full">
            <div className="[background:#FFF] rounded-[30px] border-[2.5px] border-solid border-[#2A3A28] w-full flex flex-row justify-between items-center px-[24px] gap-2">
                <p className="text-[#A5A4A4] font-raleway text-base font-bold leading-[150%]">New Screenshot</p>
                <Button isIconOnly className="bg-transparent" onClick={() => openFilePicker()}>
                    <Image src="/icons/plus.png" width={20} height={20} alt="plus" />
                </Button>
            </div>
            <br />
            {filesContent.map((file, index) => (
                <div key={index}>
                <Image alt={file.name} src={file.content} width={100} height={100}/>
            <br />
                </div>
            ))}
        </div>
    );
}