import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductReducer/Action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const Main = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

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
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);

  return (
    <Main data-testid="product-list">
      {products.length > 0 &&
        products?.map((el) => {
          return (
            <div className="Hover">
              <ProductCard product={el} />
            </div>
          );
        })}
    </Main>
  );
};
