"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi"
import clsx from "clsx"

import { Button } from "@/components/ui/button"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { formatAddress } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

type Balance = {
  title: string
  description: string
  link: string
}

export default function Home() {
  const { address, isConnected, isConnecting, isReconnecting } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: ethBalance, error: ethError } = useBalance({
    address
  })
  const { data: usdtBalance, error: usdtError } = useBalance({
    address,
    token: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  })

  const connector = connectors[0]

  const [balances, setBalances] = useState<Balance[]>([
    {
      title: "Address",
      description: "-",
      link: "#1",
    },
    {
      title: "ETH",
      description: "-",
      link: "#2"
    },
    {
      title: "USDT",
      description: "-",
      link: "#3"
    },
  ])

  const formatBigInt = (number: bigint, decimals: number) => Number(number) / 10 ** decimals

  useEffect(() => {
    console.log(ethBalance)
    if (ethBalance?.value && usdtBalance?.symbol) {
      setBalances([
        {
          title: "Address",
          description: formatAddress(address),
          link: "#1",
        },
        {
          title: "ETH",
          description: formatBigInt(ethBalance.value, ethBalance.decimals).toFixed(12),
          link: "#2"
        },
        {
          title: "USDT",
          description: formatBigInt(usdtBalance.value, usdtBalance.decimals).toFixed(2),
          link: "#3"
        },
      ])
    }
  }, [ethBalance, usdtBalance, isConnected])

  const onConnectWallet = () => connect({ connector })
  const onDisconnectWallet = () => disconnect()

  return (
    <>
      <section className="flex flex-col h-full md:flex-row w-full space-y-3 py-10 px-3 md:px-6 ht-fit justify-center items-center">
        <div>
          {
            <Button
              className={clsx(
                "shadow-xl md:px-10 font-semibold",
                isConnected ? "bg-red-800 hover:bg-red-900" : "bg-blue-800 hover:bg-blue-900"
              )}
              onClick={isConnected ? onDisconnectWallet : onConnectWallet}
            >
              {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
            </Button>
          }
        </div>
      </section>
      
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={balances} />
      </div>

      <Separator className="w-full mt-14 mb-4 opacity-15" />

      <footer className="w-full border-t border-zinc-800 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-white/80 font-semibold tracking-widest uppercase text-sm font-mono">
              <Image
                src={isConnected ? "/green-circle.svg" : "/circle.svg"}
                alt="Circle"
                width={8}
                height={8}
              />
              <div className="text-[10px] align-middle">
                {isConnected ? "Connected" : "Disconnected"}
              </div>
            </div>
            <span className="text-zinc-600 text-[10px] tracking-wide font-mono">
              © {new Date().getFullYear()} — All rights reserved
            </span>
          </div>

          <p className="text-zinc-500 tracking-wide leading-relaxed text-[10px]">
            This website is not affiliated with or endorsed by GetBlock.io, MetaMask, Wagmi or any company.
            This is only for demonstration purposes and a personal project the website connects to the wallet
            MetaMask if allowed. Built using NextJS, React, Wagmi, MetaMask SDK, TypeScript, TailwindCSS and
            deployed to Cloudflare.
          </p>

        </div>
      </footer>
    </>
  )
}
