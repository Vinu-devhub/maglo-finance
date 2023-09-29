import { recentTransactions } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";
import RecentTable from "./transactions/RecentTable";
import { recentColumns } from "./transactions/columns";

const RecentTransactionsCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="text-white bg-darkColor3 border border-solid border-darkColor2 space-y-2 px-6 py-5">
      <CardHeader className=" p-0">
        <div className=" flex justify-between items-center">
          <CardTitle className=" text-lg font-semibold">
            Recent Transactions
          </CardTitle>
          <Button
            className=" p-0 h-5 text-sm font-semibold bg-transparent hover:bg-transparent border-none text-accentColor gap-2"
            onClick={() => navigate("transactions")}
          >
            View All <ChevronRight width={18} height={18} />
          </Button>
        </div>
      </CardHeader>
      <RecentTable
        data={recentTransactions.slice(0, 3)}
        columns={recentColumns}
      />
    </Card>
  );
};

export default RecentTransactionsCard;
