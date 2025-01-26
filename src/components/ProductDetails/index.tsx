import { colors } from "../../utils/colors";
import Header from "../common/Header";
import PrimaryDetails from "./PrimaryDetails";
import RetailSales from "./RetailSales";

const ProductDetails = ({ productId }: { productId: string }) => {
  return (
    <div className="w-full h-full">
      <Header />
      <div
        className="w-full h-[calc(100%-70px)] px-6 pt-20"
        style={{ backgroundColor: colors.gray_01 }}
      >
        <div className="w-full h-full flex">
          <div className="w-[400px] h-full px-2">
            <div className="w-full h-full bg-white rounded-md shadow-md">
              <PrimaryDetails productId={productId} />
            </div>
          </div>
          <div className="w-[calc(100%-400px)] h-full px-2">
            <div className="w-full h-full bg-white rounded-md shadow-md">
              <RetailSales productId={productId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
