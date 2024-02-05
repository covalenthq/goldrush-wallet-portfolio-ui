'use client'
import { Button } from "@/components/ui/button";
import { WalletContext } from "@/lib/store";
import {
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Activity({ params }: { params: { slug: string } }) {
  const {setChains, chains, setTableState} = useContext(WalletContext);
  const router = useRouter();

  useEffect(()=>{
    if(!params.slug){
      router.push("/")
    }
  },[params.slug])
  
  return (
    <Flex direction="column" gap="4" className="w-full">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Chain Selection
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Please select chains to view your wallet.
      </p>
      <AddressActivityListView
        address={params.slug}
        get_all_row_selection={(e: any)=>{
          setChains(e)
        }}
        get_row_selection_state={(e: any)=>{
          setTableState(e)
        }}
      />
      <Flex gap="2">
        <Button disabled={chains.length === 0} onClick={()=>{
          router.back()
        }}>Back</Button>
        <Button disabled={chains.length === 0} onClick={()=>{
          router.push(`/dashboard/balance/${params.slug}`)
        }}>Continue</Button>
      </Flex>
    </Flex>
  )
}
