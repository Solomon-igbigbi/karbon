"use client";
import ArrowIcon from "@/public/arrow";
import PaidOutIcon from "@/public/paid-out";
import PasteIcon from "@/public/paste";
import PendingIcon from "@/public/pending";
import ReferalIcon from "@/public/referrals";
import USDTIcon from "@/public/usdt";
import UsersIcon from "@/public/users";
import {motion} from "framer-motion";

export const ReferalStatsBoard = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-[50%] h-[550px] flex flex-col gap-1">
        <div className="h-[300px]  bg-[#101010] rounded-t-xl p-8">
          <span className="mb-8">Referrals</span>
          <div className="flex flex-col mt-10 gap-10">
            <div className="flex justify-between">
              <div className="w-1/2  flex flex-col gap-2">
                <span className=" text-[12px] text-left opacity-50">
                  TOTAL USERS
                </span>
                <div className="flex gap-2 items-center">
                  <UsersIcon />
                  <span>21,325</span>
                </div>
              </div>
              <div className="w-1/2  flex flex-col gap-2">
                <span className=" text-[12px] opacity-50 text-left">
                  TOTAL USERS REFFERED
                </span>
                <div className="flex gap-2 items-center">
                  <ReferalIcon />
                  <span>21,325</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 flex flex-col gap-2">
                <span className="text-[12px] opacity-50 text-left">
                  TOTAL BONUS PAID OUT
                </span>
                <div className="flex gap-2 items-center">
                  <PaidOutIcon />
                  <span>21,325</span>
                </div>
              </div>
              <div className="w-1/2  flex flex-col gap-2">
                <span className="text-[12px] opacity-50 text-left">
                  PENDING BONUS REQUEST
                </span>
                <div className="flex gap-2 items-center">
                  <PendingIcon />
                  <span>21,325</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[250px]  bg-[#101010] rounded-b-xl p-8">
          <span className="mb-8">Token Claims</span>
          <div className="flex flex-col mt-12 gap-10">
            <div className="flex justify-between">
              <div className="w-1/2  flex flex-col gap-2">
                <span className=" text-[12px] text-left opacity-50">
                  AMOUNT TO CLAIM
                </span>
                <div className="flex gap-2 items-center">
                  <span>345</span>
                  <span className="opacity-50">USDT</span>
                </div>
              </div>
              <div className="w-1/2  flex flex-col gap-2">
                <span className=" text-[12px] opacity-50 text-left">
                  AMOUNT CLAIMED
                </span>
                <div className="flex gap-2 items-center">
                  <span>345</span>
                  <span className="opacity-50">USDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-4 h-[550px] ">
        <div className="h-[250px] rounded-xl bg-[#101010] p-8">
          <span className="mb-8">Investment</span>
          <div className="flex flex-col mt-8 gap-10">
            <div className="flex justify-between">
              <div className="w-1/2  flex flex-col gap-2">
                <span className=" text-[12px] text-left opacity-50">
                  TOTAL RAISE
                </span>
                <div className="flex items-center">
                  <span className="text-[35px]">$21,325</span>
                  <sup>.45</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[300px] rounded-xl  bg-[#101010] p-2">
          <div className="p-6 bg-[#000000] h-full">
            <span>Create Investment</span>
            <div className="flex flex-col gap-3 mt-4">
              <div className="relative">
                <input
                  className="bg-[#000000] text-[10px] border-[1px] border-[#282828] rounded-[8px] w-full h-[50px] p-2"
                  placeholder="Wallet Address"
                ></input>
                <span className="text-[10px] text-[#08E04A] absolute right-8 top-4 flex gap-1">
                  <PasteIcon />
                  Paste
                </span>
              </div>
              <div className="relative">
                <input
                  className="bg-[#000000] text-[10px] border-[1px] border-[#282828] rounded-[8px] w-full  h-[50px] p-2"
                  placeholder="Amount"
                ></input>
                <span className="text-[10px]  absolute right-8 top-4 flex items-center gap-1">
                  <USDTIcon />
                  USDT
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{scale: 1.05}}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-[#101010] w-1/2 mt-5 p-5 border-r-[1px] border-r-[#08E04A] rounded-[4px]"
            >
              <span className="text-[10px] text-[#08E04A] flex justify-center items-center gap-1">
                <ArrowIcon />
                Create Investment
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
