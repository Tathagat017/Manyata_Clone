import React from "react";
import { LoginForm } from "../../Components/LoginPageComponents/LoginForm";
import { LoginForm2 } from "./../../Components/LoginPageComponents/LoginForm2";
import Navbar from "./../../Components/NavBar";
import Footer from "./../../Components/Footer";

export const LoginPage = () => {
  // return <LoginForm />;
  return (
    <div>
      <Navbar />
      {/* <LoginForm2 /> */}
      <LoginForm2 />
      <Footer />
    </div>
  );
};
