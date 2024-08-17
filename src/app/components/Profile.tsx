import { User } from "@nextui-org/react";


export default function Profile() {
    return (
        <div className="flex justify-end absolute top-0 w-full pl-36 pr-[30px] py-[25px]">
        <User
          name=""
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className="[background:rgb(255,255,255)] rounded-[39px] text-black font-inter text-base font-semibold pr-12 border-1"
        />
      </div>
    );
  }
  