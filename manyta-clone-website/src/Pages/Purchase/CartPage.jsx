import React from "react";
import { CartCard } from "./../../Components/ProductPageComponets/CartCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Image,
  Select,
  Stack,
} from "@chakra-ui/react";

import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import GetLocation from "./../Order/Address";

export const CartPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Input, setInput] = useState("GIFTFORYOU");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [Bill, setBill] = useState(0);
  const [changedBill, setChangedBill] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [local, setLocal] = useState([]);
  const { cartInStore } = useSelector((state) => state.CartReducer);
  const [id, setId] = useState("");
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    let totalSum;
    cart.map((el) => {
      totalSum += el.TotalPriceThisItemInCart;
    });

    setLocal(cart);
    console.log(cart);
    let sum =
      local.length > 0 &&
      local?.reduce(
        (a, b) => a.TotalPriceThisItemInCart + b.TotalPriceThisItemInCart
      );
    setBill(sum);
  }, []);

  let localNew;
  const handleDelete = (i) => {
    // local =
    //   local.length > 0 &&
    //   local?.filter((el) => {
    //     if (el.id === id) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   });
    console.log(i);
    localNew = local.filter((el) => {
      //console.log(el.id);
      return +el.id !== +i;
    });

    console.log(localNew);
    setLocal(localNew);
    localStorage.setItem("cart", JSON.stringify(localNew));
  };

  const handleCoupon = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onApply = (Bill) => {
    setChangedBill((Bill) => Math.floor(Bill / 2));
    setClicked((prev) => true);
  };
  const handleOrder = () => {
    return <Navigate to={"/payments"} />;
  };

  let data = {
    image: "",
    title: "",
    quantity: 1,
    discountedPrice: "Rs1233",
    TotalPriceThisItemInCart: 500,
  };
  let sum = 0;
  local.map((el) => {
    sum += +el.TotalPriceThisItemInCart;
  });
  return (
    <MAX>
      <Navbar />
      <h1>Cart</h1>

      <Flex w={"100vw"}>
        <Box w={"70%"}>
          {local.length > 0 &&
            local.map((el, i) => {
              return (
                <Box>
                  <Box mt={4} ml={3}>
                    <CartCard
                      product={el}
                      key={el.id}
                      item={el.id}
                      onDelete={handleDelete}
                      local={local}
                    />
                  </Box>
                </Box>
              );
            })}
        </Box>
        <Box w={"30%"} m={"2%"} ml={"10%"}>
          <Box>
            <>
              <Image src="./CartCoupon.jpg"></Image>
              <Button onClick={onOpen} variant={"solid"} colorScheme={"purple"}>
                Apply Coupon
              </Button>
              <p fontSize="xl" color="gray.500">
                Product Details
              </p>
              <p fontSize="lg" color="gray.500">
                Amount in Cart:
                {sum}
              </p>
              <p fontSize="lg" color="gray.500">
                Convineince fee : Rs 30
              </p>
              <p fontSize="lg" color="gray.500">
                Coupon Discount :{!clicked ? 0 : "50%"}
              </p>
              <p fontSize="xl" color="gray.500">
                Total Price : {!clicked ? sum + 30 : Math.floor(sum / 2) + 30}
              </p>

              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset="scale"
                size={"md"}
                bgColor="grey.300"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Available : GIFTFORYOU</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text fontWeight="bold" mb="1rem">
                      Apply coupon to get discounts
                    </Text>

                    <input
                      type="text"
                      placeholder="Coupon"
                      value={Input}
                      style={{ width: "95%", border: "2px" }}
                    />

                    <Select
                      placeholder="Available Coupons"
                      variant={"outline"}
                      onChange={(e) => handleCoupon(e)}
                    >
                      <option value="GIFTNOW">GIFTNOW</option>
                      <option value="GIFTNOW">GIFT</option>
                    </Select>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="purple" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="purple"
                      onClick={() => onApply(Bill)}
                      isDisabled={clicked}
                    >
                      APPLY
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </Box>
          <Button colorScheme="purple" size="md" onClick={handleOrder}>
            <Link to="/payments"> Order Now</Link>
          </Button>
        </Box>
      </Flex>

      <Footer />
    </MAX>
  );
};
const MAX = styled.div``;
