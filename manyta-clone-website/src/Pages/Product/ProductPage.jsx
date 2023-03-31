import { ProductList } from "./../../Components/ProductPageComponets/ProductList";
import { SideBar } from "./../../Components/ProductPageComponets/SideBar";
import { Flex, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
export const ProductsPage = () => {
  const { isLoading, isError } = useSelector((state) => state.ProductReducer);
  return (
    <div>
      {isLoading && <Spinner />}
      <Flex>
        <SideBar />
        <ProductList />
      </Flex>
    </div>
  );
};
