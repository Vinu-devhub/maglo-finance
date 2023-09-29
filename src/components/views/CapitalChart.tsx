import { chartData } from "@/lib/data";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const CapitalChart = () => {
  return (
    <ResponsiveContainer minWidth={621} minHeight={193}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray=""
          stroke="#201E34"
          fill=""
          horizontal={false}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#C8EE44"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#29A073"
          strokeWidth={3}
        />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          contentStyle={{ backgroundColor: "#292642", borderRadius: "10px" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CapitalChart;
