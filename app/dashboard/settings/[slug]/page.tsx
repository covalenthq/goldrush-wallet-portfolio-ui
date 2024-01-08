"use client"

import { useContext, useEffect } from "react"
import { AddressActivityListView } from "@covalenthq/goldrush-kit"
import { Flex } from "@radix-ui/themes"

import { WalletContext } from "@/lib/store"
import { BORDER_RADIUS, COLORS } from "@/lib/utils"

export default function Settings({ params }: { params: { slug: string } }) {
  const {
    setWalletAddress,
    setChains,
    tableState,
    setTableState,
    setColor,
    color,
    borderRadius,
    setBorderRadius,
  } = useContext(WalletContext)

  useEffect(() => {
    if (params.slug) {
      setWalletAddress(params.slug)
    }
  }, [params.slug])

  return (
    <Flex direction="column" gap="4" pb="4">
      <div>
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Color Selection
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Select color to change the accent of your portfolio.
        </p>
      </div>

      <Flex wrap="wrap" gap="2">
        {Object.entries(COLORS).map(([_color, value]) => (
          <div
            key={_color}
            style={{ backgroundColor: value }}
            className={`tokenAvatar w-8 h-8 rounded-full cursor-pointer ${
              _color === color && "border-2 border-black dark:border-white"
            }`}
            onClick={() => {
              setColor(_color)
            }}
          />
        ))}
      </Flex>

      <div>
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Border Radius Selection
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Select border radius.
        </p>
      </div>

      <Flex wrap="wrap" gap="2">
        {Object.entries(BORDER_RADIUS).map(([radius, value]) => (
          <div
            key={radius}
            style={{ borderRadius: value }}
            className={`border p-2 cursor-pointer ${
              radius === borderRadius && "bg-secondary"
            }`}
            onClick={() => {
              setBorderRadius(radius)
            }}
          >
            {radius}
          </div>
        ))}
      </Flex>

      <div>
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Chain Selection
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Please select chains to view your wallet.
        </p>
      </div>

      <AddressActivityListView
        row_selection_state={tableState}
        address={params.slug}
        get_all_row_selection={(e: any) => {
          setChains(e)
        }}
        get_row_selection_state={(e: any) => {
          setTableState(e)
        }}
      />
    </Flex>
  )
}
