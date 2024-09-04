import { User } from "@nextui-org/react";
import Image from "next/image";


export default function Profile() {
    return (
        <div className="flex justify-end absolute top-0 w-full pl-36 pr-[30px] py-[25px]">
        <User
          name=""
          avatarProps={{
            src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106",
          }}
          className="[background:rgb(255,255,255)] rounded-[39px] text-black font-inter text-base font-semibold pr-12 border-1"
        />
      </div>
    );
  }
  