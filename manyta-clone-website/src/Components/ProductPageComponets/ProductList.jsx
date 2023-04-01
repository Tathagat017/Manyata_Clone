import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductReducer/Action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
const Main = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  gap: 24px;
  transition: 0.5s ease;
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
  const array = new Array(products.length).fill(0);
  useEffect(() => {
    dispatch(getProducts());
    console.log(products.length);
  }, []);

  return (
    <Main data-testid="product-list">
      {products.length > 0 &&
        products?.map((el) => {
          return (
            <div className="Hover" key={el.id}>
              <ProductCard product={el} />
            </div>
          );
        })}
    </Main>
  );
};
