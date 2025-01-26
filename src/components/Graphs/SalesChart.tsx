// import { LineChart, Line } from "recharts";
import { SalesData } from "../ProductDetails/utils/productDetailsInterface";

const SalesChart = ({ salesData }: { salesData: SalesData[] | undefined }) => {
  if (!salesData) return null;
  return (
    <div>Work in progress. Give me couple of hours.. 🙏 </div>
  );
};

export default SalesChart;
