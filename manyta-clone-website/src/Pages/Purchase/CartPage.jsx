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
} from "@chakra-ui/react";
export const CartPage = () => {
  const { cartStored } = useSelector((state) => state.CartReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Input, setInput] = useState("GIFTFORYOU");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [local, setLocal] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || null;
    // console.log(cart);
    setLocal(cart);
  }, []);
  const handleDelete = () => {};
  const handleCoupon = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      <Flex w={"100vw"}>
        <Box>
          {local.length > 0 &&
            local.map((el) => {
              return (
                <Box>
                  <Box mt={4}>
                    <CartCard
                      product={el}
                      key={el.id}
                      onDelete={handleDelete}
                    />
                  </Box>
                </Box>
              );
            })}
        </Box>
        <Box w={"30%"} border={"1px"} m={"2%"}>
          <Box>
            <>
              <Image src="./CartCoupon.jpg"></Image>
              <Button onClick={onOpen} variant={"solid"} colorScheme={"purple"}>
                Apply Coupon
              </Button>

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
                    <Input placeholder="Apply Coupon" value={Input} />
                    <Select
                      placeholder="Available Coupons"
                      variant={"outline"}
                      onChange={(e) => handleCoupon(e)}
                    >
                      <option value="GIFTNOW">GIFTNOW</option>
                      <option value="GIFTNOW">GIFTNOW</option>
                    </Select>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">APPLY</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Text fontSize="xl" color="gray.500">
              Total Price : {}
            </Text>
          </Box>
          <Button colorScheme="green" size="md">
            Order Now
          </Button>
        </Box>
      </Flex>

      <Footer />
    </div>
  );
};
