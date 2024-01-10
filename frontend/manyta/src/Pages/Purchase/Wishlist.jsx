import { Box, Button, Flex } from "@chakra-ui/react";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer.jsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getwishlist } from "../../redux/WishListReducer/Action.js";
import WishListCard from "../../Components/WishlistPageComponents/WishListCard.jsx";
import { MdMenuBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export const WishListPage = () => {
  const {
    isLoading,
    isError,
    totalLength,
    wishlistproducts,
    isaddedrequest,
    isaddedsuccess,
    isaddederror,
    isaddded,
    isdeletedrequest,
    isdeletedsuccess,
    isdeletederror,
    isdeleted
  }=useSelector((state)=>state.WishListReducer);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [wptoggle,setwptoggle]=React.useState(false); 
  React.useEffect(()=>{
    dispatch(getwishlist('658dc10269d837c0b61367a3'));
  },[wptoggle]);
  console.log(wishlistproducts);
  return( 
  <Box>
<Navbar/>
<Box pt={'8rem'} w={'85%'} m={'auto'} border={'0px solid red'}>
  <Flex pl={'2rem'} fontSize={'1.5rem'} fontWeight={'bold'}>My Wishlist {wishlistproducts.length} Products</Flex>
  {wishlistproducts.length>0?
  <Box display={'grid'} gridTemplateColumns={'repeat(4,1fr)'} gap={'2rem'} p={'2rem'}>
  {wishlistproducts.map((el,i)=>(
    <WishListCard wptoggle={wptoggle} setwptoggle={setwptoggle} key={i} props={el}/>
  ))}
  </Box>
  :
  <Box w={'50%'} m={'auto'} border={'1px solid green'} display={'grid'} rowGap={'2rem'}>
  <Flex fontSize={'2rem'} fontWeight={'bold'} justifyContent={'center'}>YOUR WISHLIST IS EMPTY</Flex>
  <Flex color={'grey'}>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</Flex>
  <Flex fontSize={'6rem'} justifyContent={'center'}><MdMenuBook /></Flex>
  <Button onClick={()=>navigate('/products')} w={'70%'} m={'auto'} p={'2rem'} _hover={{bgColor:"pink"}} border={'1px solid blue'} >CONTINUE SHOPPING</Button>
  </Box>
  }
  
</Box>
<Footer/>
  </Box>
  )
};
