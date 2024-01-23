'use client'
import { track } from '@vercel/analytics/react';
import { poweredCovalent } from "@/lib/svg"

export const Footer = () => {
    return <footer className="bg-background sticky bottom-0 z-40 w-full border-t">
    <a
      onClick={() => {
        track('covalent_cta');
      }}
      target="_blank"
      href="https://www.covalenthq.com/"
      className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 "
    >
      {poweredCovalent}
    </a>
  </footer>
}