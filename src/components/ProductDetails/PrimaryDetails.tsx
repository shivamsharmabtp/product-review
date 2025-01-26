import { Skeleton } from "@mui/material";
import { colors } from "../../utils/colors";
import { ProductDetails } from "./utils/productDetailsInterface";

const PrimaryDetails = ({
  productDetails,
  isLoading,
}: {
  productDetails: ProductDetails ;
  isLoading: boolean;
}) => {
  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="flex flex-col gap-4 items-center pt-8">
          <Skeleton variant="circular" width={100} height={100} />
          <Skeleton variant="rectangular" width="80%" height={40} />
          <Skeleton variant="rectangular" width="80%" height={40} />
          <Skeleton variant="rectangular" width="80%" height={40} />
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center pt-8">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="w-full h-[200px] object-contain"
          />
          <span
            style={{
              color: colors.gray_05,
            }}
            className="font-bold text-[20px] mt-4"
          >
            {productDetails.title}
          </span>
          <span
            style={{ color: colors.gray_04 }}
            className="text-[14px] w-[250px] text-center"
          >
            {productDetails.subtitle}
          </span>
          <div className="mt-4 p-4 border-t border-b border-gray-100 w-full flex flex-wrap gap-2 text-[13px] justify-center">
            {productDetails.tags.map((tag, index) => (
              <div
                key={index}
                className="border p-1 rounded-md text-gray-500 border-gray-200"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryDetails;
