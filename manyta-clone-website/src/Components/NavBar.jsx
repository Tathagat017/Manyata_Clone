import React from "react";
import { Box, Flex, Grid, HStack, Image, Input, Text } from "@chakra-ui/react";
import { Link as myLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const Navbar = () => {
  return (
    <Box position={"sticky"}>
      <Flex alignContent={"center"} justifyContent="space-around" p="10px 0">
        <HStack>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvboJE-N9f8j8Wp7Uua7ITZcX5deD7YVlPw&usqp=CAU"
            width={"50px"}
            mr="10px"
          />
          <div class="dropdown">
            <button class="dropbtn">MEN</button>
            <div class="dropdown-content">
              <div>
                <b style={{ color: "red" }}>Topwear</b>
                <a href="#">T-Shirts</a>
                <a href="#">Casual Shirts</a>
                <a href="#">Formal Shirts</a>
                <a href="#">Sweatshirts</a>
                <a href="#">Sweaters</a>
                <a href="#">Jackets</a>
                <a href="#">Blazers & Coats</a>
                <a href="#">Suits</a>
                <a href="#">Rain Jackets</a>
                <br />
                <b style={{ color: "red" }}>Indian & Festive wear</b>
                <a href="#">Kurtas & Kurta Sets</a>
                <a href="#">Sherwanis</a>
                <a href="#">Nehru Jackets</a>
                <a href="#">Dhotis</a>
              </div>
              <div>
                <b style={{ color: "red" }}>Bottomwear</b>
                <a href="#">Jeans</a>
                <a href="#">Casual Trousers</a>
                <a href="#">Formal Trousers</a>
                <a href="#">Shorts</a>
                <a href="#">Track Pants & Joggers</a>
                <br />
                <b style={{ color: "red" }}>Innerwear & Sleepwear</b>
                <a href="#">Briefs & Trunks</a>
                <a href="#">Boxers</a>
                <a href="#">Vests</a>
                <a href="#">Sleepwear & Loungewear</a>
                <a href="#">Thermals</a>
                <br />
                <b style={{ color: "red" }}>Plus Size</b>
              </div>
              <div>
                <b style={{ color: "red" }}>Footwear</b>
                <a href="#">Casual Shoes</a>
                <a href="#">Sports Shoes</a>
                <a href="#">Formal Shoes</a>
                <a href="#">Sneakers</a>
                <a href="#">Sandals & Floaters</a>
                <a href="#">Flip Flops</a>
                <a href="#">Socks</a>
                <br />
                <b style={{ color: "red" }}>Personal Care & Grooming</b>
                <br />
                <br />
                <b style={{ color: "red" }}>Sunglasses & Frames</b>
                <br />
                <br />
                <b style={{ color: "red" }}>Watches</b>
              </div>
              <div>
                <b style={{ color: "red" }}>Sports & Active Wear</b>
                <a href="#">Sports Shoes</a>
                <a href="#">Sports Sandals</a>
                <a href="#">Active T-shirts</a>
                <a href="#">Track Pants & Shorts</a>
                <a href="#">Tracksuits</a>
                <a href="#">Jackets & Sweatshirts</a>
                <a href="#">Sports Accessories </a>
                <a href="#">Swimwear</a>
                <br />
                <b style={{ color: "red" }}>Gadgets</b>
                <a href="#">Smart Wearables</a>
                <a href="#">Fitness Gadgets</a>
                <a href="#">Headphones</a>
                <a href="#">Speakers</a>
              </div>
              <div>
                <b style={{ color: "red" }}>Fasion Accessories</b>
                <a href="#">Wallets</a>
                <a href="#">Belts</a>
                <a href="#">Perfumes & Body Mists</a>
                <a href="#">Trimmers</a>
                <a href="#">Deodorants</a>
                <a href="#">Ties,Cufflinks & Pocket Squares</a>
                <a href="#">Caps & Hats</a>
                <a href="#">Phone Cares</a>
                <a href="#">Helmets</a>
                <a href="#">Rings & Wristwear</a>
                <a href="#">Scarves & Gloves</a>
                <br />
                <b style={{ color: "red" }}>Indian & Festive wear</b>
                <br />
                <b style={{ color: "red" }}>Bags & Backpacks </b>
              </div>
            </div>
          </div>
          {/* <Text fontSize={"small"} fontWeight="bold">
            MEN
          </Text> */}
          <Text fontSize={"small"} fontWeight="bold">
            WOMEN
          </Text>
          <Text fontSize={"small"} fontWeight="bold">
            KIDS
          </Text>
          <Text fontSize={"small"} fontWeight="bold">
            HOME & LIVING
          </Text>
          <Text fontSize={"small"} fontWeight="bold">
            BEAUTY
          </Text>
          <Text fontSize={"small"} fontWeight="bold">
            STUDIO
            <sup style={{ color: "red" }}>NEW</sup>
          </Text>
        </HStack>
        <HStack>
          <Input
            w={"340px"}
            h="35px"
            placeholder="Search for products,brands and more"
            bg={"#F7F5F2"}
            border="none"
            borderRadius={"3px"}
          />
        </HStack>
        <HStack justifyContent={"space-evenly"} gap="20px">
          <Box>
            <Image
              src="data:image/png;base64,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"
              alt=""
              width={"25px"}
            />
            <Text mt={"0"} fontSize="smaller" fontWeight={"bold"}>
              Profile
            </Text>
          </Box>
          <Box>
            <Image
              src="data:image/png;base64,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"
              width={"25px"}
            />
            <Text mt={"0"} fontSize="smaller" fontWeight={"bold"}>
              Wishlist
            </Text>
          </Box>
          <Box>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBvVUbdJxA475lUy_MPhFqCYZbNwqikM3HQ&usqp=CAU"
              width={"25px"}
            />
            <Text mt={"0"} fontSize="smaller" fontWeight={"bold"}>
              Bag
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
