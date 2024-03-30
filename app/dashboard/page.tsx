'use client'
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import { RiHandCoinLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { PiCopySimpleLight } from "react-icons/pi";
import { BsArrowUp } from "react-icons/bs";
import { IoLink } from "react-icons/io5";
import { Progress } from "antd";
import { IoMenu } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import useUseraddress from "../hooks/useUserAddress";
import { Sidebar } from "../components/desktop/sidebar";
import { StatsBoard } from "../components/desktop/stats-board";
import { TransactionStat } from "../components/desktop/transaction-stat";
import useCountdownTimer from "../hooks/usecountdown";

const SocialLogo = [
    "/discord.png",
    "/telegram.png",
    "/twitter.png",
]

const SocialLogo2 = [
    "/discord.png",
    "/telegram.png",
    "/whatsapp.png",
    "/twitter.png",
]

const tableData = [
    {
        amount: "$67,263",
        action: 'BUY',
        tokens_got: '5,462',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$53,718",
        action: 'BUY',
        tokens_got: '517',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$12,787",
        action: 'BUY',
        tokens_got: '6,954',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$18,410",
        action: 'BUY',
        tokens_got: '3,184',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$66,121",
        action: 'BUY',
        tokens_got: '4,010',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$34,652",
        action: 'BUY',
        tokens_got: '786',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$18,410",
        action: 'BUY',
        tokens_got: '3,184',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$66,121",
        action: 'BUY',
        tokens_got: '4,010',
        date: '02 FEB  •  9:23:00'
    },
    {
        amount: "$34,652",
        action: 'BUY',
        tokens_got: '786',
        date: '02 FEB  •  9:23:00'
    }
]

export default function Dashbaord() {
    const timeLeft = useCountdownTimer(new Date('2024-12-31T23:59:59'));
    const [isContribute, setIsContribute] = useState<boolean>(false)
    const { getAddress } = useUseraddress()

    const userAddress = getAddress()

    return (
        <Fragment>
            <main className="sm:hidden flex min-h-screen items-center">
              <Sidebar />
              <div className="w-[100%] h-screen flex flex-col gap-[30px] py-[30px] px-[50px]">
                <div className="flex justify-between">
                    <h2 className="text-[20px] font-[600]">Token Sale DApp</h2>
                    <div className="flex items-center justify-center gap-[8px] bg-[#101010] py-[7px] px-[13px] rounded-[4px] text-[12px] font-[400]">
                        <Image 
                            src="/ethereum.png"
                            width={16}
                            height={16}
                            alt="ethereum logo"
                        />
                        <h3>Wallet Connected: {userAddress}</h3>
                        <FaChevronDown />
                    </div>
                </div>
                <div className="flex gap-[10px] overflow-y-auto">
                    <div className="w-[65%]">
                        <StatsBoard />
                        <div className="w-[100%] bg-[#101010] flex flex-col justify-between p-3 rounded-[8px] mt-[15px]">
                            <TransactionStat />
                            <table className="flex flex-col w-[100%] bg-[#000000] px-[3px] rounded-[4px] h-[355px]">
                                <thead className="text-[10px] font-[400] py-[8px] px-[30px] text-[#FFFFFF]/70">
                                    <tr className=" flex items-center justify-between">
                                        <th>Amount - USDT</th>
                                        <th>Action</th>
                                        <th>Tokens Got</th>
                                        <th>Date</th>
                                        <th>Transaction Link</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[12px] w-[100%] bg-[#101010] px-[30px] h-[315px] overflow-y-scroll">
                                    {
                                        tableData.map((data, index) => ( 
                                            <tr key={index} className="flex items-center justify-between py-[14px]">
                                                <td className="font-[700] text-left w-[72px]">{data.amount}</td>
                                                <td className="font-[400] text-[#049330] w-[72px] ml-[20px] text-left">{data.action}</td>
                                                <td className="flex items-start w-[72px] font-[400] ml-[-10px]">{data.tokens_got}<span className="font-[400] text-[#FFFFFF]/70 ml-[2px]">KAR</span></td>
                                                <td className="font-[400] text-[#FFFFFF]/70 ml-[-12px]">{data.date}</td>
                                                <td className="mr-[20px]"><IoLink className="text-[#FFFFFF]/70" /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-[35%] bg-[#101010] h-[770px] rounded-[4px] px-3 py-5">
                        <div className="flex flex-col gap-[12px] px-4 py-6 w-[100%] bg-[#000000] rounded-[8px]">
                            <div className="flex items-center justify-between">
                                <h2 className="text-[12px] font-[500]">Presale Progress</h2>
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
                            <div className="flex flex-col gap-[10px] items-center justify-center">
                                <h2 className="text-[10px] font-[400] text-[#FFFFFF]/75">SALE ENDS IN</h2>
                                <div className="flex items-center gap-[10px] text-[16px] font-[400] text-[#FFFFFF]/75">
                                    <span>{timeLeft.days}d</span>
                                    <span>{timeLeft.hours}h</span>
                                    <span>{timeLeft.minutes}m</span>
                                    <span>{timeLeft.seconds}s</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[12px] px-4 py-6 w-[100%] bg-[#000000] border border-[#282828] rounded-tl-[8px] rounded-tr-[8px] mt-[20px]">
                            <h3 className="text-16 font-[600]">Contribute</h3>
                            <div className="flex items-center justify-between mt-[18px]">
                                <h5 className="text-[12px] font-[400]">Amount</h5>
                                <div className="flex items-center gap-[5px]">
                                    <Image 
                                        src="/usdt-logo.png"
                                        width={12}
                                        height={12}
                                        alt="usdt logo"
                                    />
                                    <span className="text-[10px] font-[400] text-[#FFFFFF]/70">BALANCE: 5,784,043.78</span>
                                </div>
                            </div>
                            <div className="flex gap-[2px] mt-[-10px]">
                                <div className="flex items-center w-[65%] h-[58px] pl-[20px] bg-[#101010] rounded-tl-[8px] rounded-bl-[8px]">
                                    <input 
                                        value="12,345"
                                        className="w-[45%] bg-[#101010] text-[24px]"
                                    />
                                    <span className="mt-[-10px] text-[#FFFFFF]/70">.00</span>
                                    <span className="text-[10px] font-[400] text-[#08E04A] ml-[10px] cursor-pointer">MAX</span>
                                </div>
                                <div className="w-[35%] h-[58px] bg-[#101010] flex items-center gap-[5px] pl-[10px] rounded-tr-[8px] rounded-br-[8px]">
                                    <Image 
                                        src="/usdt-logo.png"
                                        width={20}
                                        height={20}
                                        alt="usdt logo"
                                    />
                                    <span className="text-[12px] font-[400] text-[#FFFFFF]/70">USDT</span>
                                </div>
                            </div>
                            <h3 className="text-[12px] font-[400] text-[#FFFFFF]/70">You Get</h3>
                            <div className="flex gap-[2px]">
                                <div className="w-[65%] text-[24px] font-[400] h-[58px] bg-[#101010] flex items-center pl-[20px] text-[#FFFFFF]/70 rounded-tl-[8px] rounded-bl-[8px]">
                                    <span>2000</span>
                                </div>
                                <div className="w-[35%] h-[58px] bg-[#101010] flex items-center gap-[5px] pl-[10px] rounded-tr-[8px] rounded-br-[8px]">
                                    <Image 
                                        src="/logo-rounded.png"
                                        width={20}
                                        height={20}
                                        alt="usdt logo"
                                    />
                                    <span className="text-[12px] font-[400] text-[#FFFFFF]/70">KAR</span>
                                </div>
                            </div>
                            <button className="w-[100%] h-[48px] bg-[#08E04A] text-[12px] font-[700] text-[#000000] rounded-[8px] mt-[10px]">
                                Buy
                            </button>
                            <h3 className="text-[10px] font-[400] w-[100%] mt-[20px] text-[#FFFFFF]/70">
                                By contributing to the presale you acknowledge and accept these <span className="text-[#FFFFFF] underline cursor-pointer">terms and conditions.</span>
                            </h3>
                        </div>
                        <div className="flex items-center w-[100%] pl-3 h-[86px] border border-[#282828] rounded-bl-[8px] bg-[#000000] rounded-br-[8px] bg-[url('/ads-bg-img.png')] bg-right bg-no-repeat bg-[length:120px_80px]">
                            <h3 className="w-[173px] text-[12px] font-[400] ml-[8px] leading-[18px]">A chance to buy Kar tokens at half of the launch price</h3>
                        </div>
                        <div className="flex items-center w-[100%] justify-between mt-[15px]">
                            <span className="w-[130px] h-[36px] text-[12px] font-[400] text-[#FFFFFF]/30">Copyright © 2024 Kar. All rights reserved.</span>
                            <span className="w-[110px] h-[18px] text-[12px] font-[400] text-[#FFFFFF]/30">Gaziantep, Türkiye</span>
                        </div>
                    </div>
                </div>
              </div>
            </main>

            <main className="mmd:hidden flex flex-col min-h-screen py-[30px] px-[15px]">
              <div className="w-[100%] flex items-center justify-between px-[8px]">
                <Image 
                    src="/logo.png"
                    width={13}
                    height={21}
                    alt="logo"
                />
                <div className="flex items-center gap-[10px]">
                    <div className="flex items-center justify-center gap-[8px] bg-[#101010] py-[7px] px-[13px] rounded-[4px] text-[12px] font-[400]">
                        <Image 
                            src="/ethereum.png"
                            width={16}
                            height={16}
                            alt="ethereum logo"
                        />
                        <h3>Ox781883782...8eB2</h3>
                        <FaChevronDown />
                    </div>
                    <IoMenu className="text-[32px]" />
                </div>
              </div>
              {
                isContribute === false ? (
                    <div className="overflow-y-auto">
                        <h2 className="text-[24px] font-[600] mt-[40px] pl-[8px]">Token Sale DApp</h2>
                        <div className="w-[100%] bg-[#101010] h-[257px] rounded-[8px] px-3 py-4 mt-[30px]">
                            <div className="flex flex-col gap-[12px] px-4 py-6 w-[100%] bg-[#000000] rounded-[8px]">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-[14px] font-[500]">Presale Progress</h2>
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
                                    <div className="flex items-center gap-[10px] text-[20px] font-[400] text-[#FFFFFF]">
                                        <span>{timeLeft.days}d</span>
                                        <span>{timeLeft.hours}h</span>
                                        <span>{timeLeft.minutes}m</span>
                                        <span>{timeLeft.seconds}s</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsContribute(true)} className=" flex items-center justify-center gap-[10px] w-[100%] h-[48px] bg-[#08E04A] text-[16px] font-[700] text-[#000000] rounded-[8px] mt-[10px]">
                                <span>Contribute</span>
                                <BsArrowRight className="text-[16px] font-[400]" />
                            </button>
                        </div>
                        <div className="w-[100%] h-[230px] bg-[#101010] flex flex-col justify-between px-4 py-8 rounded-tl-[8px] rounded-tr-[8px] mt-[30px]">
                            <h2 className="text-[20px] font-[600]">Referrals</h2>
                            <div className="grid grid-cols-2 gap-2 mt-[15px]">
                                <div className="flex flex-col gap-[10px]">
                                    <span className="text-[12px] font-[400] text-[#FFFFFF]/70">BONUS EARNED</span>
                                    <div className="text-[28px] font-[300] flex">
                                        <span>$345</span>
                                        <span className="text-[15px] font-[300] mt-[4px]">.45</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <span className="text-[12px] font-[400] text-[#FFFFFF]/70">BONUS RECEIVED</span>
                                    <span className="text-[28px] font-[300]">$0</span>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <span className="text-[12px] font-[400] text-[#FFFFFF]/70">TOTAL REFERRALS</span>
                                    <span className="text-[28px] font-[300]">345</span>
                                </div>
                                <button className="flex mt-[20px] items-center jsutify-center w-[124px] h-[32px] px-[14px] py-[7px] border text-[12px] font-[400] rounded-xl">
                                    Request Payout
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col w-[100%] bg-[#101010] px-5 py-8 justify-between gap-[10px] mt-[3px]">
                            <h4 className="text-[20px] font-[600]">Start earning extra money!</h4>
                            <h6 className="text-[12px] font-[400] text-[#FFFFFF]/50">
                                Copy your unique referral code and earn 2.5% commissions from every investment made by your referred investors.
                            </h6>
                            <div className="w-[100%] bg-[#000000] h-[32px] rounded-[4px] flex items-center justify-between pl-[8px] pr-[14px] cursor-pointer">
                                <h5 className="text-[14px] font-[400] text-[#FFFFFF]/70">https://kar.com/78236-tube...</h5>
                                <div className="flex items-center gap-[3px]">
                                    <PiCopySimpleLight className="text-[12px] text-[#08E04A]" />
                                    <h5 className="text-[12px] text-[#08E04A]">Copy</h5>
                                </div>
                            </div>
                            <div className="w-[100%] flex gap-[10px] items-center cursor-pointer">
                                <div className="flex items-center gap-[10px] mt-[15px]">
                                    <h4 className="text-[14px] font-[400] text-[#FFFFFF]/50">Share on</h4>
                                    {
                                        SocialLogo2.map((img, index) => (
                                            <Image 
                                                className="w-[20px] h-[20px]"
                                                key={index}
                                                src={img}
                                                width={20}
                                                height={20}
                                                alt="socials"
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div  className="w-[100%] bg-[#101010] flex flex-col justify-between rounded-bl-[8px] rounded-br-[8px]">
                            <div className="w-[100%] flex flex-col gap-[30px] p-5">
                                <h3 className="text-[20px] font-[600]">Transactions</h3>
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[10px]">
                                        <h4 className="text-[12px] font-[400] text-[#FFFFFF]/70">AMOUNT SPENT</h4>
                                        <div className="text-[28px] font-[300] flex">
                                            <span>21,325</span>
                                            <span className="text-[10px] font-[300] mt-[10px]">.45</span>
                                            <span className="ml-[3px] text-[#FFFFFF]/70">USDT</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <h4 className="text-[12px] font-[400] text-[#FFFFFF]/70">TOKENS BOUGHT</h4>
                                        <div className="text-[28px] font-[300] flex">
                                            <span>00.00345</span>
                                            <span className="ml-[3px] text-[#FFFFFF]/70">KAR</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <h4 className="text-[12px] font-[400] text-[#FFFFFF]/70">AMOUNT SPENT</h4>
                                        <div className="text-[28px] font-[300] flex items-center">
                                            <span>345</span>
                                            <span className="text-[10px] font-[300] mt-[-6px]">.45</span>
                                            <span className="ml-[3px] text-[#FFFFFF]/70">USDT</span>
                                            <BsArrowUp className="text-[14px] font-[300] text-[#08E04A] ml-[4px]" />
                                            <span className="text-[14px] font-[300] text-[#08E04A] ml-[4px]">100%</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <h4 className="text-[12px] font-[400] text-[#FFFFFF]/70">EST. Claim Time</h4>
                                        <div className="flex items-center gap-[10px] text-[28px] font-[300] text-[#FFFFFF]">
                                            <span>{timeLeft.days}d</span>
                                            <span>{timeLeft.hours}h</span>
                                            <span>{timeLeft.minutes}m</span>
                                            <span>{timeLeft.seconds}s</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="flex flex-col w-[100%] border-[#000000] rounded-[4px] h-[355px] px-[5px]">
                                <tbody className="text-[12px] w-[100%] bg-[#000000]/40 border-[#000000] px-[10px] h-[355px] overflow-y-scroll">
                                    {
                                        tableData.map((data, index) => ( 
                                            <tr key={index} className="flex w-[100%] items-center border-1 border-b-[#151515] justify-between py-[14px]">
                                                <td className="font-[700] text-left flex flex-col">
                                                    <span className="text-[16px]">{data.amount}</span>
                                                    <span className="text-[12px] text-[#FFFFFF]/70 mt-[2px]">{data.date}</span>
                                                </td>
                                                <td className="flex flex-col items-start w-[72px] font-[400] ml-[-10px]">
                                                    <div className="text-[16px]">
                                                    <span>{data.tokens_got}</span><span className="font-[400] text-[#FFFFFF]/70 ml-[2px]">KAR</span>
                                                    </div>
                                                    <span className="mt-[2px] text-[12px] text-[#049330]">{data.action}</span>
                                                </td>
                                                <td className=" flex items-center justify-center mr-[20px] w-[24px] h-[24px] bg-[#2B2B2B] rounded-[4px]">
                                                    <IoLink className="text-[#FFFFFF]/70" />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <>
                        <div onClick={() => setIsContribute(false)} className="flex items-center gap-[4px] cursor-pointer text-[14px] font-[400] text-[#08E04A] mt-[20px]">
                            <MdKeyboardArrowLeft className="text-[16px]" />
                            <span>Back</span>
                        </div>
                        <div className="flex flex-col gap-[12px] px-2 py-6 w-[100%] rounded-tl-[8px] rounded-tr-[8px]">
                                <h3 className="text-[29px] font-[600]">Contribute</h3>
                                <div className="flex items-center justify-between mt-[18px]">
                                    <h5 className="text-[14px] font-[400]">Amount</h5>
                                    <div className="flex items-center gap-[5px]">
                                        <Image 
                                            src="/usdt-logo.png"
                                            width={12}
                                            height={12}
                                            alt="usdt logo"
                                        />
                                        <span className="text-[12px] font-[400] text-[#FFFFFF]/70">BALANCE: 5,784,043.78</span>
                                    </div>
                                </div>
                                <div className="flex gap-[2px] mt-[-10px]">
                                    <div className="flex items-center w-[65%] h-[58px] pl-[20px] bg-[#101010] rounded-tl-[8px] rounded-bl-[8px]">
                                        <input 
                                            value="12,345"
                                            className="w-[45%] bg-[#101010] font-[400] text-[28px]"
                                        />
                                        <span className="mt-[-10px] text-[#FFFFFF]/70">.00</span>
                                        <span className="text-[10px] font-[400] text-[#08E04A] ml-[10px] cursor-pointer">MAX</span>
                                    </div>
                                    <div className="w-[35%] h-[58px] bg-[#101010] flex items-center gap-[5px] pl-[10px] rounded-tr-[8px] rounded-br-[8px]">
                                        <Image 
                                            src="/usdt-logo.png"
                                            width={20}
                                            height={20}
                                            alt="usdt logo"
                                        />
                                        <span className="text-[12px] font-[400] text-[#FFFFFF]/70">USDT</span>
                                    </div>
                                </div>
                                <h3 className="text-[14px] font-[400] text-[#FFFFFF]/70">You Get</h3>
                                <div className="flex gap-[2px]">
                                    <div className="w-[65%] text-[28px] font-[400] h-[58px] bg-[#101010] flex items-center pl-[20px] text-[#FFFFFF]/70 rounded-tl-[8px] rounded-bl-[8px]">
                                        <span>2000</span>
                                    </div>
                                    <div className="w-[35%] h-[58px] bg-[#101010] flex items-center gap-[5px] pl-[10px] rounded-tr-[8px] rounded-br-[8px]">
                                        <Image 
                                            src="/logo-rounded.png"
                                            width={20}
                                            height={20}
                                            alt="usdt logo"
                                        />
                                        <span className="text-[12px] font-[400] text-[#FFFFFF]/70">KAR</span>
                                    </div>
                                </div>
                                <button className="w-[100%] h-[48px] bg-[#08E04A] text-[16px] font-[700] text-[#000000] rounded-[8px] mt-[10px]">
                                    Buy
                                </button>
                                <h3 className="text-[12px] font-[400] w-[100%] mt-[20px] text-[#FFFFFF]/70">
                                    By contributing to the presale you acknowledge and accept these <span className="text-[#FFFFFF] underline cursor-pointer">terms and conditions.</span>
                                </h3>
                                <div className="flex items-center w-[100%] pl-3 h-[86px] border border-[#282828] bg-[#000000] rounded-[8px] bg-[url('/ads-bg-img.png')] bg-right bg-no-repeat bg-[length:120px_80px]">
                                    <h3 className="w-[173px] text-[12px] font-[400] ml-[8px] leading-[18px]">A chance to buy Kar tokens at half of the launch price</h3>
                                </div>
                                <div className="flex items-center w-[100%] justify-between mt-[15px]">
                                    <span className="w-[130px] h-[36px] text-[12px] font-[400] text-[#FFFFFF]/30">Copyright © 2024 Kar. All rights reserved.</span>
                                    <span className="w-[110px] h-[18px] text-[12px] font-[400] text-[#FFFFFF]/30">Gaziantep, Türkiye</span>
                                </div>
                        </div>
                    </>
                )
              }

            </main>
        </Fragment>
    )
}