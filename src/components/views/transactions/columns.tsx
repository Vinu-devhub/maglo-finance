import { Button } from "@/components/ui/button";
import { TransactionsType } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TransactionsType>[] = [
  {
    accessorKey: "product_name",
    header: "Name/Business",
    cell: ({ row }) => {
      console.log("Row Data: ", row);
      const productImg = row.original.product_img;
      const productName = row.original.product_name;
      const companyName = row.original.company_name;

      return (
        <div className=" flex gap-4 items-center ">
          <img
            src={productImg}
            alt={`${productName}-image`}
            className=" w-10 h-10"
          />
          <div>
            <div className=" text-base font-medium text-white">
              {productName}
            </div>
            <div className=" text-sm font-normal text-secondColor">
              {companyName}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "product_type",
    header: () => <div className="text-left">Type</div>,
    cell: ({ row }) => (
      <div className="text-left text-base font-medium text-secondColor capitalize">
        {row.original.product_type}
      </div>
    ),
  },
  {
    accessorKey: "product_amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("product_amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return (
        <div className=" text-base font-semibold text-white">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "transaction_date",
    header: "Date",
    cell: ({ row }) => {
      const dateTimeString: string = row.getValue("transaction_date");

      const [dateString, timeString] = dateTimeString.split(" at ");

      return (
        <div>
          <div className=" text-base font-medium text-white">{dateString}</div>
          <div className=" text-sm font-normal text-secondColor">
            {" "}
            at {timeString}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "invoiceId",
    header: "Invoice ID",
    cell: ({ row }) => (
      <div className=" text-base font-medium text-secondColor">
        {row.getValue("invoiceId")}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    cell: () => (
      <Button className=" px-5 py-3 text-black font-bold">View</Button>
    ),
  },
];

export const recentColumns: ColumnDef<TransactionsType>[] = [
  {
    accessorKey: "product_name",
    header: "Name/Business",
    cell: ({ row }) => {
      console.log("Row Data: ", row);
      const productImg = row.original.product_img;
      const productName = row.original.product_name;
      const companyName = row.original.company_name;

      return (
        <div className=" flex gap-4 items-center ">
          <img
            src={productImg}
            alt={`${productName}-image`}
            className=" w-10 h-10"
          />
          <div>
            <div className=" text-sm font-medium text-white">
              {productName}
            </div>
            <div className=" text-xs font-normal text-secondColor">
              {companyName}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "product_type",
    header: () => <div className="text-left">Type</div>,
    cell: ({ row }) => (
      <div className="text-left text-sm font-medium text-secondColor capitalize">
        {row.original.product_type}
      </div>
    ),
  },
  {
    accessorKey: "product_amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("product_amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return (
        <div className=" text-sm font-semibold text-white">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "transaction_date",
    header: "Date",
    cell: ({ row }) => {
      const dateTimeString: string = row.getValue("transaction_date");

      const [dateString, timeString] = dateTimeString.split(" at ");

      return (
        <div className=" text-sm font-medium text-secondColor">{dateString}</div>
      );
    },
  },
];
