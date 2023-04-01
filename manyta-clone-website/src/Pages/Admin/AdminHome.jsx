import { Box,Flex,Heading,Table,TableCaption,TableContainer,Tbody,Td,Text, Th, Thead, Tr,Input, useDisclosure ,Button, IconButton, Stack} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';
import { getdata, getdataone, updatedata } from "../../redux/AdminReducer/Action";
import TableData from "../../Components/AdminPageComponents/TableData";
import Nav from "../../Components/AdminPageComponents/AdminNavbar";

const initialstate={brand:"",itemType:"",description:"",size:"",discountedPrice:"",discount:"",gender:"",image:""}

export const AdminHome = () => {
  const [data,setdata]=React.useState([]);
  const [page,setpage]=React.useState(1);
  const [trigger,setrigger]=React.useState(true);
  const {products,singledata,isrequest,totallength}=useSelector((store)=>store.AdminReducer);
  const dispatch=useDispatch();

React.useEffect(()=>{
dispatch(getdata(page))
 .then((res)=>setdata(res.payload))
},[trigger,page])
console.log(products.length)



  return (
    

  <>
   <Nav/>
  {/* //pagination */}
  <Stack >
        <Button
         leftIcon={<IoIosArrowBack />} 
         colorScheme='pink' 
         variant='solid'
         position="absolute"
         left={'22%'}
         top={'60%'}
         backgroundColor={'red.800'}
         isDisabled={page===1}
         onClick={()=>setpage(prev=>prev-1)}
        transform={'translate(0%, -50%)'}
        zIndex={2}
         ></Button>
    
      <Button 
      rightIcon={<IoIosArrowForward/>} 
      colorScheme='pink' 
      variant='solid'
      position="absolute"
      backgroundColor={'red.800'}
      right={'0%'}
      top={"60%"}
       isDisabled={page===Math.ceil(totallength/60)}
      onClick={()=>setpage(prev=>prev+1)}
     transform={'translate(0%, -50%)'}
     zIndex={2}
      >{page}</Button>
      
             </Stack>
  {/* //pagination */}
 
  <Box>
    <Box w={'100%'}>
      <Flex>
        <Box w={'22%'}>Filters</Box>
        <Box w={'78%'} h={'600px'} overflowX={'scroll'} overflowY={'scroll'}>
          <Heading>All Products</Heading>
        {isrequest?<img width={'80%'} style={{margin:"auto"}} src="https://media0.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif?cid=ecf05e473acjoco3l6kqx9l638wr8ednj0d9vjil79hlqfni&rid=giphy.gif&ct=g" alt="" />:  <TableContainer>
            <Table   size={'sm'} variant='striped' colorScheme='teal'>
              <TableCaption placement="top">Products in inverntory
             
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Brand</Th>
                  <Th>Description</Th>
                 <Th>Price</Th>
                 <Th>Category</Th>
                 <Th>Image
                 

                 </Th>
                  <Th>Delete</Th>
                  <Th>Update</Th>
                </Tr>
              </Thead>
              <Tbody>
                
                  {products===undefined?<Tr><Td>...loading</Td></Tr>:products.reverse().map((el)=>(
                    <TableData key={el.id} {...el} trigger={trigger} setrigger={setrigger} />
                  ))}
                
              </Tbody>
            </Table>
          </TableContainer>}
        
        </Box>
        {/* <Box w={'25%'}>Funds</Box> */}
      </Flex>
    </Box>
  </Box>
  </>
  )
};


// {
//   "rating": "4.4",
//   "rating_Count": "600",
//   "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17535032/2022/3/24/aafe16ee-6483-40ef-8fae-80e114279b591648122118227-Puma-Men-Tshirts-4991648122117871-1.jpg",
//   "brand": "Puma",
//   "description": "Men 2022 Fan Jersey",
//   "size": "S",
//   "discountedPrice": "Rs. 766",
//   "originalPrice": "Rs. 1299",
//   "discount": "(41% OFF)",
//   "newTag": "SALE",
//   "itemType": "T-shirt",
//   "id": 1,
//   "gender": "Men",
//   "title": "Puma T-shirt"
// }