'use client'
import { Progress } from "antd"
import Image from "next/image"
import { IAuth } from "../mobile/mobile-auth"
import { FC } from "react"
import useCountdownTimer from "@/app/hooks/usecountdown"

export const DesktopAuth: FC<IAuth> = ({ login }) => {
    const timeLeft = useCountdownTimer(new Date('2024-12-31T23:59:59'));
    return (
        <main className="sm:hidden flex min-h-screen flex-col items-center gap-[80px] p-10 bg-[url('/backdrop.png')] bg-center">
        <div className="flex items-center w-[421px] h-[52px] pl-3 border border-[#EDEDED] rounded-lg bg-[url('/ads-bg-img.png')] bg-right bg-no-repeat">
          <Image 
            src="/close-icon.png"
            width={12}
            height={12}
            alt="Close Icon"
            className="cursor-pointer"
          />
          <h3 className="text-[10px] font-[400] ml-[8px]">A chance to buy Kar tokens at half of the launch price</h3>
        </div>

        <div>
          <div className="flex flex-col gap-[20px] p-8 w-[450px] h-[120px] bg-[#101010] rounded-tr-[8px] rounded-tl-[8px]">
            <Image 
              src="/logo.png"
              width={12}
              height={19}
              alt="Logo"
              className="cursor-pointer"
            />
            <h2 className="text-[20px] font-[600]">Token Sale DApp</h2>
          </div>
          <div className="flex flex-col gap-[12px] p-6 w-[450px] bg-[#101010] mt-[1px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-[500]">Presale Progress</h2>
              <div className="flex items-center gap-[10px]">
                <h3 className="text-[12px] font-[400] text-[#FFFFFF]/75">$5,784,043.78</h3>
                <Image 
                  src="/currency-divider.png"
                  width={3.9}
                  height={3.9}
                  alt="currency-divider"
                  className="cursor-pointer"
                />
                <h3 className="text-[12px] font-[400] text-[#08E04A]">80%</h3>
              </div>
            </div>
            <Progress percent={80} showInfo={false} strokeColor="green" trailColor="#303030" size="small" />
            <div className="flex gap-[10px] items-center">
              <h2 className="text-[12px] font-[400] text-[#FFFFFF]/75">SALE ENDS IN</h2>
              <div className="flex items-center gap-[10px] text-[16px] font-[400] text-[#FFFFFF]/75">
                <span>{timeLeft.days}d</span>
                <span>{timeLeft.hours}h</span>
                <span>{timeLeft.minutes}m</span>
                <span>{timeLeft.seconds}s</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] p-6 w-[450px] bg-[#101010] rounded-br-[8px] rounded-bl-[8px] mt-[1px]">
            <h2 className="text-[12px] font-[400p] text-[#FF3636]">To launch the app, you need to connect your wallet first, this is to enable us provide you a seamless experience.</h2>
            <button onClick={login} className=" flex items-center justify-center gap-[10px] w-[100%] h-[64px] rounded-lg bg-[#000000] text-[12px] font-[700] text-[#08E04A] border-0 border-r-[3px] border-e-[#08E04A]">
              <Image 
                src="/button-icon.png"
                width={16}
                height={16}
                alt="Button Icon"
              />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </main>
    )
}