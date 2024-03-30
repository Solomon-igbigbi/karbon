'use client'
import useCountdownTimer from "@/app/hooks/usecountdown"
import { Progress } from "antd"
import Image from "next/image"
import { FC } from "react"

export interface IAuth {
    login: () => void
}

export const MobileAuth: FC<IAuth> = ({ login }) => {
  const timeLeft = useCountdownTimer(new Date('2024-12-31T23:59:59'));
    return (
        <main className="mmd:hidden flex min-h-screen flex-col items-center p-3 overflow-y-auto pb-[50px]">
        <div className="flex flex-col gap-[40px] w-[100%] p-2 h-[120px] mt-[20px] bg-[#000000]">
          <Image 
            src="/logo.png"
            width={13}
            height={19}
            alt="Logo"
            className="cursor-pointer"
          />
          <h2 className="text-[24px] font-[600] text-[#FFFFFF]">Token Sale DApp</h2>
        </div>
        <div className="flex flex-col gap-[12px] px-2 py-6 w-[100%] bg-[#101010] mt-[20px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-[500] text-[#FFFFFF]">Presale Progress</h2>
            <div className="flex items-center gap-[10px]">
              <h3 className="text-[14px] font-[400] text-[#FFFFFF]/75">$5,784,043.78</h3>
              <Image 
                src="/currency-divider.png"
                width={3.9}
                height={3.9}
                alt="currency-divider"
                className="cursor-pointer"
              />
              <h3 className="text-[14px] font-[400] text-[#08E04A]">80%</h3>
            </div>
          </div>
          <Progress percent={80} showInfo={false} strokeColor="green" trailColor="#303030" size="small" />
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <h2 className="text-[12px] font-[400] text-[#FFFFFF]/75">SALE ENDS IN</h2>
            <div className="flex items-center gap-[10px] text-[20px] font-[400] text-[#FFFFFF]/75">
              <span>{timeLeft.days}d</span>
              <span>{timeLeft.hours}h</span>
              <span>{timeLeft.minutes}m</span>
              <span>{timeLeft.seconds}s</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] px-5 py-6 w-[100%] bg-[#101010] rounded-br-[8px] rounded-bl-[8px] mt-[1px]">
          <h2 className="text-[14px] font-[400p] text-[#FF3636]">To launch the app, you need to connect your wallet first, this is to enable us provide you a seamless experience.</h2>
          <button onClick={login} className=" flex items-center justify-center gap-[10px] w-[100%] h-[64px] rounded-lg bg-[#000000] text-[16px] font-[700] text-[#08E04A] border-0 border-r-[3px] border-e-[#08E04A]">
            <Image 
              src="/button-icon.png"
              width={21}
              height={21}
              alt="Button Icon"
            />
            <span>Connect Wallet</span>
          </button>
        </div>
        <div className="flex items-center w-[90%] pl-3 h-[86px] border border-[#EDEDED] rounded-lg bg-[url('/ads-bg-img.png')] bg-right bg-no-repeat bg-[length:120px_80px] mt-[40px]">
          <h3 className="w-[173px] text-[12px] font-[400] ml-[8px] leading-[18px] text-[#FF3636]">A chance to buy Kar tokens at half of the launch price</h3>
        </div>
        <div className="flex items-center w-[90%] justify-between mt-[40px]">
          <span className="w-[130px] h-[36px] text-[12px] font-[400] text-[#FFFFFF]/70">Copyright © 2024 Kar. All rights reserved.</span>
          <span className="w-[110px] h-[18px] text-[12px] font-[400] text-[#FFFFFF]/70">Gaziantep, Türkiye</span>
        </div>
      </main>
    )
} 