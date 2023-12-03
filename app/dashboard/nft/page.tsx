'use client'
import { WalletContext } from "@/lib/store";
import {
  NFTWalletTokenListView,
} from "@covalenthq/goldrush-kit";
import { useContext } from "react";

export default function NFT() {
    const {walletAddress} = useContext(WalletContext);

    return <NFTWalletTokenListView
    address={walletAddress}
    chain_name="eth-mainnet"
  />
}