import LegendIcon from "../icons/LegendIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import CapitalChart from "./CapitalChart";

const CapitalCard = () => {
  return (
    <Card className=" text-white bg-darkColor3 border border-solid border-darkColor2 py-4 px-6 space-y-8">
      <CardHeader className=" flex flex-row justify-between items-center p-0">
        <CardTitle className=" text-lg font-semibold">
          Working Capital
        </CardTitle>
        <div className=" flex justify-between items-center gap-48">
          <div className=" flex gap-4">
            <span className=" flex items-center gap-2 text-xs">
              <LegendIcon fill="#29A073" /> <span>Income</span>
            </span>
            <span className=" flex items-center gap-2 text-xs">
              <LegendIcon fill="#C8EE44" /> <span>Expenses</span>
            </span>
          </div>
          <Select>
            <SelectTrigger className=" text-xs gap-4 px-3 py-2 bg-darkColor2 text-white border-none focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Last 7 Days" />
            </SelectTrigger>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <CapitalChart />
      </CardContent>
    </Card>
  );
};

export default CapitalCard;
