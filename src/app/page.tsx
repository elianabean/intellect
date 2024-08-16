import Section1 from "./components/Homepage/Section1";
import Section2 from "./components/Homepage/Section2";
import Section3 from "./components/Homepage/Section3";
import Section4 from "./components/Homepage/Section4";
import Section5 from "./components/Homepage/Section5";
import Section6 from "./components/Homepage/Section6";
import Marquee from "./components/Homepage/Marquee";
import Footer from "./components/Homepage/Footer";

export default function Home() {
  return (
    <div className="relative [background:#FFF] flex flex-col justify-center items-center scroll-smooth">
      <Section1/>
      <Marquee/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  );
}
