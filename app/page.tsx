'use client'
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
// import { Web3Auth } from "@web3auth/modal";
// import { CHAIN_NAMESPACES, IProvider,WALLET_ADAPTERS, WEB3AUTH_NETWORK } from "@web3auth/base";
import { useRouter } from "next/navigation";
// import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
// import Web3 from "web3";
import { MobileAuth } from "./components/mobile/mobile-auth";
import { DesktopAuth } from "./components/desktop/desktop-auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUseraddress from "./hooks/useUserAddress";
// import { setAuthValue } from "../redux/features/authSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { Progress } from "antd";
import useCountdownTimer from "./hooks/usecountdown";

// const clientId = 'BDUQ2Z7pztPGhssjh7oVakgILAIzBikjgkLBwnMp34X5AAiYBgETWwUr6XnS2-7mAKiDHiWeZPfNu2YhiYtLqY8';

// const chainConfig = {
//   chainNamespace: CHAIN_NAMESPACES.EIP155,
//   chainId: "0x1", // Please use 0x1 for Mainnet
//   rpcTarget: "https://rpc.ankr.com/eth",
//   displayName: "Ethereum Mainnet",
//   blockExplorer: "https://etherscan.io/",
//   ticker: "ETH",
//   tickerName: "Ethereum",
// };

// const privateKeyProvider = new EthereumPrivateKeyProvider({
//   config: { chainConfig: chainConfig }
// });

// const web3auth = new Web3Auth({
//   clientId,
//   web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
//   privateKeyProvider: privateKeyProvider,
// });

export default function Home() {
  // const { setAddress, getAddress} = useUseraddress()
  // const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const timeLeft = useCountdownTimer(new Date('2024-12-31T23:59:59'));
  const { isConnected } = useWeb3ModalAccount()

  const { open } = useWeb3Modal()

  // const dispatch = useAppDispatch()

  const router = useRouter()

  // useEffect(() => {
  //   router.prefetch('/dashbaord')
  //   const init = async () => {
  //     try {
  //       await web3auth.initModal();
  //       setProvider(web3auth.provider);

  //       if (web3auth.connected) {
  //         setLoggedIn(true)
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   init();
  // }, [router]);

  // const web3 = new Web3(provider as any);

  // useEffect(() => {
  //   if (isConnected) {
  //     router.push('/dashboard')
  //   }
  // }, [isConnected, router])

  // const login = async () => {
  //   const web3authProvider = await web3auth.connect();
  //   setProvider(web3authProvider);
  //   if (web3auth.connected) {
  //     setLoggedIn(true);
  //   }
  // };
  return (
    <Fragment>
        <main className="sm:hidden flex min-h-screen flex-col items-center gap-[80px] p-10 bg-[url('/backdrop.png')] bg-center">
        <div className="flex items-center w-[421px] h-[52px] pl-3 border border-[#EDEDED] rounded-lg bg-[url('/ads-bg-img.png')] bg-right bg-no-repeat">
          <Image 
            src="/close-icon.png"
            width={12}
            height={12}
            alt="Close Icon"
            className="cursor-pointer"
          />
          <h3 className="text-[10px] font-[400] ml-[8px] text-[#FFFFFF]">A chance to buy Kar tokens at half of the launch price</h3>
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
            <h2 className="text-[20px] font-[600] text-[#FFFFFF]">Token Sale DApp</h2>
          </div>
          <div className="flex flex-col gap-[12px] p-6 w-[450px] bg-[#101010] mt-[1px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-[500] text-[#FFFFFF]">Presale Progress</h2>
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
            <button onClick={() => open()} className=" flex items-center justify-center gap-[10px] w-[100%] h-[64px] rounded-lg bg-[#000000] text-[12px] font-[700] text-[#08E04A] border-0 border-r-[3px] border-e-[#08E04A]">
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
      {/* <MobileAuth 
        login={open}
      /> */}
            {/* <button onClick={() => open()}>Open Connect Modal</button> */}
    </Fragment>
  );
}
