import { upcomingPayment } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UpcomingPayment = () => {
  return (
    <div className=" space-y-4">
      <h2 className=" text-xl font-semibold text-white">Upcoming Payments</h2>
      <div className=" space-y-5">
        <p className=" text-sm text-secondColor">Next Month</p>
        <div>
          {upcomingPayment.map((transfer) => (
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
    </div>
  );
};

export default UpcomingPayment;
