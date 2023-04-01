
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Input
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {useDebounce} from "../../"
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
 const handlechange=(e)=>{
console.log(e.target.value);

 }
 
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex w={'40%'} gap={'5rem'} justifyContent={'space-evenly'}>
           <Link style={{ textDecoration: 'none' }} href={'/adminhome'}><Text  fontSize={'2xl'} fontWeight={'bold'} marginRight={'3rem'}>Home</Text></Link> 
           <Link style={{ textDecoration: 'none' }} href={'/adminfundsorders'}><Text fontSize={'2xl'} fontWeight={'bold'}>Funds</Text></Link>
           <Link style={{ textDecoration: 'none' }} href={'/adminaddproducts'}><Text noOfLines={[1]} fontSize={'2xl'} fontWeight={'bold'}>Add Products</Text></Link> 
           
          </Flex>
         <Flex _hover={{w:'50%'}} w={'30%'} transition={'width 0.5s ease-out'}> <Input onChange={(e)=>handlechange(e)} variant='filled' placeholder='Search Products' /></Flex>
          <Flex alignItems={'center'}>
            <Stack gap direction={'row'} spacing={7}>
              <Button  onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
                           <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'./Logo.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'./Logo.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}