"use client"

import Image from "next/image"
import { useAccount, useBalance } from "wagmi"

export const Hero = () => {
  const { isConnected, address } = useAccount()
  const { data: ethBalance, error: ethError } = useBalance({
    address
  })
  const { data: usdtBalance, error: usdtError } = useBalance({
    address,
    token: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  })

  const formatBigInt = (number: bigint, decimals: number) => Number(number) / 10 ** decimals

  if (isConnected) {
    return (
      <section className="relative mx-auto mt-28">
        <h1 className="text-7xl text-zinc-100 font-bold">Balance</h1>
        {
          ethBalance && usdtBalance && (
            <p className="text-white opacity-70 text-center text-lg">
              <strong>{ethBalance?.symbol}:</strong> {formatBigInt(ethBalance.value, ethBalance.decimals).toFixed(8)}
              <br />
              <strong>{usdtBalance?.symbol}:</strong> {formatBigInt(usdtBalance.value, usdtBalance.decimals).toFixed(2)}
            </p>
          )
        }
        <p className={ethError || usdtError ? "text-red-500 text-center text-lg" : "hidden"}>
          Error fetching balance
        </p>
      </section>
    )
  }

  return (
    <section className="relative mx-auto mt-28">
      <h1 className="text-7xl text-zinc-100 font-bold">Welcome</h1>
      <p className="text-white opacity-70 text-center text-lg">
        <br /> Connect your wallet to get started.
      </p>
      <Image
        src="/arrow.svg"
        alt="Arrow pointing to the connect wallet button"
        className="absolute hidden md:block md:bottom-5 md:-right-48"
        width={150}
        height={150}
      />
    </section>
  )
}
