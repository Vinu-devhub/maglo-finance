import { scheduleTransferData } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ScheduleTransfer = () => {
  return (
    <Card className="col-span-3 text-white bg-transparent border-none space-y-6 px-2">
      <CardHeader className=" p-0">
        <div className=" flex justify-between items-center">
          <CardTitle className=" text-lg font-semibold">
            Scheduled Transfers
          </CardTitle>
          <Button className=" text-sm h-5 font-semibold bg-transparent hover:bg-transparent border-none text-accentColor gap-2 p-0">
            View All <ChevronRight width={18} height={18} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className=" space-y-3 p-0">
        {scheduleTransferData.map((transfer) => (
          <div className="flex items-center pb-4 ">
            <div className=" flex items-center">
              <Avatar className="h-8 w-8">
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
      </CardContent>
    </Card>
  );
};

export default ScheduleTransfer;
