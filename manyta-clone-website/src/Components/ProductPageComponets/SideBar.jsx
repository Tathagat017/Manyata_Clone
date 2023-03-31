import React from "react";

import { useState, useEffect } from "react";

import {
  Accordion,
  Box,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
} from "@chakra-ui/react";

export const SideBar = () => {
  return (
    <Flex direction="column">
      <Accordion allowToggle w={"20vw"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>1000-2000</Checkbox>
              <Checkbox defaultChecked>2000-3000</Checkbox>
              <Checkbox defaultChecked>3000-4000</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>Men</Checkbox>
              <Checkbox defaultChecked>Women</Checkbox>
              <Checkbox defaultChecked>Kids</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Discount
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>30% - 40%</Checkbox>
              <Checkbox>40% - 50%</Checkbox>
              <Checkbox defaultChecked>50% - 60%</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brands
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>Puma</Checkbox>
              <Checkbox>Heutrap</Checkbox>
              <Checkbox>Minions by Kook N Keech</Checkbox>
              <Checkbox>Difference of Opinion</Checkbox>
              <Checkbox>Louis Philippe</Checkbox>
              <Checkbox>Technosport</Checkbox>
              <Checkbox defaultChecked>HRX by Hrithik Roshan</Checkbox>
              <Checkbox defaultChecked>Roadster</Checkbox>
              <Checkbox>Mitera</Checkbox>
              <Checkbox>Anouk</Checkbox>
              <Checkbox>Heutrap</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
