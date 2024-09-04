"use client";

import React from "react";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

function SignupPage () {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
        case 'FullName':
            setFullName(value);
            break;
        case 'Email':
            setEmail(value);
            break;
        case 'Password':
            setPassword(value);
            break;
        default:
            break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
          FullName,
          Email,
          Password,
        };


    
        try {
            const { error } = await supabase.auth.signUp({
                fullname: userData.FullName,
                email: userData.Email,
                password: userData.Password,
              });
              
            if (response.ok) {
                console.log('Data successfully sent to backend');
                router.push('/PersonalizedWallet'); // Redirect to the next page
              } else {
                console.error('Failed to send data to backend');
              }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className="relative">
            <div className="flex flex-row items-center justify-center max-h-screen pl-20 pt-10 overflow-hidden" style={{backgroundColor:"#FFFFFF"}}>
                <div className="flex flex-row absolute top-6 left-6">
                <Link href="/">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60} className="-translate-y-3"/>
                </Link>
                <Link href="/">
                    <p className="text-[#00A727] text-[30px] font-style: italic font-inter font-extrabold" >Intellect</p>
                </Link>
                </div>
                <div className="w-[45vw] flex flex-col items-start z-10 pl-20">
                <h1 className="text-[#04bf30bd] text-4xl font-inter font-bold mb-4">Nice to meet you!</h1>
                <p className="text-black mb-6 text-sm font-inter font-medium">Sign up with Intellect</p>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="mb-5">
                    <label htmlFor="fullName" className="block text-gray-700 text-[13px] font-inter font-bold mb-2">
                        Full Name
                    </label>
                    <input
                        type="fullName"
                        id="fullName"
                        name="FullName"
                        className="shadow appearance-none border rounded-[8px] w-[38vw] max-w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your full name here"
                        value={FullName}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 text-[13px] font-bold font-inter mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="Email"
                        className="shadow appearance-none border rounded-[8px] w-[38vw] max-w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your email here"
                        value={Email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="mb-8">
                    <label htmlFor="password" className="block text-gray-700 text-[13px] font-bold font-inter mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="Password"
                        className="shadow appearance-none border rounded-[8px] w-[38vw] max-w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your password here"
                        value={Password}
                        onChange={handleChange}
                    />
                    </div>
                    <button
                    type="submit"
                    className="hover:bg-[#04bf30bd] bg-gray-100 hover:text-white text-black text-[14px] font-normal font-inter py-1 px-8 rounded-[20px]"
                    >
                    Sign Up
                    </button>
                </form>
                </div>

                <div className="translate-x-16">
                    <Image
                        src="/images/Ellipse 104.png"
                        alt="background"
                        width={550} height={600}
                        className=" z-0 translate-y-48 -translate-x-20"
                    />
                    <Image
                        src="/images/3DTree.png" width={360} height={400} className="z-10 -translate-y-80"
                        alt="tree"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;