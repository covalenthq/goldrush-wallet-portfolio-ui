import { GoldRushProvider } from "@covalenthq/goldrush-kit";
import type { ReactNode } from "react";
import { createContext, useState } from "react";
import { COVALENT_API_KEY } from "./utils";
import { useTheme } from "next-themes";

interface WalletContextType {
    walletAddress: string
    setWalletAddress: Function
    chains: any
    setChains: Function
    tableState: { [key: string]: boolean }
    setTableState: Function
    color: string
    setColor: Function
    setBorderRadius: Function
    borderRadius: string
}


export const WalletContext = createContext<WalletContextType>(
    {} as WalletContextType
);

interface WalletProviderProps {
   children: ReactNode
}


export const WalletProvider: React.FC<WalletProviderProps>= ({children}) => {
    const { theme } = useTheme();
    const [walletAddress, setWalletAddress] = useState<string>("");
    const [chains, setChains] = useState<[]>([]);
    const [tableState, setTableState] = useState({});
    const [color, setColor] = useState<any>("slate");
    const [borderRadius, setBorderRadius] = useState<any>("medium");

    const mode: any = theme;

    return (
        <GoldRushProvider apikey={COVALENT_API_KEY ? COVALENT_API_KEY : ""} mode={mode} color={color} border_radius={borderRadius}>
            <WalletContext.Provider value={{ walletAddress, setWalletAddress, chains, setChains, tableState, setTableState, setColor, color, setBorderRadius, borderRadius}}>
                {children}
            </WalletContext.Provider>
        </GoldRushProvider>
    );
};

