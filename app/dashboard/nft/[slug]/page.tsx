'use client'
import { WalletContext } from "@/lib/store";
import {
  NFTWalletTokenListView,
} from "@covalenthq/goldrush-kit";
import { useContext, useEffect } from "react";

export default function NFT({ params }: { params: { slug: string } }) {
    const {setWalletAddress} = useContext(WalletContext);

    useEffect(()=>{
      if(params.slug){
        setWalletAddress(params.slug)
      }
    },[params.slug])

    return <NFTWalletTokenListView
    address={params.slug}
    chain_name="eth-mainnet"
  />
}