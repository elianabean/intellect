"use client";

import Image from "next/image";
import { useFilePicker } from 'use-file-picker';
import {
  FileAmountLimitValidator,
  FileTypeValidator,
  FileSizeValidator,
} from 'use-file-picker/validators';
import { Button } from "@nextui-org/button";
import { useState } from 'react';

export default function FileUpload({ day, date, userId }: { day: any, date: any, userId: any }) {
  const { openFilePicker, filesContent, loading, errors, clear } = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: true,
    validators: [
      new FileTypeValidator(['jpg', 'png']),
      new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ })
    ],
  });

  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!filesContent.length) return;
    
    setUploading(true);
    try {
      // Upload each file and store the URL in the database
      for (const file of filesContent) {
        const response = await fetch('/api/uploadFile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            day,
            date: date.toISOString().split('T')[0],
            fileName: file.name,
            fileContent: file.content.split(',')[1] // remove the data URL part
          }),
        });

        const result = await response.json();
        if (response.ok) {
          console.log('File uploaded successfully:', result.url);
        } else {
          console.error('Failed to upload file:', result.error);
        }
      }
      clear();
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  };

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
          <Image alt={file.name} src={file.content} width={100} height={100} />
          <br />
        </div>
      ))}
      {filesContent.length > 0 && (
        <Button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload All'}
        </Button>
      )}
    </div>
  );
}
