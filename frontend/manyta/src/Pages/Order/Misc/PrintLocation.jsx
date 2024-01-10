import React from "react";
import {
  Text,
  Flex,
  Image,
  Box,
  useBreakpointValue,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { TiLocation } from "react-icons/ti";
export const PrintLocation = ({ obj }) => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const iconSize = isSmallScreen ? "sm" : "md";
  const imageSize = isSmallScreen ? "70px" : "100px";
  return (
    <Box>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        letterSpacing="wide"
        flexWrap="wrap"
        flexDirection="row"
        border={"1px dotted black"}
        padding={"10px"}
        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <TiLocation size={"60px"} />
        <Text>
          {`${obj.road},
            ${obj.suburb},
            ${obj.neighbourhood},
            ${obj.county},
            ${obj.city} - ${obj.postcode} - ${obj.state},
            ${obj.country}`}
        </Text>
        <Button colorScheme="telegram" variant={"outline"}>
          Edit Address
        </Button>
      </Flex>
    </Box>
  );
};
