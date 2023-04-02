import React from "react";
import { LoginForm } from "../../Components/LoginPageComponents/LoginForm";
import { LoginForm2 } from "./../../Components/LoginPageComponents/LoginForm2";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
import styled from "styled-components";

const LOGINWRAP = styled.div`
  padding: 5%;
  padding-left: 0;
  padding-right: 0;
`;

export const LoginPage = () => {
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
