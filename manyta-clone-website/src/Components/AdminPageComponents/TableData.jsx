import { Button, Input, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { deletedata } from "../../redux/AdminReducer/Action";
const TableData = ({
  id,
  brand,
  description,
  size,
  newTag,
  discountedPrice,
  discount,
  gender,
  image,
  dispatch,
}) => {
  const {
    isOpen: isdeleteopen,
    onOpen: ondeleteopen,
    onClose: ondeleteclose,
  } = useDisclosure();
  const {
    isOpen: isupdateopen,
    onOpen: onupdateopen,
    onClose: onupdateclose,
  } = useDisclosure();

  return (
    <>
      <Modal isOpen={isdeleteopen} onClose={ondeleteclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                ondeleteclose();
              }}
            >
              {/* dispatch(deletedata(id)) */}
              Delete
            </Button>
            <Button variant="ghost" onClick={ondeleteclose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* 2ndmodal */}

      <Modal isOpen={isupdateopen} onClose={onupdateclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Brand</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Description</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Size</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>New Tag</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Price</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Discount</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Gender</FormLabel>
              <Input id="email" type="text" />
              <FormLabel>Image</FormLabel>
              <Input id="email" type="text" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onupdateclose}>
              Update
            </Button>
            <Button variant="ghost" onClick={onupdateclose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* 2nd modal */}
      <Tr>
        <Td>{brand}</Td>
        <Td>{description}</Td>

        <Td>{discountedPrice}</Td>
        <Td>{discount}</Td>
        {/* <Td>{category}</Td> */}
        {/* <Td>{image}</Td> */}
        <Td>
          <Button onClick={ondeleteopen}>Delete</Button>
        </Td>
        <Td>
          <Button onClick={onupdateopen}>Update</Button>
        </Td>
      </Tr>
    </>
  );
};

export default TableData;
