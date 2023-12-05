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
        row_selection_state={tableState} 
        address={params.slug} 
        get_all_row_selection={(e: any)=>{
          console.log(e)
            setChains(e)
        }}
        get_row_selection_state={(e: any)=>{
            setTableState(e)
    }}
/>
}