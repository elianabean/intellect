"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from "next/link";

function SignupPage () {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const formElements = form.elements

        if (formElements.name.value === "") {
            setError("Error! Name cannot be empty");
        } else if (formElements.password.value.length < 8) {
            setError("Error! Password must contain atleast 8 characters");
        } else if (!formElements.email.value.
            toLowerCase()
            // email regex :)
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            setError("Error! Email invalid");
        } else {
            setError("");

            let request = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({FullName: formElements.name.value, Email: formElements.email.value, Password: formElements.password.value})
            });
        
            if (request.ok) {
                setRedirect(true);
            } else if (request.status == 409) {
                setError("Error! Email already exists");
            } else if (request.status == 500) {
                setError("Unknown Error Occurred");
            }
        }
    }

    function redirectHome() {
        window.location.href = '/';
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
                redirectHome();
            }
            })
        } catch (e) {
            console.log("No login detected");
        }
    });

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
                        name="name"
                        className="shadow appearance-none border rounded-[8px] w-[38vw] max-w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your full name here"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    </div>
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>

                    {
                        (redirect) && (
                            <p className="text-black mb-6 text-sm font-inter font-medium">Success! <a className="underline" href="/Login">Login</a></p>
                        )
                    }

                    {
                        (error) && (
                            <p className="mb-6 text-sm font-inter font-medium text-red-500">{error}</p>
                        )
                    }

                    {(redirect) ? (
                        <button
                            disabled
                            className="cursor-not-allowed bg-gray-100 text-black text-[14px] font-normal font-inter py-1 px-8 rounded-[20px]"
                        >
                            Sign Up
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="hover:bg-[#04bf30bd] bg-gray-100 hover:text-white text-black text-[14px] font-normal font-inter py-1 px-8 rounded-[20px]"
                        >
                            Sign Up
                        </button>
                    )}
                </form>
                <Link href="/Login" className="text-gray-400 text-xs mt-2 ml-2">Already have an account?</Link>
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