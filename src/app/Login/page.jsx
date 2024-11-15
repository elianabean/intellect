"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from "next/link";

function LoginPage () {
    const [error, setError] = useState("");
    let data;

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const formElements = form.elements
        console.log(formElements);

        let request = await fetch('/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({Email: formElements.email.value, Password: formElements.password.value})
        });
        data = await request.json();

        if (request.ok) setCookies(data.token);
        else if (request.status === 401) setError("Incorrect Email/Password. Please try again.");
        else setError("Could Not Find User");
    }
    
    function setCookies(token) {
        Cookies.set('access_token', token, { expires: 7, secure: true });
        redirect();
    }
    
    function redirect() {
        window.location.href = '/PersonalizedWallet';
    }
    
    useEffect(() => {
        try {
            fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'jwt-token': Cookies.get("access_token")
            }
            })
            .then(response => {
            if (response.ok) {
                redirect();
            }
            })
        } catch (e) {
            console.log("No login detected");
        }
    });

    return (
        <div className="relative">
            <div className="flex flex-row items-center justify-center max-h-screen pl-20 pt-10 overflow-hidden" style={{backgroundColor:"#FFFFFF"}}>
                <div className="flex flex-row absolute top-6 left-6">
                    <Link href="/"> <Image src="/images/logo.png" alt="logo" width={60} height={60} className="-translate-y-3"/> </Link>
                    <Link href="/"> <p className="text-[#00A727] text-[30px] font-style: italic font-inter font-extrabold" >Intellect</p> </Link>
                </div>
                <div className="w-[45vw] flex flex-col items-start z-10 pl-20">
                <h1 className="text-[#04bf30bd] text-4xl font-inter font-bold mb-4">Hello Again!</h1>
                <p className="text-black mb-6 text-sm font-inter font-medium">Sign in to Intellect</p>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 text-[13px] font-bold font-inter mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded-[8px] w-[38vw] max-w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your email here"
                    />
                    </div>
                    <div className="mb-8">
                    <label htmlFor="password" className="block text-gray-700 text-[13px] font-bold font-inter mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="shadow appearance-none border rounded-[8px] w-[38vw] max-w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your password here"
                    />
                    </div>

                    {
                        (error) && (
                            <p className="mb-6 text-sm font-inter font-medium text-red-500">{error}</p>
                        )
                    }

                    <button
                        type="submit"
                        className="hover:bg-[#04bf30bd] bg-gray-100 hover:text-white text-black text-[14px] font-normal font-inter py-1 px-8 rounded-[20px]"
                    >
                        Sign In
                    </button>
                </form>
                <Link href="/Signup" className="text-gray-400 text-xs mt-2 ml-2">New to Intellect?</Link>
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

export default LoginPage;