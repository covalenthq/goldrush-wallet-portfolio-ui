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
    const mode: any = theme;

    return (
        <GoldRushProvider apikey={COVALENT_API_KEY ? COVALENT_API_KEY : ""} mode={mode}>
            <WalletContext.Provider value={{ walletAddress, setWalletAddress, chains, setChains, tableState, setTableState}}>
                {children}
            </WalletContext.Provider>
        </GoldRushProvider>
    );
};

