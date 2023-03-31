import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const Wrapper = styled.div`
  .Error {
    width: 90vw;
    height: 70vh;
    margin: auto;
  }
  .Error img {
    width: 65%;
    margin: auto;
  }
`;
export const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="Error">
        <img src={"./Error.jpg"}></img>
        <RouterLink to="/">
          <Button colorScheme="pink" variant="ghost">
            Go To Home Page
          </Button>{" "}
        </RouterLink>
      </div>
    </Wrapper>
  );
};
