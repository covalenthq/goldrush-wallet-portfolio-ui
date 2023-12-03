'use client'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { WalletContext } from "@/lib/store";
import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Flex } from "@radix-ui/themes";


interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const {walletAddress, setChains, chains, tableState, setTableState} = useContext(WalletContext);
  const router = useRouter();
  const pathname = usePathname()

  const handleTabSwitch = (route: string) => {
    router.push(`/dashboard/${route}`)
  }

  useEffect(()=>{
    if(!walletAddress){
      router.push("/")
    }
  },[walletAddress])

  return (
    <Flex  direction="column" gap="4" className="container h-[calc(100vh-150px)] py-8" >
      <Tabs value={pathname} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="/dashboard/balance" onClick={()=>{
              handleTabSwitch("balance")
          }}>Token balances</TabsTrigger>
          <TabsTrigger value="/dashboard/nft" onClick={()=>{
              handleTabSwitch("nft")
          }}>NFTs</TabsTrigger>
          <TabsTrigger value="/dashboard/settings" onClick={()=>{
              handleTabSwitch("settings")
          }}>Settings</TabsTrigger>
        </TabsList>
      </Tabs>
        {children}
    </Flex>
  )
}
