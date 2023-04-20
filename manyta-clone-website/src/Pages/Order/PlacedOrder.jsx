import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
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
      {order?.map((el) => {
        return (
          <Card>
            <Flex2>
              <Flex>
                <img src={el.image} className="ima"></img>
                <p>Name:{el.title}</p>
                <p>Quantity:{el.quantity}</p>
                <p>Cost:{el.discountedPrice}</p>
                <p>Placed on :{Date().toString()}</p>
              </Flex>
            </Flex2>
          </Card>
        );
      })}
      <h4>Total cost of order :Rs.{sum}</h4>
      <Footer></Footer>
    </div>
  );
};
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`;

const Flex = styled.div`
  padding: 20px;
  .ima {
    width: 150px;
    margin: auto;
  }
`;

const Flex2 = styled.div`
  padding: 20px;
  display: grid;
`;
