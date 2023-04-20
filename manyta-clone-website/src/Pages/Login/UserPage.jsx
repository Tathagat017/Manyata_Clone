import React from "react";
import { LoginForm } from "../../Components/LoginPageComponents/LoginForm";
import { LoginForm2 } from "./../../Components/LoginPageComponents/LoginForm2";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

import {
  Spinner,
  Button,
  Input,
  Flex,
  Text,
  Stack,
  Box,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  InputGroup,
  Avatar,
  InputRightElement,
  CheckIcon,
  PhoneIcon,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
  BsPlusLg,
  BsFillHouseDoorFill,
  BsBagCheckFill,
} from "react-icons/bs";

import { FcCustomerSupport } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import { actiondatasuccess } from "./../../redux/AdminReducer/Action";
const LOGINWRAP = styled.div`
  padding: 5%;
  padding-left: 0;
  padding-right: 0;
`;

const Check = styled.div`
  padding: 5vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: green;
  margin-bottom: 3vh;
`;

const Main = styled.div`
  background-color: #dbd4ce;
`;
const UserPage = () => {
  const { isAuth } = useSelector((state) => state.AuthReducer);
  console.log("user");
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      {/* <Main>
        <Navbar />
        <Check></Check>
        <Check></Check>
        <Check>
          {" "}
          <Button colorScheme="blue" variant="solid" onClick={handleLogout}>
            Logout
          </Button>{" "}
          <marquee behavior="scroll" direction="left" scrollamount="12">
            <Flex>
              <BsTelephoneFill size={"3vw"} />
              <h5> {`logged in: 917349554782 `}</h5>
            </Flex>
          </marquee>
        </Check>

        <Check>
          <Check>
            <Flex>
              <RouterLink to="/">
                <Button colorScheme="purple" variant="outline">
                  Go To Home Page
                </Button>{" "}
              </RouterLink>
              <Spacer />
              <RouterLink to="/cart">
                <Button colorScheme="purple" variant="outline">
                  CART: <BsFillCartFill />
                </Button>{" "}
              </RouterLink>
              <Spacer />
              <RouterLink to="/wishlist">
                <Button colorScheme="purple" variant="outline">
                  WishList :<BsFillBookmarkHeartFill />
                </Button>{" "}
              </RouterLink>
            </Flex>{" "}
          </Check>
        </Check>
        <Footer />
      </Main> */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "aliceblue",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <marquee behavior="scroll" direction="left right" scrollamount="2">
          <h2
            style={{
              backgroundImage: 'url("./charity.jpg")',
              width: "100px",
              height: "100px",
            }}
          ></h2>
        </marquee>
        <h2 style={{ color: "teal" }}>My Account</h2>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <SidePanel>
            <RouterLink to="/">
              <Button colorScheme="blue" variant="outline">
                <BsFillHouseDoorFill />
                Home
              </Button>{" "}
            </RouterLink>
            <RouterLink to="/">
              <Button colorScheme="blue" variant="outline">
                <BsBagCheckFill /> Orders
              </Button>{" "}
            </RouterLink>
            <Button colorScheme="blue" variant="outline">
              <FcCustomerSupport /> support
            </Button>
            <Spacer />
          </SidePanel>
          <MainDisplay>
            <ShowUserProfile />
          </MainDisplay>

          <SidePanel>
            <Button colorScheme="blue" variant="outline" onClick={handleLogout}>
              <BiLogOut /> Logout
            </Button>{" "}
            <RouterLink to="/wishlist">
              <Button colorScheme="blue" variant="outline">
                <BsFillStarFill /> Wishlist
              </Button>{" "}
            </RouterLink>
            <RouterLink to="/cart">
              <Button colorScheme="blue" variant="outline">
                <BsFillCartFill /> Go to cart
              </Button>{" "}
            </RouterLink>
            <Spacer />
          </SidePanel>
        </Stack>
      </div>
      <Footer />
    </div>
  );
};

const SidePanel = styled.div`
  display: grid;
`;
const MainDisplay = styled.div``;

const ShowUserProfile = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <label for="userProfile">
          <Avatar
            id="userProfile"
            src="./avatar.jpg"
            w={"200px"}
            h={"200px"}
            border={"ActiveBorder"}
          ></Avatar>
          <Input
            ml={"-150px"}
            mt={"100px"}
            type="file"
            id="fileField"
            name="file"
            accept="image/*"
            variant={"flushed"}
            border={"none"}
            borderColor={"blue.400"}
            w="6vw"
          ></Input>
        </label>
      </Flex>

      <Stack direction="column" spacing={4}>
        <InputGroup>
          <Text value={"Tathagat"}>Name </Text>
          <InputLeftElement pointerEvents="none" />
          <Input type="tel" placeholder="Name" />
        </InputGroup>
        <InputGroup>
          <Text>Phone </Text>
          <InputLeftElement pointerEvents="none" />
          <Input type="tel" placeholder="Phone number" value={"917349554782"} />
        </InputGroup>
        <InputGroup>
          <Text>Email </Text>
          <InputLeftElement pointerEvents="none" />
          <Input
            type="tel"
            placeholder="Email"
            value="tathagatraj4@gmail.com"
          />
        </InputGroup>
        <InputGroup>
          <Text>Address </Text>
          <InputLeftElement pointerEvents="none" />
          <Input type="tel" placeholder="Address" />
        </InputGroup>

        <Button colorScheme="blue" variant="solid">
          Save
        </Button>
      </Stack>
    </>
  );
};

export { UserPage };
