import { User } from "@nextui-org/react";


export default function Profile() {
    return (
        <div className="flex justify-end absolute top-0 w-full pl-36 pr-[30px] py-[25px]">
        <User
          name="Jackson Owen"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className="[background:rgba(81,105,88,0.70)] rounded-[39px] text-white font-lato text-base font-semibold pr-4"
        />
      </div>
    );
  }
  