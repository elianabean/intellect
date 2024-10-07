"use client";

import { User } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";


export default function Profile() {
  const [signedIn, setSignedIn] = useState(false);
  const [fn, setFn] = useState("");

  useEffect(() => {
    try {
      fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'jwt-token': Cookies.get("access_token") as string
        }
      })
      .then(response => {
        if (response.ok) {
          setSignedIn(true);
        }
        return response.json();
      })
      .then(data => {
        if (data.data) {
          setFn(data.data.username)
        }
      })
    } catch (e) {
      console.log("No login detected");
    }
  });

    return (
        <div className="flex justify-end absolute top-0 w-full pl-36 pr-[30px] py-[25px]">
        <User
          name={(signedIn) ? fn : ""}
          avatarProps={{
            src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106",
          }}
          className="[background:rgb(255,255,255)] rounded-[39px] text-black font-inter text-base font-semibold pr-12 border-1"
        />
      </div>
    );
  }
  