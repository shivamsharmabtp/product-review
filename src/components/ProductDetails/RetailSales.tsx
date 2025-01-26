import { Skeleton } from "@mui/material";
import SalesChart from "../Graphs/SalesChart";
import SalesTable from "../Tables/SalesTable";
import { ProductDetails } from "./utils/productDetailsInterface";

const RetailSales = ({
  productDetails,
  isLoading,
}: {
  productDetails: ProductDetails;
  isLoading: boolean;
}) => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full bg-white rounded-md shadow-md">
        <div className="text-[18px] text-gray-500 p-6">Retail Sales</div>
        {isLoading ? (
          <div className="w-full pb-8 flex justify-center items-center">
            <Skeleton variant="rectangular" width="90%" height={400} />
          </div>
        ) : (
          <div className="w-full pb-8">
            <SalesChart salesData={productDetails?.sales} />
          </div>
        )}
      </div>
      <div className="w-full bg-white rounded-md shadow-md mt-8">
        {isLoading ? (
          <div className="w-full pb-8 flex justify-center items-center">
            <Skeleton variant="rectangular" width="90%" height={400} />
          </div>
        ) : (
          <SalesTable salesData={productDetails?.sales} />
        )}
      </div>
    </div>
  );
};

export default RetailSales;
