'use client'
import { WalletContext } from "@/lib/store";
import {
  AddressActivityListView
} from "@covalenthq/goldrush-kit";
import { useContext, useEffect} from "react";

export default function Settings({ params }: { params: { slug: string } }) {
    const {setWalletAddress, setChains, tableState, setTableState} = useContext(WalletContext);

    useEffect(()=>{
        if(params.slug){
          setWalletAddress(params.slug)
        }
      },[params.slug])

    return  <AddressActivityListView 
        rowSelectionState={tableState} 
        address={params.slug} 
        getAllRowSelection={(e: any)=>{
            setChains(e)
        }}
        getRowSelectionState={(e: any)=>{
            setTableState(e)
    }}
/>
}