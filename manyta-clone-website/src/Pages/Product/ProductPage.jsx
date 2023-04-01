import { ProductList } from "./../../Components/ProductPageComponets/ProductList";
import { SideBar } from "./../../Components/ProductPageComponets/SideBar";
import { Flex, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { HashLoader } from "react-spinners";
const SpinContainer = styled.div`
  margin-top: ${({ isLoading }) => (isLoading ? "35vh" : "0")};
`;

export const ProductsPage = () => {
  const { isLoading, isError } = useSelector((state) => state.ProductReducer);
  return (
    <div>
      <SpinContainer isLoading={isLoading}>
        {isLoading && (
          <Spinner
            thickness="9px"
            speed="0.93s"
            emptyColor="green.500"
            color="pink.500"
            size="xl"
            borderBlockStartColor={"red.500"}
            borderBlockEndColor={"blue.400"}
          />
        )}
      </SpinContainer>
      <Flex>
        {!isLoading && <SideBar />}
        <ProductList />
      </Flex>
    </div>
  );
};
