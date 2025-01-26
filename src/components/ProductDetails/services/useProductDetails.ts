import { useCallback, useEffect } from "react";
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
  /**
   * NOTE: I would have used useQuery hook from react-query to fetch the data, as it has built in caching, state management and error handling.
   * Prevents refetching in race conditions. Especially useful here since we are not modifying the redux state much.
   * Anyway made a custom hook which uses redux state management as it was requirement of the assignment.
   *
   * Sample code for useQuery hook:
   * const useProductDetails = (productId: string) => {
   *   return useQuery({
   *     queryKey: ['product', productId],
   *     queryFn: () => fetchProductDetails(productId),
   *   });
   * };
   * it also has good developer tool, where you can toggle state of data.
   */
  const { productDetails, isLoading, errorMsg } = useSelector(
    (state: RootState) => state.productDetailsData
  );
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    if (
      (!productDetails || productDetails.id !== productId) &&
      productId &&
      !isLoading
    ) {
      dispatch(setIsLoading(true));
      dispatch(setErrorMsg(null));
      try {
        const data = await fetchProductDetails(productId);

        dispatch(setProductDetails(data as unknown as ProductDetails));
      } catch (err) {
        dispatch(
          setErrorMsg(err instanceof Error ? err.message : "An error occurred")
        );
      } finally {
        dispatch(setIsLoading(false));
      }
    }
  }, [productId, dispatch, productDetails?.id]);

  useEffect(() => {
    fetchData();
  }, [productId, dispatch, productDetails?.id]);

  return { productDetails, isLoading, errorMsg };
};

export default useProductDetails;
