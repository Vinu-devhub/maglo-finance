import { recentTransactions } from "@/lib/data";
import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import DataTable from "./transactions/DataTable";
import { columns } from "./transactions/columns";

const TransactionFullTable = () => {
  return (
    <div className=" px-10 space-y-4 pb-20">
      <div className=" max-w-xs flex items-center relative py-4">
        <Search className=" absolute left-4 text-secondColor " />
        <Input
          placeholder="Search anything on Transactions"
          className=" pl-12 pr-8 py-2 rounded-xl placeholder:text-secondColor bg-darkColor2 text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div>
        <DataTable data={recentTransactions} columns={columns} />
      </div>
    </div>
  );
};

export default TransactionFullTable;
