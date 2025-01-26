import { colors } from "../../utils/colors";
import Header from "../common/Header";
import PrimaryDetails from "./PrimaryDetails";
import RetailSales from "./RetailSales";
import useProductDetails from "./services/useProductDetails";

const ProductDetails = ({ productId }: { productId: string }) => {
  const { productDetails, isLoading } = useProductDetails({ productId });

  return (
    <div className="w-full h-full">
      <Header />
      <div
        className="w-full h-[calc(100%-70px)] px-6 pt-20"
        style={{ backgroundColor: colors.gray_01 }}
      >
        <div className="w-full h-full flex">
          <div className="w-1/5 min-w-[300px] h-full px-2">
            <div className="w-full h-full bg-white rounded-md shadow-md">
              <PrimaryDetails productDetails={productDetails} isLoading={isLoading} />
            </div>
          </div>
          <div className="w-4/5 h-full px-2">
            <div className="w-full h-full">
              <RetailSales productDetails={productDetails} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
