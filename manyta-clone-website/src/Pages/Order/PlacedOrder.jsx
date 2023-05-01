import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
import GetLocation from "./Address";
export const OrderPlacedPage = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    let n = localStorage.getItem("cart");
    n = JSON.parse(n);
    setOrder(n);
  }, []);
  console.log(order);

  let sum = 0;
  order.map((el) => {
    sum += +el.TotalPriceThisItemInCart;
  });
  return (
    <div>
      <Navbar />
      <marquee behavior="scroll" direction="left right" scrollamount="2">
        <h2
          style={{
            backgroundImage: 'url("./charity.jpg")',
            width: "100px",
            height: "100px",
          }}
        ></h2>
      </marquee>
      {order?.map((el) => {
        return (
          <Card>
            <Flex>
              <img src={el.image} className="ima"></img>
              <div>
                <h5>
                  <b> Name:{el.title}</b>
                </h5>
                <h5>
                  <b>Status : {"Dispatched"}</b>
                </h5>
                <h5>Quantity:{el.quantity}</h5>
                <h5>Cost:{el.discountedPrice}</h5>
                <h5>Placed on :{Date().toString()}</h5>
                <h5>Address: Yelahanka , Bengaluru, Bengaluru North-560097</h5>
              </div>
            </Flex>
          </Card>
        );
      })}
      <h4>Total cost of order :Rs.{sum}</h4>
      {/* <GetLocation /> */}
      <Footer></Footer>
    </div>
  );
};
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2%;
`;

const Flex = styled.div`
  display: flex;
  padding: 20px;
  .ima {
    width: 30%;
    margin: auto;
  }
  p {
    margin: 5%;
  }
  justify-content: space-evenly;
  align-content: space-between;
  padding: 10%;
`;
