'use client';

import { useEffect } from "react";
import  Aos from "aos";
import 'aos/dist/aos.css';

export const AOSInit = () => {
    useEffect(() => {
        Aos.init({
            duration: 850,
            easing: "ease-in-out",
            offset: 0,
        });
    }, []);

    return null;
};