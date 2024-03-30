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
import { useAccount } from 'wagmi'

export default function Home() {
  const {address, isConnecting, isDisconnected } = useAccount()

  const { open } = useWeb3Modal()

  const router = useRouter()

  useEffect(() => {
    router.prefetch('/dashboard')
    if (address) {
      window.location.replace("/dashboard")
    }
  }, [address, router])

  return (
    <Fragment>
      <DesktopAuth 
        login={open}
      />
      <MobileAuth 
        login={open}
      />
    </Fragment>
  );
}
