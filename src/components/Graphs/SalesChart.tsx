import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import { SalesData } from "../ProductDetails/utils/productDetailsInterface";
import { colors } from "../../utils/colors";

const SalesChart = ({ salesData }: { salesData: SalesData[] | undefined }) => {
  if (!salesData) return null;

  const formatXAxis = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  };

  return (
    <div className="w-full h-full mt-4 px-4">
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={salesData}
          margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
        >
          <XAxis
            dataKey="weekEnding"
            tickFormatter={formatXAxis}
            interval={4}
            tickLine={false}
            axisLine={{
              stroke: "#ccc",
            }}
            tick={{ fill: "#ccc", dy: 8 }}
          />
          <YAxis domain={[-1000000, 2000000]} hide />

          <Tooltip />
          <Line
            type="monotone"
            dataKey="retailSales"
            name="Retail Sales"
            stroke={colors.blue_02}
            dot={false}
            strokeWidth={3}
            scale="auto"
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            name="Wholesale Sales"
            stroke={colors.gray_04}
            dot={false}
            strokeWidth={3}
            scale="auto"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
