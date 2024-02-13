'use client'
import { WalletContext } from "@/lib/store";
import {
  TokenTransfersListView
} from "@covalenthq/goldrush-kit";
import { useContext, useEffect } from "react";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Transfers({ params }: { params: { contract_address: string, slug: string, chain: string } }) {
    const {setWalletAddress} = useContext(WalletContext);
    const router = useRouter();

    useEffect(()=>{
      if(params.slug){
        setWalletAddress(params.slug)
      }
    },[params.slug])

    return <Flex direction="column" gap="2">
    <TokenTransfersListView
      chain_name={params.chain}
      address={params.slug}
      contract_address={params.contract_address}
    />
    <div>
      <Button onClick={()=>{
        router.back()
      }}>Back to balance view</Button>
    </div>
  </Flex>
   
}