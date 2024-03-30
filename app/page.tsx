'use client'
import { Fragment, useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider,WALLET_ADAPTERS, WEB3AUTH_NETWORK } from "@web3auth/base";
import { useRouter } from "next/navigation";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import Web3 from "web3";
import { MobileAuth } from "./components/mobile/mobile-auth";
import { DesktopAuth } from "./components/desktop/desktop-auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUseraddress from "./hooks/useUserAddress";

const clientId = 'BDUQ2Z7pztPGhssjh7oVakgILAIzBikjgkLBwnMp34X5AAiYBgETWwUr6XnS2-7mAKiDHiWeZPfNu2YhiYtLqY8';

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1", // Please use 0x1 for Mainnet
  rpcTarget: "https://rpc.ankr.com/eth",
  displayName: "Ethereum Mainnet",
  blockExplorer: "https://etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig: chainConfig }
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider: privateKeyProvider,
});

export default function Home() {
  const { setAddress, getAddress} = useUseraddress()
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const router = useRouter()

  useEffect(() => {
    router.prefetch('/dashbaord')
    const init = async () => {
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true)
          router.push("/dashboard")
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, [router]);

  const web3 = new Web3(provider as any);

  useEffect(() => {
    if (loggedIn) {
      web3.eth.getAccounts()
        .then((data: string[]) => {
          setAddress(data[0])
          localStorage.setItem('userAddress', data[0]);
          console.log(data[0])
        })
    }
  }, [loggedIn, setAddress, web3.eth])

  const login = async () => {
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (web3auth.connected) {
      setLoggedIn(true);
    }
  };
  return (
    <Fragment>
      <DesktopAuth 
        login={login}
      />
      <MobileAuth 
        login={login}
      />
    </Fragment>
  );
}
