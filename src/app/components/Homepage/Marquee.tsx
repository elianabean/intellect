import Marquee from "react-fast-marquee";
import Image from 'next/image'

export default function SponsorsMarquee() {
    return (
        <div className="relative w-[100vw]">
            <Marquee direction="left" speed={80} className="overflow-y-hidden bg-transparent" gradient={true}>
                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[350px] h-[220.37px]">
                        <Image src="/images/logoHarvard.png" alt="Harvard University Logo" fill style={{objectFit: "cover"}} />
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[330.55px] h-[220.37px]">
                        <Image src="/images/logoPenn.png" alt="University of Pennsylvania Logo" fill style={{objectFit: "cover"}} />
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[370px] h-[92.5px]">
                        <Image src="/images/logoStanford.png" alt="Stanford University Logo" fill style={{objectFit: "cover"}} />
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[330px] h-[92.28px]">
                        <Image src="/images/logoYale.png" alt="Yale University Logo" fill style={{objectFit: "cover"}} />
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[330px] h-[220px]">
                        <Image src="/images/logoCambridge.png" alt="University of Cambridge Logo" fill style={{objectFit: "cover"}} />
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[330px] h-[185.74px]">
                        <Image src="/images/logoPrinceton.png" alt="Princeton University Logo" fill style={{objectFit: "cover"}} />
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[330px] h-[114.94px]">
                        <Image src="/images/logoChicago.png" alt="University of Chicago Logo" fill style={{objectFit: "cover"}}/>
                    </div>
                </div>

            </Marquee>
        </div>
);
}