import SalesChart from "../Graphs/SalesChart";
import useProductDetails from "./services/useProductDetails";

const RetailSales = ({ productId }: { productId: string }) => {
  const { productDetails, isLoading } = useProductDetails({ productId });

  return (
    <div className="w-full h-full p-8 overflow-y-auto">
      <span className="text-[18px] text-gray-500">Retail Sales</span>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="w-full">
          <div className="w-full h-[500px]">
            <SalesChart salesData={productDetails?.sales} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RetailSales;
