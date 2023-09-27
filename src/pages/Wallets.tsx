import WalletCard from "@/components/views/WalletCard";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const Wallets = () => {
  return (
    <div>
      <div className=" flex justify-between items-center pb-4">
        <h1 className=" text-lg font-semibold text-white">Wallet</h1>
        <MoreHorizontal className=" text-primeColor" />
      </div>
      <WalletCard />
    </div>
  );
};

export default Wallets;
