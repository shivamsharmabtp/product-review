import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductDetails,
  setIsLoading,
  setErrorMsg,
} from "../../../redux/productDetailsSlice";
import { BASE_API_URL } from "../../../utils/constants";
import customFetch from "../../../services/customFetch";
import { RootState } from "../../../redux/store";
import { ProductDetails } from "../utils/productDetailsInterface";

const fetchProductDetails = async (productId: string) => {
  const response = await customFetch({
    url: `${BASE_API_URL}/getProduct/${productId}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return response.json();
};

const useProductDetails = ({ productId }: { productId: string }) => {
  const [error, setError] = useState<string | null>(null);
  const { productDetails, isLoading } = useSelector(
    (state: RootState) => state.productDetailsData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if ((!productDetails || productDetails.id !== productId) && productId && !isLoading) {
        dispatch(setIsLoading(true));
        setError(null);
        try {
          const data = await fetchProductDetails(productId);

          dispatch(setProductDetails(data as unknown as ProductDetails));
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
          dispatch(
            setErrorMsg(
              err instanceof Error ? err.message : "An error occurred"
            )
          );
        } finally {
          dispatch(setIsLoading(false));
        }
      }
    };

    fetchData();
  }, [productId, dispatch, productDetails?.id]);

  return { productDetails, isLoading, error };
};

export default useProductDetails;
