import { useState } from "react";
// import { addToCart } from "../Redux/CartReducer/action";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";
import {
  BsFillShieldLockFill,
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
} from "react-icons/bs";
import { Box } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  wimport CartModal from './CartModal';
idth: 17vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1%; */
  padding-top: 0;
  padding: 0;

  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  img {
    width: 17vw;
    height: 45vh;

    margin-top: 0;
    /* border-radius: 5% 5% 5% 5%; */
    margin-bottom: 0;
  }
  .button-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    transition: 0.4s;
  }
  .button-container {
    display: none;
  }

  .Hover {
    transition: 0.5s ease;
  }
  .Hover:hover {
    /* transform: scale(1.012); */

    .button-container {
      display: flex;
      transform: scale(1);
    }

    /* img:hover {
      width: 60vw;
    } */
  }
  .product-letter {
    font-size: 0.8rem;
    color: #272626;
    line-height: 1rem;
    font-family: roboto;
  }
  .price {
    color: #565656;
  }

  .orignal {
    text-decoration: line-through;
  }
  .product-pricing {
    display: flex;
    justify-content: center;
  }
  .product-discount {
    font-size: 0.8rem;
    color: #535665;
  }

  .image-wrapper {
    position: relative;
  }

  .image-wrapper img {
    z-index: 1;
  }

  .image-wrapper .rating {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px;
    display: flex;
    font-size: 0.7rem;
    align-items: center;
    color: #353637;
  }
`;

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.ProductReducer
  );
  //   const handleCart = (product) => {
  //     dispatch(addToCart(product));
  //   };
  if (isError) return <Box children="error" />;
  return (
    <Box>
      <Main>
        <div className="Hover">
          <div className="image-wrapper">
            <div className="rating">
              <BsFillStarFill style={{ color: "lightseagreen" }} />
              {"  "}
              <b>
                &nbsp;
                {product.rating} | {product.rating_Count}
              </b>
            </div>
            <img src={product.image} className="product-image"></img>
          </div>
          {/* <h3 className="product-title">{product.title}</h3> */}
          <p className="product-letter">
            <b>{product.brand}</b>
          </p>
          <div className="product-pricing">
            <p className="product-letter orignal">
              <span style={{ color: "red", textDecoration: "line-through" }}>
                <span style={{ color: "#535665" }}>
                  {product.originalPrice}
                </span>
                -
              </span>
            </p>
            <p className="product-discount">{product.discount}</p>
          </div>
          <p className="product-letter price">
            <b>{product.discountedPrice}</b>
          </p>
          {/* <p>{product.rating}</p> */}
          <div className="button-container">
            <Button className="add-to-wishlist" variant="outline" size={"md"}>
              <span className="button-span">
                <BsFillBookmarkHeartFill style={{ color: "lightcoral" }} />
              </span>
            </Button>
            <Button variant="outline">
              <span className="button-span">
                <BsFillCartFill style={{ color: "cornflowerblue" }} />
              </span>
            </Button>
          </div>
        </div>
      </Main>
    </Box>
  );
};
//style={{ color: "lightcoral" }}
