import ChipIcon from "../icons/ChipIcon";
import MasterCardIcon from "../icons/MasterCardIcon";
import WifiIcon from "../icons/WifiIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DebitCardOne = () => {
  return (
    <Card className=" bg-debit-one-gradient border-none rounded-2xl px-8 h-fit">
      <CardHeader className=" px-0">
        <CardTitle className=" text-base font-bold text-white">
          Maglo.{" "}
          <span className=" pl-2 text-secondColor text-sm font-medium">
            | &nbsp; Unniversal Bank
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" px-0 flex flex-col gap-4">
        <div className=" flex justify-between">
          <ChipIcon />
          <WifiIcon />
        </div>
        <div className=" text-lg font-bold text-white tracking-widest">
          5495 7381 3759 2321
        </div>
        <div className=" flex justify-between items-center ">
          <div className=" invisible">09/24</div>
          <MasterCardIcon />
        </div>
      </CardContent>
    </Card>
  );
};

export default DebitCardOne;
