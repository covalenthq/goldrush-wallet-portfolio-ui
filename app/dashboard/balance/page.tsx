'use client'
import { WalletContext } from "@/lib/store";
import {
  TokenBalancesListView,
  TokenTransfersListView
} from "@covalenthq/goldrush-kit";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";

export default function Balance() {
    const {walletAddress, chains} = useContext(WalletContext);
    const [chain_names, setChainNames] = useState([]);
    const [contractAddress, setContractAddress] = useState("")

    useEffect(()=>{
      if(chains.length > 0){
        setChainNames(chains.map((o: { name: any; }) => o.name))
      }
    },[chains])

    if(!walletAddress || chains.length === 0 || chain_names.length === 0) return

    return !contractAddress
        ?
        <TokenBalancesListView
          chain_names={chain_names}
          address={walletAddress}
          onTransferClick={(e: SetStateAction<string>)=>{
            setContractAddress(e)
          }}
        />
        :
        <Flex direction="column" gap="2">
          <TokenTransfersListView
            chain_name="eth-mainnet"
            address={walletAddress}
            contract_address={contractAddress}
          />
          <div>
            <Button onClick={()=>{
              setContractAddress("")
            }}>Back to balance view</Button>
          </div>
        </Flex>
}