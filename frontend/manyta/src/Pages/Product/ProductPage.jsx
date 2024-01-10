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
  // SocialButton,
} from "@chakra-ui/react";
import { HashLoader } from "react-spinners";
import Navbar from "./../../Components/NavBar";
import Footer from "../../Components/Footer";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductContext } from "../../ContextApi/ProductContext";
const SpinContainer = styled.div`
  margin-top: ${({ isLoading }) => (isLoading ? "35vh" : "0")};
`;

export const ProductsPage = () => {
  const { isLoading, isError } = useSelector((state) => state.ProductReducer);
  const {setfilter,filters,togglefilter,settogglefilter}=React.useContext(ProductContext);
  const [searchParams, setSeachParams] = useSearchParams();
  const initialfilters=useRef({
    gender:searchParams.getAll("gender")||[],
    itemType:searchParams.getAll("itemType")||[],
    brand:searchParams.getAll("brand")||[],
    rating:searchParams.getAll("rating")||[],
    discount:searchParams.getAll("discount")||[],
    discountedPrice:searchParams.get("discountedPrice")||"",
    price:searchParams.getAll("price")||[],
});


  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle,settoggle]=React.useState(false);
 
  return (
    <Box >
    <Box border={'0px solid green'} >
      {!isLoading && <Navbar />}
      {/* <marquee behavior="scroll" direction="left" scrollamount="22">
        <h2
          style={{
            width: "150px",
            height: "55px",
          }}
        ></h2>
      </marquee> */}
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
      <Box w={'100%'} h={'auto'} justifyContent={'space-between'} display={'flex'} >
        {!isLoading && (
          <SideBar   toggle={toggle} settoggle={settoggle}  initialfilters={initialfilters}  />
       
        )}
        <ProductList toggle={toggle} settoggle={settoggle} initialfilters={initialfilters} />
      </Box>

      
    </Box>
    <Footer />
    </Box>
  );
};
