'use client'

import useCountdownTimer from "@/app/hooks/usecountdown";
import { BsArrowUp } from "react-icons/bs"


export const TransactionStat = () => {
    const timeLeft = useCountdownTimer(new Date('2024-12-31T23:59:59'));
    return (
        <div className="w-[100%] flex flex-col gap-[30px] p-5">
            <h3 className="text-[16px] font-[600]">Transactions</h3>
            <div className="flex gap-[30px]">
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[10px] font-[400] text-[#FFFFFF]/70">AMOUNT SPENT</h4>
                    <div className="text-[15px] font-[500] flex">
                        <span>21,325</span>
                        <span className="text-[10px] font-[300] mt-[1px]">.45</span>
                        <span className="ml-[3px] text-[#FFFFFF]/70">USDT</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[10px] font-[400] text-[#FFFFFF]/70">TOKENS BOUGHT</h4>
                    <div className="text-[15px] font-[500] flex">
                        <span>00.00345</span>
                        <span className="ml-[3px] text-[#FFFFFF]/70">KAR</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[10px] font-[400] text-[#FFFFFF]/70">AMOUNT SPENT</h4>
                    <div className="text-[15px] font-[500] flex items-center">
                        <span>345</span>
                        <span className="text-[10px] font-[300] mt-[-6px]">.45</span>
                        <span className="ml-[3px] text-[#FFFFFF]/70">USDT</span>
                        <BsArrowUp className="text-[10px] font-[300] text-[#08E04A] ml-[4px]" />
                        <span className="text-[10px] font-[300] text-[#08E04A] ml-[4px]">100%</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[10px] font-[400] text-[#FFFFFF]/70">EST. Claim Time</h4>
                    <div className="flex items-center gap-[6px] text-[16px] font-[500] text-[#FFFFFF]">
                        <span>{timeLeft.days}d</span>
                        <span>{timeLeft.hours}h</span>
                        <span>{timeLeft.minutes}m</span>
                        <span>{timeLeft.seconds}s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}