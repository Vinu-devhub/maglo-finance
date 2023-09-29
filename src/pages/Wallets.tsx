import BalanceCard from "@/components/views/BalanceCard";
import CurrentPayment from "@/components/views/CurrentPayment";
import UpcomingPayment from "@/components/views/UpcomingPayment";
import WalletCard from "@/components/views/WalletCard";

const Wallets = () => {
  return (
    <div className=" grid grid-cols-12 gap-10">
      <div className=" col-span-4 pr-10 border-r-2 border-solid border-darkColor2">
        <WalletCard />
        <BalanceCard />
      </div>
      <div className=" col-span-8 space-y-10 pr-40">
        <CurrentPayment />
        <UpcomingPayment />
      </div>
    </div>
  );
};

export default Wallets;
