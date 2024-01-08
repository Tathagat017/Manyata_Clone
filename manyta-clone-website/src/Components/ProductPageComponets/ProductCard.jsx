import React, { useState, useEffect } from "react";
// import { addToCart } from "../Redux/CartReducer/action";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Text, Flex, Box, Stack, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  BsFillShieldLockFill,
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
  BsPlusLg,
} from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Image,
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import {
  AddToCartAction,
  ModifyCartAction,
  addToCart,
} from "./../../redux/CartReducer/Action";
/////
import { Navigate, useNavigate } from "react-router-dom";
import { addwishlist } from "../../redux/WishListReducer/Action";
const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  width: 17vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: none;
  /* padding: 1%; */
  padding-top: 0;
  padding: 0;
  padding-bottom: 1vh;
  cursor: pointer;
  margin:auto;
  img {
    width: 17vw;
    height: 35vh;
    margin-top: 0;
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
    .tohide{
      .tohidee{
      display:none
    }
  }
  }
  .product-letter {
    color: #272626;
    font-family: roboto;
    text-align:start;
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
  
  }
  .image-wrapper .rating {
    position: absolute;
    bottom: 10px;
    left: 10px;
    
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px;
    display: flex;
    font-size: 0.7rem;
    align-items: center;
    color: #353637;
  }
  .DrawerImage {
    width: 100%;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
  .product-title{
    color:grey;
    text-align:start;
  
  }
`;

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { products, isLoading, isError } = useSelector(
    (state) => state.ProductReducer
  );
  const { cart } = useSelector((state) => state.CartReducer);

  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate=useNavigate();
  //add to wishlist  
  const handleaddwishlist = () => {
      dispatch(addwishlist(product._id,'658dc10269d837c0b61367a3'));
    };
  //add to wishlist
 
  return (
    <Box  border={'0px solid red'}>
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
            <img onClick={()=> navigate(`/products/${product._id}`)} src={product.image} className="product-image" alt="error"></img>
          </div>
          
<div className="tohide">
<Stack   direction={'column'} justifyContent={'flex-start'} spacing={'2'} pt={'1rem'}>
<div className="tohidee">
<Box textAlign={'start'}><b>{product.brand}</b></Box>
<Box color={'grey'} textAlign={'start'}>{product.title}</Box>
</div>
<div className="button-container">
<Button className="add-to-wishlist" variant="outline" size={"md"} onClick={()=>handleaddwishlist()}>
                <span className="button-span">
                  <BsFillBookmarkHeartFill style={{ color: "lightcoral" }} />
                </span>
              </Button>
              <Button variant="outline">
                <span
                  className="button-span"
                  ref={btnRef}
                  colorScheme="teal"
                  onClick={onOpen}
                >
                  <BsFillCartFill style={{ color: "cornflowerblue" }} />
                  </span>
                  </Button>
</div>
<Box display={'flex'} justifyContent={'flex-start'} gap={'0.5rem'}>
  <Box><b>Rs.{product.discountedPrice}</b></Box>
  <Box color={'grey'} textDecoration={'line-through'}>Rs.{product.originalPrice}</Box>
  <Box color={'red'} textDecoration={'line-through'}> ({product.discount}% OFF)</Box>
</Box>
</Stack>
</div>




        </div>
      </Main>
    </Box>
  );
};

  // <div className="button-container">
  //           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  //             <Button className="add-to-wishlist" variant="outline" size={"md"}>
  //               <span className="button-span">
  //                 <BsFillBookmarkHeartFill style={{ color: "lightcoral" }} />
  //               </span>
  //             </Button>
  //           </motion.div>
  //           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  //             <Button variant="outline">
  //               <span
  //                 className="button-span"
  //                 ref={btnRef}
  //                 colorScheme="teal"
  //                 onClick={onOpen}
  //               >
  //                 <BsFillCartFill style={{ color: "cornflowerblue" }} />
  //                 <Drawer
  //                   isOpen={isOpen}
  //                   placement="right"
  //                   onClose={onClose}
  //                   finalFocusRef={btnRef}
  //                   size={"md"}
  //                 >
  //                   <DrawerOverlay />
  //                   <DrawerContent>
  //                     <DrawerCloseButton />
  //                     <DrawerHeader>Cart</DrawerHeader>

  //                     <DrawerBody>
  //                       <Flex
  //                         direction={"column"}
  //                         justifyContent={"space-between"}
  //                         alignItems={"center"}
  //                       >
  //                         <Image
  //                           src={product.image}
  //                           w="50%"
  //                           h={"40vh"}
  //                           boxShadow="xl"
  //                           padding={"1%"}
  //                           alt="error"
  //                         ></Image>

  //                         <Text>
  //                           <b>{product.title}</b>
  //                         </Text>
  //                         <Text>{product.discount}</Text>
  //                         <Text>{product.description}</Text>
  //                         <Text fontWeight={"500"}>
  //                           {/* <CartTotal price={product.discountedPrice} /> */}
  //                           </Text>
  //                           <Flex
  //                             alignItems={"center"}
  //                             justifyContent={"space-evenly"}
  //                             w={"80%"}
  //                           >
  //                             <motion.div whileTap={{ scale: 0.85 }}>
  //                               <Button
  //                                 onClick={() => setQuantity((prev) => prev - 1)}
  //                                 variant="outline"
  //                                 colorScheme="blackAlpha"
  //                                 border={"2px solid black"}
  //                                 isDisabled={quantity === 1}
  //                               >
  //                                 <AiOutlineMinus color="seagreen" />
  //                               </Button>
  //                             </motion.div>
  //                             <Text>{quantity}</Text>
  //                             <motion.div whileTap={{ scale: 0.85 }}>
  //                               <Button
  //                                 onClick={() => setQuantity((prev) => prev + 1)}
  //                                 colorScheme="blackAlpha"
  //                                 variant="outline"
  //                                 border={"2px solid black"}
  //                               >
  //                                 <BsPlusLg color="seagreen" />
  //                               </Button>
  //                             </motion.div>
  //                           </Flex>
  //                         </Flex>
  //                       </DrawerBody>
  
  //                       <DrawerFooter>
  //                         <motion.div
  //                           whileHover={{ scale: 1.05 }}
  //                           whileTap={{ scale: 0.95 }}
  //                         >
  //                           <Button variant="outline" mr={3} onClick={onClose}>
  //                             Cancel
  //                           </Button>
  //                         </motion.div>
  //                         <motion.div
  //                           whileHover={{ scale: 1.05 }}
  //                           whileTap={{ scale: 0.95 }}
  //                         >
  //                           <Button
  //                             colorScheme="facebook"
  //                             // onClick={(e) => handleAddToCart(product)}
  //                           >
  //                             Add to Cart
  //                           </Button>
  //                         </motion.div>
  //                       </DrawerFooter>
  //                     </DrawerContent>
  //                   </Drawer>
  //                 </span>
  //               </Button>
  //             </motion.div>
  //           </div> 