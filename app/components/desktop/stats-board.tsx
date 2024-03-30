'use client'
import Image from "next/image"
import { PiCopySimpleLight } from "react-icons/pi"

const SocialLogo2 = [
    "/discord.png",
    "/telegram.png",
    "/whatsapp.png",
    "/twitter.png",
]

export const StatsBoard = () => {
    return (
        <div className="flex gap-[2px]">
            <div className="w-[55%] h-[230px] bg-[#101010] flex flex-col justify-between px-4 py-8 rounded-tl-[8px] rounded-bl-[8px]">
                <h2 className="text-[16px] font-[600]">Referrals</h2>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-[10px] font-[400] text-[#FFFFFF]/70">BONUS EARNED</span>
                        <div className="text-[28px] font-[300] flex">
                            <span>$345</span>
                            <span className="text-[15px] font-[300] mt-[4px]">.45</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-[10px] font-[400] text-[#FFFFFF]/70">BONUS RECEIVED</span>
                        <span className="text-[28px] font-[300]">$0</span>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-[10px] font-[400] text-[#FFFFFF]/70">TOTAL REFERRALS</span>
                        <span className="text-[28px] font-[300]">345</span>
                    </div>
                </div>
                <button className="flex items-center jsutify-center w-[124px] h-[32px] px-[14px] py-[7px] border text-[12px] font-[400] rounded-xl">
                    Request Payout
                </button>
            </div>
            <div className="flex flex-col w-[45%] bg-[#101010] px-5 py-8 justify-between rounded-tr-[8px] rounded-br-[8px]">
                <h4 className="text-[12px] font-[600]">Start earning extra money!</h4>
                <h6 className="text-[10px] font-[400] text-[#FFFFFF]/50">
                    Copy your unique referral code and earn 2.5% commissions from every investment made by your referred investors.
                </h6>
                <div className="w-[100%] bg-[#000000] h-[32px] rounded-[4px] flex items-center justify-center gap-[5px] cursor-pointer">
                    <h5 className="text-[12px] font-[400] text-[#FFFFFF]/70">https://kar.com/78236-tube...</h5>
                    <PiCopySimpleLight className="text-[10px] text-[#08E04A]" />
                    <h5 className="text-[10px] text-[#08E04A]">Copy</h5>
                </div>
                <div className="w-[100%] flex gap-[10px] items-center cursor-pointer">
                    <div className="flex items-center gap-[10px] mt-[15px]">
                        <h4 className="text-[12px] font-[400] text-[#FFFFFF]/50">Share on</h4>
                        {
                            SocialLogo2.map((img, index) => (
                                <Image 
                                    className="w-[13px] h-[14px]"
                                    key={index}
                                    src={img}
                                    width={12}
                                    height={12}
                                    alt="socials"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}