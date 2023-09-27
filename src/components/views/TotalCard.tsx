import TotalBalance from "../icons/TotalBalance";
import TotalSaved from "../icons/TotalSaved";
import TotalSpending from "../icons/TotalSpending";
import { Card, CardContent } from "../ui/card";

type TotalCardType = {
  title: string;
  amount: number;
};

const TotalCard = ({ title, amount }: TotalCardType) => {
  return (
    <Card
      className={` w-60 py-5 border-none px-6 ${
        title === "Total Balance" ? "bg-darkColor2" : "bg-darkColor"
      } `}
    >
      <CardContent className=" flex p-0 justify-start items-center gap-4 ">
        {title === "Total Balance" ? (
          <TotalBalance width={42} height={42} />
        ) : title === "Total Spending" ? (
          <TotalSpending width={42} height={42} />
        ) : title === "Total Saved" ? (
          <TotalSaved width={42} height={42} />
        ) : null}
        <div className=" space-y-2">
          <p className=" text-sm text-primeColor">{title}</p>
          <p className=" text-white text-2xl font-bold">$ {amount}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalCard;
