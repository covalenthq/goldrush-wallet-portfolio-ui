'use client'
import { WalletContext } from "@/lib/store";
import {
  AddressActivityListView
} from "@covalenthq/goldrush-kit";
import { useContext} from "react";

export default function Settings() {
    const {walletAddress, setChains, tableState, setTableState} = useContext(WalletContext);

    return  <AddressActivityListView 
        rowSelectionState={tableState} 
        address={walletAddress} 
        getAllRowSelection={(e: any)=>{
            setChains(e)
        }}
        getRowSelectionState={(e: any)=>{
            setTableState(e)
    }}
/>
}