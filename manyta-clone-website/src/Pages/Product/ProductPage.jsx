import { ProductList } from "./../../Components/ProductPageComponets/ProductList";
import { SideBar } from "./../../Components/ProductPageComponets/SideBar";
import {
  Flex,
  Spinner,
  Stack,
  Container,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  SocialButton,
} from "@chakra-ui/react";
import { HashLoader } from "react-spinners";
import Navbar from "./../../Components/NavBar";
import Footer from "../../Components/Footer";
import { useEffect, useRef, useState } from "react";
const SpinContainer = styled.div`
  margin-top: ${({ isLoading }) => (isLoading ? "35vh" : "0")};
`;

const DIVIDE = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: space-between;
`;

export const ProductsPage = () => {
  const { isLoading, isError } = useSelector((state) => state.ProductReducer);
  const productListRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (productListRef.current) {
        const { top } = productListRef.current.getBoundingClientRect();
        setIsScrolled(top < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{ position: "fixed", zIndex: "99999999", marginBottom: "2vh" }}
      >
        {!isLoading && <Navbar />}
      </div>
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
      <DIVIDE>
        {!isLoading && (
          <SideBar style={{ display: isScrolled ? "none" : "block" }} />
        )}
        <ProductList />
      </DIVIDE>

      {/* <Footer /> */}
    </div>
  );
};
