'use client'
import { WalletContext } from "@/lib/store";
import {
  TokenBalancesListView,
} from "@covalenthq/goldrush-kit";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Balance({ params }: { params: { slug: string } }) {
    const {setWalletAddress, chains} = useContext(WalletContext);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(()=>{
      if(params.slug){
        setWalletAddress(params.slug)
      }
    },[params.slug])

    return <TokenBalancesListView
      chain_names={chains.length > 0 ? chains.map((o: { name: any; }) => o.name) : ["eth-mainnet"]}
      address={params.slug}
      on_transfer_click={(e: any)=>{
        router.push(`${pathname}/transfers/${e.chain_name}/${e.contract_address}`)
      }}
    />

}