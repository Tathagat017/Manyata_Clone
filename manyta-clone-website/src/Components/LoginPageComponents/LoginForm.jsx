import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #ffdede;
  }
  body {
    font-family: "Poppins", sans-serif;
    background: #dea2a2;
  }

  .wrapper {
    max-width: 580px;
    width: 100%;
    height: 94vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 1rem;
    margin: 1.5% auto 1.5% auto;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }

  .main-heading {
    color: #212121;
    text-transform: capitalize;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: bold;
  }
  .sub-text {
    color: #3d3d3d;
    font-size: 1rem;
    margin-top: 2%;
  }

  .form-wrapper {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }

  .input-field {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 100%;
    padding: 0.5rem 0rem;
  }

  .input-field label {
    color: rgb(62, 62, 62);
    font-size: 0.8rem;
  }
  .input-field input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 13px;
    outline: none;
    background: #ffff;
    border: 2px solid #ccc;
    margin-top: 0.5rem;
    color: #000;
    font-family: inherit;
  }
  input:focus {
    border: 2px solid #2193b0;
  }

  .form-wrapper button,
  .main-button {
    background: linear-gradient(to right, #b02d21, #ed6d95);
    color: #fff;
    width: 100%;
    padding: 0.75rem;
    font-weight: 600;
    font-family: inherit;
    margin-top: 0.75rem;
    outline: none;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .form-wrapper button:hover {
    opacity: 0.9;
  }

  .bottom-message {
    width: 100%;
    text-align: center;
    color: #ccc;
    margin-top: 2rem;
  }
  .bottom-message h5 {
    font-weight: 400;
  }
  .bottom-message h5 a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
  .heading-flex {
    display: flex;
    justify-content: space-around;
  }

  .heading-flex > h1 {
    margin-left: 0.15rem;
  }
  img {
    width: 100%;
  }
`;
export const LoginForm = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState([]);
  const [phone, setPhone] = useState("");
  // const loginSubmit = (e) => {
  //   e.preventDefault();

  //   let phone_number = e.target.phone.value;
  //   const appVerifier = window.recaptchaVerifier;

  //   auth
  //     .signInWithPhoneNumber(phone_number, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       console.log("otp sent");
  //       setViewOtpForm(true);
  //       window.confirmationResult = confirmationResult;
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //       alert(error.message);
  //     });
  // };

  // const otpSubmit = (e) => {
  //   e.preventDefault();

  //   let opt_number = e.target.otp_value.value;

  //   window.confirmationResult
  //     .confirm(opt_number)
  //     .then((confirmationResult) => {
  //       console.log(confirmationResult);
  //       console.log("success");
  //       window.open("/", "_self");
  //     })
  //     .catch((error) => {
  //       // User couldn't sign in (bad verification code?)
  //       alert(error.message);
  //     });
  // };

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     setUser(user);
  //   }
  // });

  const loginSubmit = () => {};
  const otpSubmit = () => {};
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="heading-flex">
          <h1 className="main-heading">Login</h1>
          <h1> or </h1> <h1 className="main-heading">Sign up</h1>
        </div>

        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"></img>
        <h3 className="sub-text">Sign in using your mobile number.</h3>
        {!viewOtpForm ? (
          <div className="form-wrapper">
            <form id="loginForm" onSubmit={loginSubmit}>
              <div className="input-field">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="+91-"
                  name="phone"
                  value={phone}
                  autoComplete="false"
                  minLength="10"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button className="main-button" type="submit" id="sign-in-button">
                Continue
              </button>
            </form>
          </div>
        ) : (
          <div className="form-wrapper" onSubmit={otpSubmit}>
            <form id="otpForm">
              <div className="input-field">
                <label>Enter OTP</label>
                <input
                  type="number"
                  placeholder="One time password"
                  name="otp_value"
                  autoComplete="false"
                />
              </div>
              <button className="main-button" type="submit">
                Verify OTP
              </button>
            </form>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
