import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import CancelIcon from "@/public/cancel";
import PendingSmallIcon from "@/public/pending-small";
import EthereumIcon from "@/public/ethereum";
import CopyIcon from "@/public/copy";
import PaidIcon from "@/public/paid";

export default function TransactionPendingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (action: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="bg-black/70 absolute w-[100vw] h-[100vh] flex items-center justify-center top-0 text-center">
          <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            className="bg-[#101010] text-white p-8 w-[400px] rounded-lg"
          >
            <div className="flex justify-between">
              <span className="text-[14px]">Payout Request</span>
              <button onClick={() => onClose(false)}>
                <CancelIcon />
              </button>
            </div>
            <div className="mt-6">
              <span className="text-[35px] text-[#FFCC00]">
                345 <span className="opacity-50">USDT</span>
              </span>
              <span className="flex text-[12px] opacity-50 items-center gap-1 justify-center">
                <PendingSmallIcon /> Pending
              </span>
            </div>
            <div className="bg-[#000000] text-[12px] flex items-center justify-between p-2 rounded-md mt-4 mb-6">
              <EthereumIcon />
              <span className="text-[11px]">
                Ox781883782iw83u94038u299g8eB2jk38u...
              </span>
              <span className="flex cursor-pointer items-center justify-center text-[#08E04A]">
                <CopyIcon />
                copy
              </span>
            </div>
            <div className="absolute w-[410px] bg-black top-50 right-[39%] h-[2px]"></div>
            <div className="p-3 border-[0.1px] rounded-md flex flex-col gap-3 text-left text-[12px] mt-12">
              <span className="opacity-40">Transaction Link</span>
              <span>Ox781883782iw83u94038u299g8eB2</span>
            </div>
            <motion.button
              whileHover={{scale: 1.05}}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-[#000000] w-full mt-5 p-5 border-r-[1px] border-r-[#08E04A] rounded-[4px]"
            >
              <span className="text-[10px] text-[#08E04A] flex justify-center items-center gap-1">
                <PaidIcon />
                Mark as Paid
              </span>
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
