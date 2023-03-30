import { Box,Flex,Heading,Table,TableCaption,TableContainer,Tbody,Td,Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getdata } from "../../redux/AdminReducer/Action";
import TableData from "../../Components/AdminPageComponents/TableData";
import Nav from "../../Components/AdminPageComponents/AdminNavbar";
export const AdminHome = () => {
  const [data,setdata]=React.useState([]);
  const {products}=useSelector((store)=>store.AdminReducer);
  const dispatch=useDispatch();
React.useEffect(()=>{
dispatch(getdata())
 .then((res)=>setdata(res.payload))
},[])
// console.log(products)

  return (
  <><Nav/>
  <Box>
    <Box w={'100%'}>
      <Flex>
        <Box w={'25%'}>Filters</Box>
        <Box w={'70%'} h={'600px'} overflowX={'scroll'} overflowY={'scroll'}>
          <Heading>All Products</Heading>
          <TableContainer>
            <Table   size={'sm'} variant='striped' colorScheme='teal'>
              <TableCaption placement="top">Products in inverntory</TableCaption>
              <Thead>
                <Tr>
                  <Th>Brand</Th>
                  <Th>Description</Th>
                  

                  <Th>Price</Th>
                  <Th>Discount</Th>
                  <Th>Gender</Th>
                  {/* <Th>Image</Th> */}
                  <Th>Delete</Th>
                  <Th>Update</Th>
                </Tr>
              </Thead>
              <Tbody>
                
                  {data.length>0&&products.map((el)=>(
                    <TableData key={el.id} {...el}dispatch={dispatch}/>
                  ))}
                
              </Tbody>
            </Table>
          </TableContainer>
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