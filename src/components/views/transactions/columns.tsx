import { Button } from "@/components/ui/button";
import { InvoicesType, TransactionsType } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<TransactionsType>[] = [
  {
    accessorKey: "product_name",
    header: "Name/Business",
    cell: ({ row }) => {
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
            <div className=" text-sm font-medium text-white">{productName}</div>
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
        <div className=" text-sm font-medium text-secondColor">
          {dateString}
        </div>
      );
    },
  },
];

export const invoiceColumns: ColumnDef<InvoicesType>[] = [
  {
    accessorKey: "client_name",
    header: "Name/Client",
    cell: ({ row }) => {
      const clientImg = row.original.client_img;
      const clientName = row.original.client_name;
      const invoiceId = row.original.invoiceId;

      return (
        <div className=" flex gap-4 items-center ">
          <img
            src={clientImg}
            alt={`${clientName}-image`}
            className=" w-10 h-10"
          />
          <div>
            <div className=" text-base font-medium text-white">
              {clientName}
            </div>
            <div className=" text-sm font-normal text-secondColor">
              {invoiceId}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "invoice_date",
    header: "Date",
    cell: ({ row }) => {
      const dateTimeString: string = row.getValue("invoice_date");

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
    accessorKey: "orders",
    header: () => <div className="text-left">Orders</div>,
    cell: ({ row }) => (
      <div className=" pl-6 text-left text-base font-medium text-secondColor capitalize">
        {row.original.orders}
      </div>
    ),
  },
  {
    accessorKey: "invoice_amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("invoice_amount"));
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
    accessorKey: "invoice_status",
    header: "Status",
    cell: ({ row }) => {
      const btnType = row.getValue("invoice_status");
      let btnStyle;

      switch (btnType) {
        case "paid":
          btnStyle = " bg-[#1A3131] text-accentColor hover:bg-[#1A3131]";
          break;
        case "unpaid":
          btnStyle = " bg-[#442121] text-[#EB5757] hover:bg-[#442121]";
          break;
        case "pending":
          btnStyle = " bg-[#30292F] text-[#F2994A] hover:bg-[#30292F]";
          break;
        default:
          btnStyle = "bg-darkColor text-primaryColor";
      }

      return (
        <div className=" text-base font-medium text-secondColor">
          <Button className={` ${btnStyle} capitalize`}>
            {row.original.invoice_status}
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    cell: () => (
      <div className=" pl-6 cursor-pointer">
        <MoreHorizontal />
      </div>
    ),
  },
];
