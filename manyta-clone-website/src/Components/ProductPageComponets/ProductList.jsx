import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductReducer/Action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
import { CartModel } from "./CartModal";
const Main = styled.div`
  width: 75vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 18vw;
  gap: 1.4vw;
  transition: 0.5s ease;
  padding: 2%;
  overflow: hidden;
  box-sizing: border-box;
  .Hover {
    .Hover:hover {
      transform: scale(1.02);
      height: 65.8vh;
    }
  }
`;
export const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    let paramObj = {
      params: {
        gender: searchParams.getAll("gender"),
        itemType: searchParams.getAll("itemType"),
        brand: searchParams.getAll("brand"),
        rating_gte: searchParams.getAll("rating_gte"),
        discount_gte: searchParams.getAll("discount_gte"),
      },
    };
    dispatch(getProducts(paramObj));
    console.log(products.length);
  }, [location.search]);
  console.log(location.search);
  return (
    <Main data-testid="product-list">
      {products.length > 0 &&
        products?.map((el) => {
          return (
            <div className="Hover" key={el.id}>
              {/* <ProductCard product={el} /> */}
              <CartModel product={el} />
            </div>
          );
        })}
    </Main>
  );
};
