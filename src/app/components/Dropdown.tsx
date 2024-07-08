import React from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Button} from "@nextui-org/react";
import Image from "next/image";

type DropdownExportProps = {
  selectedKey: string;
  onSelectionChange: (key: string) => void;
};

export default function DropdownExport({ selectedKey, onSelectionChange }: DropdownExportProps) {
    const selectedKeys = new Set([selectedKey]);

    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );

    const handleSelectionChange = (keys: any) => {
      if (keys instanceof Set) {
        const keyArray = Array.from(keys) as string[];
        if (keyArray.length > 0) {
          onSelectionChange(keyArray[0]);
        }
      } else {
        onSelectionChange(keys);
      }
    };

    return (
        <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="solid" 
          className="capitalize bg-[#516958] text-white text-base px-6 py-2" endContent={<Image src="/icons/Vector.svg" width={9} height={9} alt="expand" />}
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="Meal Plan">Meal Plan</DropdownItem>
        <DropdownItem key="Course Material">Course Material</DropdownItem>
        <DropdownItem key="Health Insurance">Health Insurance</DropdownItem>
        <DropdownItem key="Student Loan">Student Loan</DropdownItem>
        <DropdownItem key="Technology">Technology</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    );
}