'use client'
import { WalletContext } from "@/lib/store";
import {
  TokenBalancesListView,
  TokenTransfersListView
} from "@covalenthq/goldrush-kit";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";

export default function Balance({ params }: { params: { slug: string } }) {
    const {setWalletAddress, chains} = useContext(WalletContext);
    const [chain_names, setChainNames] = useState(["eth-mainnet"]);
    const [contractAddress, setContractAddress] = useState("")

    useEffect(()=>{
      if(chains.length > 0){
        setChainNames(chains.map((o: { name: any; }) => o.name))
      }
    },[chains])

    useEffect(()=>{
      if(params.slug){
        setWalletAddress(params.slug)
      }
    },[params.slug])

    return !contractAddress
        ?
        <TokenBalancesListView
          chain_names={chain_names}
          address={params.slug}
          onTransferClick={(e: SetStateAction<string>)=>{
            setContractAddress(e)
          }}
        />
        :
        <Flex direction="column" gap="2">
          <TokenTransfersListView
            chain_name="eth-mainnet"
            address={params.slug}
            contract_address={contractAddress}
          />
          <div>
            <Button onClick={()=>{
              setContractAddress("")
            }}>Back to balance view</Button>
          </div>
        </Flex>
}