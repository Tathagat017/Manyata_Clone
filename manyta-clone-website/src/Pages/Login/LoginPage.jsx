import React from "react";
import { LoginForm } from "../../Components/LoginPageComponents/LoginForm";
import { LoginForm2 } from "./../../Components/LoginPageComponents/LoginForm2";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Spinner, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
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

export const LoginPage = () => {
  const { isAuth } = useSelector((state) => state.AuthReducer);
  if (isAuth) {
    return (
      <div>
        <Navbar />
        <Check></Check>
        <Check></Check>
        <Check>
          {" "}
          <marquee behavior="scroll" direction="left" scrollamount="12">
            <h1>{`logged in- profile page`}</h1>
          </marquee>
        </Check>
        <RouterLink to="/">
          <Button colorScheme="pink" variant="ghost">
            Go To Home Page
          </Button>{" "}
        </RouterLink>
      </div>
    );
  }
  // return <LoginForm />;
  return (
    <div>
      <Navbar />
      <LOGINWRAP>
        <LoginForm2 />
        {/* <LoginForm2 /> */}
      </LOGINWRAP>
      <Footer />
    </div>
  );
};
