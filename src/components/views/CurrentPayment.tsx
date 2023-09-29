import { regularPayment } from "@/lib/data";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const CurrentPayment = () => {
  return (
    <div className=" space-y-4">
      <h2 className=" text-xl font-semibold text-white">My Payments </h2>
      <Tabs defaultValue="all_payment">
        <TabsList className=" w-full justify-between bg-transparent border-b border-solid border-darkColor2 rounded-none p-0">
          <div className=" space-x-8">
            <TabsTrigger
              value="all_payment"
              className=" text-sm font-semibold text-secondColor px-0 h-10 rounded-none bg-none border-b-4 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-accentColor data-[state=active]:text-white  "
            >
              All Payments
            </TabsTrigger>
            <TabsTrigger
              value="regular_payment"
              className=" text-sm font-semibold text-secondColor px-0 h-10 rounded-none bg-none border-b-4 border-transparent data-[state=active]:bg-transparent data-[state=active]:border-accentColor data-[state=active]:text-white  "
            >
              Regular Payments
            </TabsTrigger>
          </div>
          <div className=" w-32  flex items-center relative py-4">
            <Search className=" absolute left-4 text-secondColor " />
            <Input
              placeholder="Search"
              className=" pl-12 pr-8 py-2 rounded-xl placeholder:text-secondColor bg-transparent text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </TabsList>
        <TabsContent value="all_payment">
          <div className=" space-y-5">
            <p className=" text-sm text-secondColor">Next Month</p>
            <div>
              {regularPayment.map((transfer) => (
                <div className="flex items-center pb-6 ">
                  <div className=" flex items-center">
                    <Avatar className="h-11 w-11 rounded-xl">
                      <AvatarImage
                        src={transfer.userImg}
                        alt={`${transfer.username}-img`}
                      />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-semibold leading-none text-white">
                        {transfer.username}
                      </p>
                      <p className="text-xs text-secondColor">
                        {transfer.schedule_date}
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto text-base font-semibold">
                    {transfer.amount < 0
                      ? `- $${transfer.amount - 2 * transfer.amount}`
                      : `$${transfer.amount}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="regular_payment">
          <div className=" space-y-5">
            <p className=" text-sm text-secondColor">Next Month</p>
            <div>
              {regularPayment.map((transfer) => (
                <div className="flex items-center pb-6 ">
                  <div className=" flex items-center">
                    <Avatar className="h-11 w-11 rounded-xl">
                      <AvatarImage
                        src={transfer.userImg}
                        alt={`${transfer.username}-img`}
                      />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-semibold leading-none text-white">
                        {transfer.username}
                      </p>
                      <p className="text-xs text-secondColor">
                        {transfer.schedule_date}
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto text-base font-semibold">
                    {transfer.amount < 0
                      ? `- $${transfer.amount - 2 * transfer.amount}`
                      : `$${transfer.amount}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CurrentPayment;
