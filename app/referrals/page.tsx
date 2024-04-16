"use client";
import Image from "next/image";
import {Fragment, useEffect, useState} from "react";
import {GiTwoCoins} from "react-icons/gi";
import {RiHandCoinLine} from "react-icons/ri";
import {FaChevronDown} from "react-icons/fa6";
import {PiCopySimpleLight} from "react-icons/pi";
import {BsArrowUp} from "react-icons/bs";
import {IoLink} from "react-icons/io5";
import {Progress} from "antd";
import {IoMenu} from "react-icons/io5";
import {BsArrowRight} from "react-icons/bs";
import {MdKeyboardArrowLeft} from "react-icons/md";
// import useUseraddress from "../hooks/useUserAddress";
import {Sidebar} from "../components/desktop/sidebar";
import {StatsBoard} from "../components/desktop/stats-board";
import {TransactionStat} from "../components/desktop/transaction-stat";
import useCountdownTimer from "../hooks/usecountdown";
import {useAppSelector} from "../../redux/hooks";
import {useWeb3ModalAccount} from "@web3modal/ethers/react";
import {useAccount} from "wagmi";
import {ClaimStatsBoard} from "../components/desktop/claim-stats-board";
import {ReferalStatsBoard} from "../components/desktop/referal-stat-board";
import PendingTrxIcon from "@/public/pending-trx";
import PaidTrx from "@/public/paid-trx";

import PaidIcon from "@/public/paid";
import PendingSmallIcon from "@/public/pending-small";
import {motion} from "framer-motion";
import TransactionPendingModal from "../components/desktop/transaction-modal";
import TransactionPaidModal from "../components/desktop/transaction-paid";

const SocialLogo = ["/discord.png", "/telegram.png", "/twitter.png"];

const SocialLogo2 = [
  "/discord.png",
  "/telegram.png",
  "/whatsapp.png",
  "/twitter.png",
];

const tableData = [
  {
    amount: "Ox781883782iw83u94038u299g8eB2",
    action: "5,462",
    tokens_got: "5,462",
    refs: "5,462",
    tx: "",
    paid: false,
  },
  {
    amount: "Ox781883782iw83u94038u299g8eB2",
    action: "5,462",
    tokens_got: "5,462",
    refs: "5,462",
    tx: "",
    paid: false,
  },
  {
    amount: "Ox781883782iw83u94038u299g8eB2",
    action: "5,462",
    tokens_got: "5,462",
    refs: "5,462",
    tx: "",
    paid: true,
  },
  {
    amount: "Ox781883782iw83u94038u299g8eB2",
    action: "5,462",
    tokens_got: "5,462",
    refs: "5,462",
    tx: "",
    paid: true,
  },
  {
    amount: "Ox781883782iw83u94038u299g8eB2",
    action: "5,462",
    tokens_got: "5,462",
    refs: "5,462",
    tx: "",
    paid: false,
  },
];

export default function Dashbaord() {
  const timeLeft = useCountdownTimer(new Date("2024-12-31T23:59:59"));
  // const address = useAppSelector((state) => state.auth.value);
  const [isContribute, setIsContribute] = useState<boolean>(false);
  let userAddress = "";
  const {address, isConnecting, isDisconnected} = useAccount();

  const [openModal, setOpenModal] = useState(false);
  const [paidModal, setPaidModal] = useState(false);

  if (address) {
    userAddress = address.substring(0, 12) + "..." + address.slice(-4);
  }

  return (
    <Fragment>
      <main className="sm:hidden flex min-h-screen items-center">
        <Sidebar />
        <div className="w-[100%] h-screen flex flex-col gap-[30px] py-[30px] px-[50px]">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-[600]"></h2>
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
            <div className="w-full">
              <ReferalStatsBoard />
              <div className="w-[100%] bg-[#101010] flex flex-col justify-between p-3 rounded-[8px] mt-[15px]">
                <div className="px-8 py-4 flex gap-4 mb-4">
                  <button className="border-2 rounded-full text-[10px] p-2 px-8">
                    All Request
                  </button>
                  <motion.button
                    whileHover={{scale: 1.1}}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    className="bg-[#1c1d1d] rounded-full text-[10px] p-2 px-8 flex gap-[4px] items-center justify-center"
                  >
                    <PendingSmallIcon />
                    Pending Payout
                  </motion.button>
                  <motion.button
                    whileHover={{scale: 1.1}}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    className="bg-[#1c1d1d] rounded-full text-[10px] p-2 px-8 flex items-center justify-center gap-[4px]"
                  >
                    <PaidIcon />
                    Paid Bonuses
                  </motion.button>
                </div>
                <table className="flex flex-col w-[100%] bg-[#000000] px-[3px] rounded-[4px] h-[500px]">
                  <thead className="text-[10px] py-[8px] px-[30px] text-[#FFFFFF]/70">
                    <tr className=" flex items-center justify-between text-left">
                      <th className="w-[270px] text-md ">ALL REQUEST</th>
                      <th className="w-[150px] text-md">TOTAL REFERRALS</th>
                      <th className="w-[150px] text-md ">
                        REFFERALS CONTRIBUTION
                      </th>
                      <th className="w-[180px] text-md ">BONUS</th>
                      <th className="w-[70px] text-md ">TX</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] w-[100%] h-full overflow-y-scroll bg-[#0a0a0a]">
                    {tableData.map((data, index) => (
                      <>
                        <tr
                          key={index}
                          className={`flex items-center justify-between  py-[14px] text-left ${
                            !data.paid && "bg-[#1a1810]"
                          }`}
                        >
                          <td
                            className={`text-md w-[300px]  pl-[30px] ${
                              !data.paid && "text-[#FFCC00]"
                            }`}
                          >
                            {data.amount}
                          </td>
                          <td className="font-[400] text-md w-[150px] ">
                            {data.action}
                          </td>
                          <td className="font-[400] text-md w-[150px] ">
                            {data.action}{" "}
                            <span className="text-[#FFFFFF80] opacity-50">
                              USDT
                            </span>
                          </td>
                          <td className="font-[400] text-md w-[150px] ">
                            {data.action}{" "}
                            <span className="text-[#FFFFFF80] opacity-50">
                              USDT
                            </span>
                          </td>
                          <td
                            onClick={
                              data.paid
                                ? () => setPaidModal(true)
                                : () => setOpenModal(true)
                            }
                            className="cursor-pointer text-[#FFFFFF80] w-[125px]"
                          >
                            {data.paid ? <PaidTrx /> : <PendingTrxIcon />}
                          </td>
                        </tr>
                        <div className="border-b-[0.5px] border-[#ffffff0e]"></div>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TransactionPendingModal open={openModal} onClose={setOpenModal} />
      <TransactionPaidModal open={paidModal} onClose={setPaidModal} />
    </Fragment>
  );
}
