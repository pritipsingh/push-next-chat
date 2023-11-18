"use client"
import Image from 'next/image'
import { useState } from 'react';
import { ethers } from 'ethers';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { useAccount, useConnect, useDisconnect} from 'wagmi'
import {
  ENV,
  // ChatViewComponent,
  // ChatUIProvider,
  // lightChatTheme,
  // ENV,
  Chat
} from "@pushprotocol/uiweb";

export default function Home() {
  const [signer, setSigner] = useState(null);
 
  const connectWallet = async () => {
    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get provider
   await provider.send("eth_requestAccounts", []);

    // Grabbing signer from provider
    const signer = provider.getSigner();

    // store signer
    setSigner(signer);
  }

  const disconnectWallet = async () => {
    setSigner(null);
  };


  return (
 
  !signer ?  <button onClick={connectWallet}/> :
    <Chat
    account='0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'
    supportAddress="0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666" //support address, this belongs to you
    signer={signer}
    env={ENV.PROD} // can be "prod" or "staging"
  />
  
 
   
     
  )
}
