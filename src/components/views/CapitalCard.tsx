import React from "react";
import LegendIcon from "../icons/LegendIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import CapitalChart from "./CapitalChart";

const CapitalCard = () => {
  return (
    <Card className=" text-white bg-darkColor3 border border-solid border-darkColor2 space-y-8">
      <CardHeader className=" flex flex-row justify-between items-center">
        <CardTitle>Working Capital</CardTitle>
        <div className=" flex justify-between items-center gap-48">
          <div className=" flex gap-4">
            <span className=" flex items-center gap-2">
              <LegendIcon fill="#29A073" /> <span>Income</span>
            </span>
            <span className=" flex items-center gap-2">
              <LegendIcon fill="#C8EE44" /> <span>Expenses</span>
            </span>
          </div>
          <Select>
            <SelectTrigger className=" gap-4 bg-darkColor2 text-white border-none focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Last 7 Days" />
            </SelectTrigger>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        <CapitalChart />
      </CardContent>
    </Card>
  );
};

export default CapitalCard;
