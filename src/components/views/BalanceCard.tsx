import { ArrowDown, ArrowUp, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

const BalanceCard = () => {
  return (
    <>
      <Card className=" bg-darkColor2 p-6 rounded-lg border-none min-w-min">
        <CardHeader className=" p-0">
          <CardTitle className=" text-sm font-medium text-secondColor">
            Your Balance
          </CardTitle>
          <CardContent className=" flex p-0 justify-between">
            <p className=" text-xl font-semibold text-white">$ 10,000</p>
            <div className=" flex gap-4">
              <span className="flex items-center gap-1 text-accentColor">
                <ArrowUp width={16} height={16} />
                <span>23.65%</span>
              </span>
              <span className=" flex items-center gap-1 text-[#E5363D]">
                <ArrowDown width={16} height={16} />
                <span>10.40%</span>
              </span>
            </div>
          </CardContent>
        </CardHeader>
        <Separator className=" text-slate-50 h-[2px] my-5" />
        <CardFooter className=" flex justify-between p-0">
          <div>
            <p className=" text-sm font-medium text-secondColor mb-2">
              Currency
            </p>
            <p className=" text-sm font-semibold text-white">USD/ US Dollar</p>
          </div>
          <div className=" pr-28">
            <p className=" text-sm font-medium text-secondColor mb-2">Status</p>
            <p className=" text-sm font-semibold text-white">Active</p>
          </div>
        </CardFooter>
      </Card>
      <Button className=" mt-8 h-11 bg-darkColor2 gap-3 hover:bg-darkColor rounded-lg w-full text-accentColor py-4 px-5 ">
        <Plus width={20} height={20} /> Add New Card
      </Button>
    </>
  );
};

export default BalanceCard;
