'use client'
import "@/styles/globals.css"
import "@covalenthq/goldrush-kit/styles.css";
import { Theme } from '@radix-ui/themes';
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import '@radix-ui/themes/styles.css';
import { WalletProvider } from "@/lib/store";
import { Toaster } from "@/components/ui/toaster";

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Theme>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <WalletProvider>
                <div className="relative flex min-h-screen flex-col">
                  <SiteHeader />
                  <div className="flex-1">{children}</div>
                  <Toaster />
                </div>
              </WalletProvider>
            </ThemeProvider>
          </Theme>

        </body>
      </html>
    </>
  )
}
