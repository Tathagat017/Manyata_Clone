import {
  Box,
  Text,
  Flex,
  Button,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Input,
  PinInputField,
  HStack,
  Heading,
  PinInput,
  Stack,
  CardBody,
  CardHeader,
  Card,
  Radio,
  RadioGroup,
  Grid,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Navbar from "./../../Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import GetLocation from "./../../Pages/Order/Address";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiDeliveryDrone } from "react-icons/gi";
const Payment = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toast = useToast();
  const [price, setPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);
  const [cardDetail, setCardDetail] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [order, setOrder] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  console.log(cart);

  useEffect(() => {
    let n = localStorage.getItem("cart");
    n = JSON.parse(n);
    setCart(n);
  }, []);
  // redux start
  const isAuth = true;
  let dispatch = useDispatch();
  // redux end

  // React.useEffect(() => {
  //   let newPrice = 0;
  //   for (let i = 0; i < cartData.length; i++) {
  //     newPrice = newPrice + cartData[i].discounted_price;
  //   }
  //   setPrice(newPrice);
  //   setCartData(user.cart);
  // }, [cartData, user]);

  const handlepayment = (e) => {
    setCardDetail(e);
  };

  const handleOrderPlaced = () => {
    localStorage.setItem("orderPlaced", cart);
    return toast({
      title: "Order Placed Successfully",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top",
      variant: "subtle",
      bgColor: `cyan.500`,
      color: "white",
      size: "lg",
    });
  };

  // function HandleCheckOut() {
  //   console.log("in");
  //   let userId = user.id;
  //   let OrderHistory = user.order;
  //   const NewOrderHistory = OrderHistory.concat(user.cart);
  // }

  // const gotoaddress = () => {};
  function HandleCheckOut() {}
  if (isAuth == false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  } else {
    return (
      <>
        <div>
          <Navbar />
        </div>

        <marquee behavior="scroll" direction="right" scrollamount="15">
          <CiDeliveryTruck size={"300px"} marginTop={"100px"} />
        </marquee>
        <marquee behavior="scroll" direction="left right" scrollamount="15">
          <GiDeliveryDrone size={"100px"} />
        </marquee>
        <Grid
          gridTemplateColumns={{ base: "80%", md: "60% 40%" }}
          w={{ base: "100%", md: "70%", lg: "70%" }}
          // margin={{ base: "60px auto", md: "180px auto" }}
          padding={{ paddingTop: "3rem" }}
          gap={{ base: "10px", md: "10px", lg: "20px" }}
          paddingTop={"20vh"}
          marginLeft={"15vw"}
          h={"100vh"}
        >
          <Box>
            <Grid align={"center"} justifyContent={"space-between"}>
              <Text
                fontSize={"20px"}
                fontWeight={"550"}
                mb={"20px"}
                textAlign="left"
              >
                Payment Method
              </Text>{" "}
              <RadioGroup onChange={(e) => handlepayment(e)} value={cardDetail}>
                <Stack direction="row">
                  <Radio value="cash">
                    <Text fontSize={20}>Cash</Text>
                  </Radio>
                  <Radio value="card">
                    <Text fontSize={20}>Card</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
              {/* ==== Card Detail ===== */}
              {cardDetail === "card" ? (
                <form
                  style={{ width: "200%" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCheckout(true);
                    handleOrderPlaced();
                    return toast({
                      title: "Order Placed Successfully",
                      status: "info",
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                      variant: "subtle",
                      bgColor: `cyan.900`,
                      color: "white",
                      size: "lg",
                    });
                  }}
                >
                  <Card border="1px" borderColor="blue.500" margin="18px 0">
                    <CardHeader>
                      <Heading size="lg"> Card Payment </Heading>
                    </CardHeader>

                    <CardBody>
                      <Stack spacing="4">
                        <Box>
                          <Heading
                            size="md"
                            textTransform="uppercase"
                            textAlign={"left"}
                            margin="4px 2px"
                          >
                            Card Number
                          </Heading>
                          <Input
                            variant="flushed"
                            type="number"
                            placeholder="Enter Card Number"
                            isRequired
                          />
                        </Box>
                        <Box>
                          <Heading
                            size="md"
                            textTransform="uppercase"
                            textAlign={"left"}
                            margin="6px 2px"
                          >
                            Evpiration Date
                          </Heading>
                          <Input
                            placeholder="Expiry date"
                            size="md"
                            type="datetime-local"
                            isRequired
                          />
                        </Box>
                        <Box>
                          <Heading
                            size="md"
                            textTransform="uppercase"
                            textAlign={"left"}
                            margin="6px 2px"
                          >
                            C V V
                          </Heading>
                          <HStack>
                            <PinInput type="alphanumeric">
                              <PinInputField />
                              <PinInputField />
                              <PinInputField />
                            </PinInput>
                          </HStack>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                  <Text fontSize={{ base: "14px" }} textAlign="left">
                    Save Card Details
                  </Text>{" "}
                  {/* <Checkbox colorScheme="green" border={"white"}></Checkbox> */}
                  <Input
                    cursor={"pointer"}
                    fontSize={{ base: "16px" }}
                    bg={"green.100"}
                    _hover={{ bg: "green.100" }}
                    type={"submit"}
                    colorScheme="green"
                    border={"white"}
                  />
                </form>
              ) : cardDetail === "cash" ? (
                <Box
                  style={{
                    width: "200%",
                    marginTop: "20px",
                  }}
                >
                  {/* <Button
                    w="full"
                    justifyContent={"space-between"}
                    gap={{ base: "110px", md: "372px", lg: "280px" }}
                    padding={"25px 14px"}
                    bg={"green.100"}
                    _hover={{ bg: "green.100" }}
                    mb="10px"
                  >
                    <Text fontSize={{ base: "16px" }}>Cash on Delivery</Text>{" "}
          
                  </Button> */}
                  <Text fontSize={{ base: "16px" }} textAlign="left" mb="10px">
                    Cash on Delivery
                  </Text>
                  <RouterLink to="/">
                    <Button
                      w="full"
                      onClick={(e) => {
                        setCheckout(true);
                        handleOrderPlaced();
                        return toast({
                          title: "Order Placed Successfully",
                          status: "info",
                          duration: 3000,
                          isClosable: true,
                          position: "top",
                          variant: "subtle",
                          bgColor: `cyan.500`,
                          color: "white",
                          size: "lg",
                        });
                      }}
                      cursor={"pointer"}
                      fontSize={{ base: "16px" }}
                      bg={"green.400"}
                      colorScheme="green"
                      border={"white"}
                    >
                      Submit
                    </Button>
                  </RouterLink>
                </Box>
              ) : null}
            </Grid>
          </Box>
          <Box ml={"10vw"}>
            <Text fontSize={"2xl"}>Addresss :</Text>
            <GetLocation />
          </Box>
          {/* <Box padding={"10px"}>
            <Text fontWeight={"600"} fontSize={"20px"}>
              Price Details{" "}
            </Text>
            <Flex
              justifyContent={"space-between"}
              fontWeight={"600"}
              color={"gray"}
              fontSize="13px"
              m={"10px auto"}
            >
              <Text>Total Product Price</Text>
              <Text>
                {"₹"}
                {price}
              </Text>
            </Flex>
            <hr />
            <Flex
              justifyContent={"space-between"}
              fontSize={"17px"}
              fontWeight={"600"}
              m={"10px auto"}
            >
              <Text>Order Total</Text>
              <Text>
                {"₹"}
                {price}
              </Text>
            </Flex>

            <Button
              fontSize={"10px"}
              outline={"none"}
              padding={{ base: "1px 17px", md: "1px 95px", lg: "1px 77px" }}
              m={"10px auto"}
            >
              <Text>
                {cardDetail === ""
                  ? "Please Select Payment Method"
                  : "Clicking on ‘Continue’ will not deduct any money"}
              </Text>
            </Button>

            <br />

            {/* <Box m="auto">
              <Button
                isDisabled={checkout === false}
                fontSize={"15px"}
                bg={"pink.400"}
                padding={{
                  base: "10px 78px",
                  md: "100px 130px",
                  lg: "10px 15px",
                }}
                color={"white"}
                borderRadius={"5px"}
                m={"10px auto"}
                _hover={{ bg: "pink.450" }}
                onClick={HandleCheckOut}
              ></Button>
            </Box> */}
          {/* </Box>  */}
        </Grid>
      </>
    );
  }
};

export default Payment;
