import React from "react";
import { LoginForm } from "../../Components/LoginPageComponents/LoginForm";
import { LoginForm2 } from "./../../Components/LoginPageComponents/LoginForm2";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Spinner, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
  BsPlusLg,
} from "react-icons/bs";
import { UserPage } from "./UserPage";
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
export const LoginPage = () => {
  const { isAuth } = useSelector((state) => state.AuthReducer);

  const handleLogout = () => {
    window.location.reload();
  };

  if (isAuth) {
    return <UserPage />;
  }
  // return <LoginForm />;
  return (
    <div>
     

      <LOGINWRAP>
        <LoginForm2 />
        {/* <LoginForm2 /> */}
      </LOGINWRAP>
     
    </div>
  );
};
