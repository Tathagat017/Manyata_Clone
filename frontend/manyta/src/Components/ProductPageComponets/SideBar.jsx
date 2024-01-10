import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
  Button,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import { extendTheme } from "@chakra-ui/react";
import { ProductContext } from "../../ContextApi/ProductContext";
const MainLoco = styled.div`
  width: 18%;
    height: 90rem;
      overflow-y: scroll;
  margin-top: 5rem;
position:relative;
border:1px solid rgb(244, 241, 241);
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #333232;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #333232;
    border-radius: 10%;
    width: 8px;
  }
`;

const Main = styled.div`
  width: 100%;

  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  .Gender {
    padding: 2.5%;
  }

  .Categories {
    padding: 2.5%;
  }
  .Brand {
    padding: 2.5%;
  }
  .price {
    padding: 2.5%;
  }

  .discount {
    padding: 2.5%;
  }
  .
`;

export const SideBar = ({initialfilters,toggle,settoggle }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {setfilter,filters,togglefilter,settogglefilter}=React.useContext(ProductContext);

//Gender selection
  const handleChangeGender = (e) => {
    console.log(e.target.value);
    let newGender = [...initialfilters.current.gender];
    const value = e.target.value;
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== e.target.value);
    } else {
      newGender.push(value);
    }
   initialfilters.current.gender=newGender;
   settoggle(!toggle);
  };
  //Category selection
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
    let newItemType = [...initialfilters.current.itemType];
    const value = e.target.value;
    if (newItemType.includes(value)) {
      newItemType = newItemType.filter((el) => el !== e.target.value);
    } else {
      newItemType.push(value);
    }
    initialfilters.current.itemType=newItemType;
   settoggle(!toggle);
  };
 
  //Brand selection
  const handleChangeBrand = (e) => {
    console.log(e.target.value);
    let newBrand = [...initialfilters.current.brand];
    const value = e.target.value;
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== e.target.value);
    } else {
      newBrand.push(value);
    }
    initialfilters.current.brand=newBrand;
   settoggle(!toggle);
  };

  //rating selection
  const handleChangeRating = (e) => {
    console.log(e.target.value);
    let newRating = [...initialfilters.current.rating];
    const value = e.target.value;
    if (newRating.includes(value)) {
      newRating = newRating.filter(
        (el) => el.toString() !== e.target.value.toString()
      );
    } else {
      newRating.push(value.toString());
    }
    console.log("mew", newRating);
    initialfilters.current.rating=newRating;
   settoggle(!toggle);
  };

  //discount selection
  const handleChangeDiscount = (e) => {
    console.log(e.target.value);
    // let newDiscount = initialfilters.current.discount;
    // const value = e.target.value;
    // if (newDiscount.includes(value)) {
    //   newDiscount = newDiscount.filter((el) => el !== e.target.value);
    // } else {
    //   newDiscount.push(value);
    // }
    initialfilters.current.discount=e.target.value;
   settoggle(!toggle);
  };

const handlechangeprice=(e)=>{
let newPrice=[...initialfilters.current.price];
const value=e.target.value.split(",");
// console.log(value.split(","));
if (newPrice.includes(value[0])) {
  newPrice = newPrice.filter((el) => el !== value[0]);
} else {
  newPrice.push(value[0]);
}
if (newPrice.includes(value[1])) {
  newPrice = newPrice.filter((el) => el !== value[1]);
} else {
  newPrice.push(value[1]);
}
initialfilters.current.price=newPrice;
settoggle(!toggle)
}

  // const { value } = style;
  return (
    <MainLoco>
      <Main>
        <h3>
          <b>Filter by</b>
        </h3>
        <Button backgroundColor={'rgb(235,54,123)'} onClick={()=>{setSearchParams({});
        initialfilters.current={
          gender:[],
          itemType:[],
          brand:[],
          rating:[],
          discount:[],
          discountedPrice:"",
          price:[],
        };settoggle(!toggle)
        }}>Clear All Filters</Button>
        <div className="Gender">
          <p>Gender</p>
          <Stack spacing={1} direction={["column"]}>
            <Checkbox
              size="sm"
              colorScheme="teal"
              onChange={handleChangeGender}
              value={"Men"}
              isChecked={initialfilters.current.gender.includes("Men")}
            >
              Men
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="pink"
              value={"Women"}
              onChange={(e) => handleChangeGender(e)}
              isChecked={initialfilters.current.gender.includes("Women")}
            >
              Women
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="red"
              value={"Kids"}
              onChange={(e) => handleChangeGender(e)}
              isChecked={initialfilters.current.gender.includes("Kids")}
            >
              Kids
            </Checkbox>
          </Stack>
        </div>
        <div className="Categories">
          <p>
            <b>Categories</b>
          </p>
          <Stack spacing={1} direction={["column"]}>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"T-shirt"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("T-shirt")}
            >
              T-Shirts
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"Trouser"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("Trouser")}
            >
              Trousers
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"Shoes"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("Shoes")}
            >
              Shoes
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"Watch"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("Watch")}
            >
              Watches
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"Saree"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("Saree")}
            >
              Saree
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"WesternDresses"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("WesternDresses")}
            >
              Western Dress
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"Kurti"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("Kurti")}
            >
              Kurti
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="purple"
              value={"BedRunners"}
              onChange={handleChangeCategory}
              isChecked={initialfilters.current.itemType.includes("BedRunners")}
            >
              Bed Runners
            </Checkbox>
            <Button variant={"unstyled"} color={"purple.900"}>
              +13 More
            </Button>
          </Stack>
        </div>
        <div className="Brand">
          <p>
            <b>Brand</b>
          </p>
          <Stack spacing={1} direction={["column"]}>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"Puma"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("Puma")}
            >
              Puma
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"VASTRAMAY"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("VASTRAMAY")}
            >
              VASTRAMAY
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"Louis Philippe"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("Louis Philippe")}
            >
              Louis Philippe
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"Anouk"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("Anouk")}
            >
              Anouk
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"Roadster"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("Roadster")}
            >
              Roadster
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"Saree mall"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("Saree mall")}
            >
              Saree mall
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"KALINI"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("KALINI")}
            >
              KALINI
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="orange"
              value={"boAt"}
              onChange={handleChangeBrand}
              isChecked={initialfilters.current.brand.includes("boAt")}
            >
              boAt
            </Checkbox>
            <Button variant={"unstyled"} color={"orange.900"}>
              +20 More
            </Button>
          </Stack>
        </div>
        <div className="rating">
          <p>
            <b>Rating</b>
          </p>
          <Stack spacing={2} direction={["column"]}>
            <Checkbox
              size="sm"
              colorScheme="blackAlpha"
              value={4}
              onChange={handleChangeRating}
              isChecked={initialfilters.current.rating.includes("4")}
            >
              <Flex gap={1.5}>
                <BsFillStarFill color="salmon" />
                <BsFillStarFill color="salmon" />
                <BsFillStarFill color="salmon" />
                <BsFillStarFill color="salmon" />
              </Flex>
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="blackAlpha"
              value={3}
              onChange={handleChangeRating}
              isChecked={initialfilters.current.rating.includes("3")}
            >
              <Flex gap={1.5}>
                <BsFillStarFill color="salmon" />
                <BsFillStarFill color="salmon" />
                <BsFillStarFill color="salmon" />
              </Flex>
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="blackAlpha"
              value={2}
              onChange={handleChangeRating}
              isChecked={initialfilters.current.rating.includes("2")}
            >
              <Flex gap={1.5}>
                <BsFillStarFill color="salmon" />
                <BsFillStarFill color="salmon" />
              </Flex>
            </Checkbox>
            <Checkbox
              size="sm"
              colorScheme="blackAlpha"
              value={1}
              onChange={handleChangeRating}
              isChecked={initialfilters.current.rating.includes("1")}
            >
              <Flex gap={1.5}>
                <BsFillStarFill color="salmon" />
              </Flex>
            </Checkbox>
            <Button variant={"unstyled"}>+2 More</Button>
          </Stack>
        </div>
        <div className="price">
          <p>
            <b>Price</b>
          </p>
          <Stack spacing={1} direction={["column"]}>
            <Checkbox isChecked={initialfilters.current.price.includes("200")&&initialfilters.current.price.includes("2000")} onChange={handlechangeprice} value={[200,2000]} size="sm" colorScheme="green">
              Rs.200 - Rs.2000
            </Checkbox>
            <Checkbox isChecked={initialfilters.current.price.includes("2001")&&initialfilters.current.price.includes("4500")} onChange={handlechangeprice} value={[2001,4500]} size="sm" colorScheme="green">
              Rs.2001 - Rs.4500
            </Checkbox>
            <Checkbox isChecked={initialfilters.current.price.includes("4501")&&initialfilters.current.price.includes("8000")} onChange={handlechangeprice} value={[4501,8000]} size="sm" colorScheme="green">
              Rs.4501 - Rs.8000
            </Checkbox>
            <Button variant={"unstyled"} color={"green.900"}>
              +4 More
            </Button>
          </Stack>
        </div>
        <div className="discount">
          <p>
            <b>Discount</b>
          </p>
          <RadioGroup defaultValue={Number(initialfilters.current.discount)}>
          <Stack spacing={1} direction={["column"]}>
          
            <Radio
              size="sm"
              colorScheme="blackAlpha"
              value={10}
              onChange={handleChangeDiscount}
            >
              10% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="red"
              value={20}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount=="20"}
            >
              20% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="blackAlpha"
              value={30}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount.includes=="30"}
            >
              30% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="red"
              value={40}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount.includes=="40"}
            >
              40% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="blackAlpha"
              value={50}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount.includes=="50"}
            >
              50% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="red"
              value={60}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount.includes=="60"}
            >
              60% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="blackAlpha"
              value={"70"}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount.includes=="70"}
            >
              70% and Above
            </Radio>
            <Radio
              size="sm"
              colorScheme="red"
              value={80}
              onChange={handleChangeDiscount}
              isChecked={initialfilters.current.discount.includes=="80"}
            >
              80% and Above
            </Radio>
            
            <Button variant={"unstyled"}>+3 More</Button>
          </Stack>
          </RadioGroup>
        </div>
      </Main>
    </MainLoco>
  );
};
