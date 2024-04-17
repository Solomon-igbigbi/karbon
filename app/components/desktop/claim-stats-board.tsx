"use client";

import ArrowBlackIcon from "@/public/arrow-black";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

const SocialLogo2 = [
  "/discord.png",
  "/telegram.png",
  "/whatsapp.png",
  "/twitter.png",
];

export const ClaimStatsBoard = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className=" bg-[#101010] flex flex-col px-8 sm:px-4 py-12 rounded-tl-[8px] rounded-bl-[8px]">
        <div className="flex items-center justify-between sm:flex-col sm:gap-8">
          <div className="flex flex-col gap-[10px] w-1/4 sm:w-full">
            <span className="text-[10px] font-[400] text-[#FFFFFF]/70">
              TOKENS BOUGHT
            </span>
            <div className="text-[28px] font-[300] flex ">
              <span>
                00.00345{" "}
                <span className="text-[#FFFFFF80] opacity-50">KARBON</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-1/4 sm:w-full">
            <span className="text-[10px] font-[400] text-[#FFFFFF]/70">
              AMOUNT SPENT
            </span>
            <span className="text-[28px] font-[300]">
              21,325<sup className="text-[15px] font-[300] mt-[4px]">.45</sup>{" "}
              <span className="text-[#FFFFFF80] opacity-50">USDT</span>
            </span>
          </div>
          <div className="flex flex-col gap-[10px] w-1/4 sm:w-full">
            <span className="text-[10px] font-[400] text-[#FFFFFF]/70">
              TOKEN VALUE
            </span>
            <span className="text-[28px] font-[300]">
              21,325
              <sup className="text-[15px] font-[300] mt-[4px]">.45</sup>{" "}
              <span className="text-[#FFFFFF80] opacity-50">USDT</span>
            </span>
          </div>
          <div className="flex flex-col gap-[10px] w-1/4 sm:w-full">
            <span className="text-[10px] font-[400] text-[#FFFFFF]/70">
              EST. CLAIM TIME
            </span>
            <span className="text-[28px] font-[300]">1d 22h 45m 34s</span>
          </div>
        </div>
        <motion.button
          whileHover={{scale: 1.05}}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" w-[25%] h-[45px] text-[12px] bg-[#08E04A] font-semibold text-center text-black px-[14px] py-[7px] font-[400] rounded-sm mt-8 sm:w-[95%] sm:m-auto sm:flex sm:justify-center sm:items-center sm:gap-1"
          onClick={() => router.push("/referrals")}
        >
          Claim Tokens
          <div className="hidden sm:block">
            <ArrowBlackIcon />
          </div>
        </motion.button>
      </div>
    </div>
  );
};
