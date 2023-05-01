import React from "react";
import {
  BsFillShieldLockFill,
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
  BsPlusLg,
} from "react-icons/bs";
import { useSelector } from "react-redux";

// export const CartCard = ({ product }) => {
//   console.log(product);
//   return (
//     <div>
//       <div key={product.id}>
//         <div className="image-wrapper">
//           <div className="rating">
//             <BsFillStarFill style={{ color: "lightseagreen" }} />
//             {"  "}
//             <b>
//               &nbsp;
//               {product.rating} | {product.rating_Count}
//             </b>
//           </div>
//           <img src={product.image} className="product-image"></img>
//         </div>

//         <p>{product.brand} </p>
//         <p>SubTotal:{product.TotalPriceThisItemInCart}</p>
//       </div>
//     </div>
//   );
// };

import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Select,
  Stack,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 250px;
  :first-child {
    margin-top: 8vh;
  }
  padding: 10%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding-left: 1%;
  padding-right: 1%;
`;

export const CartCard = ({ product, onDelete, item }) => {
  console.log("page");
  const {
    image,
    title,
    quantity,
    discountedPrice,
    TotalPriceThisItemInCart,
    local,
  } = product;

  return (
    <Div>
      <Flex alignItems="center" size={"md"}>
        <Image
          src={image}
          alt={title}
          boxSize="25vh"
          objectFit="cover"
          boxShadow="lg"
          ml={2}
        />
        <Box flex="2" ml={4}>
          <Text fontWeight="black" color="gray.800">
            Item{item + 1}:{title}
          </Text>
          <Text fontSize="md" color="gray.500">
            Quantity: {quantity}
          </Text>
          <Text fontSize="md" color="gray.500"></Text>
          <Text fontSize="md" color="gray.500">
            Price: {discountedPrice}
          </Text>
          <Text fontWeight={"bold"}>
            SubTotal :Rs {TotalPriceThisItemInCart}
          </Text>
        </Box>
        <Stack spacing={3}>
          <Select placeholder="Size" size="sm" Select variant="flushed">
            <option value="option1">S</option>
            <option value="option2">M</option>
            <option value="option3">L</option>
            <option value="option3">XL</option>
          </Select>
        </Stack>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={() => onDelete(item)}
          ml={"2.5vw"}
        >
          <FaTimes />
        </Button>
      </Flex>
    </Div>
  );
};
