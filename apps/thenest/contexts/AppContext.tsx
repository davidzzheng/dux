import create from "zustand";
import { ParsedConfirmedTransaction } from "@solana/web3.js";
import { IDashboard } from "../pages/api/dashboard";
import { ParsedAccountData } from "@solana/web3.js";

interface AppState {
  account: ParsedAccountData;
  dashboard: IDashboard;
  transactions: ParsedConfirmedTransaction[];
  setAccount: (account: ParsedAccountData) => void;
  setDashboardStats: (stats: IDashboard) => void;
  setTransactions: (transactions: ParsedConfirmedTransaction[]) => void;
}

export const useStore = create<AppState>((set) => ({
  account: {} as ParsedAccountData,
  dashboard: {} as IDashboard,
  transactions: [] as ParsedConfirmedTransaction[],
  setAccount: (account) => set({ account }),
  setTransactions: (transactions) => set({ transactions }),
  setDashboardStats: (dashboard) => set({ dashboard }),
}));
