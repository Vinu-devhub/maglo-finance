import { invoicesData } from "@/lib/data";
import { ListFilter, Search } from "lucide-react";
import ReceiptIcon from "../icons/ReceiptIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import InvoiceDataTable from "./transactions/InvoiceDataTable";
import { invoiceColumns } from "./transactions/columns";

const InvoicesTable = () => {
  return (
    <div className=" space-y-4 pb-20">
      <div className=" flex justify-between items-center">
        <div className=" max-w-xs flex items-center relative py-4">
          <Search className=" absolute left-4 text-secondColor " />
          <Input
            placeholder="Search invoices"
            className=" pl-12 pr-8 py-2 rounded-xl placeholder:text-secondColor bg-darkColor2 text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className=" flex gap-7">
          <Button className=" flex gap-2.5 text-[#1B212D]">
            <ReceiptIcon width={20} height={20} />
            <span className=" text-sm font-semibold">Create Invoice</span>
          </Button>
          <Button className=" bg-transparent flex gap-2.5 border border-darkColor2 rounded-lg hover:bg-transparent  ">
            <ListFilter width={20} height={20} />
            <span className=" text-sm font-medium">Filters</span>
          </Button>
        </div>
      </div>
      <div>
        <InvoiceDataTable data={invoicesData} columns={invoiceColumns} />
      </div>
    </div>
  );
};

export default InvoicesTable;
