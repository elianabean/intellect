import React from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Button} from "@nextui-org/react";
import Image from "next/image";


export default function DropdownExport() {
    const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set(["Technology"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const handleSelectionChange = (keys: any) => {
        if (keys instanceof Set) {
        setSelectedKeys(keys as Set<string>);
        } else {
        setSelectedKeys(new Set([keys]));
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
        <DropdownItem key="technology">Technology</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    );
}