import CapitalCard from "@/components/views/CapitalCard";
import RecentTransactionsCard from "@/components/views/RecentTransactionsCard";
import ScheduleTransfer from "@/components/views/ScheduleTransfer";
import TotalCard from "@/components/views/TotalCard";
import WalletCard from "@/components/views/WalletCard";
import { total_card_data } from "@/lib/data";
import { MoreHorizontal } from "lucide-react";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-12 gap-10 ">
      <div className=" col-span-8 flex flex-col gap-7 ">
        <div className=" flex justify-between ">
          {total_card_data.map((card) => (
            <TotalCard title={card.title} amount={card.amount} />
          ))}
        </div>
        <div>
          <CapitalCard />
        </div>
        <div>
          <RecentTransactionsCard />
        </div>
      </div>
      <div className=" col-span-4 flex flex-col">
        <div>
          <div className=" flex justify-between items-center pb-4">
            <h1 className=" text-lg font-semibold text-white">Wallet</h1>
            <MoreHorizontal className=" text-primeColor" />
          </div>
          <WalletCard />
        </div>
        <div>
          <ScheduleTransfer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
