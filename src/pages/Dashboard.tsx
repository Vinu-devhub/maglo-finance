import CapitalCard from "@/components/views/CapitalCard";
import RecentTransactionsCard from "@/components/views/RecentTransactionsCard";
import ScheduleTransfer from "@/components/views/ScheduleTransfer";
import TotalCard from "@/components/views/TotalCard";
import { total_card_data } from "@/lib/data";

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
      <div className=" col-span-4">
        <div>Wallet</div>
        <div>
          <ScheduleTransfer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
