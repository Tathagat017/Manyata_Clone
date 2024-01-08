import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import React, { useRef } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {getProducts, getsingleproduct} from "../../redux/ProductReducer/Action.js"
import { Box, Button, Flex, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { FiTag } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { ProductCard } from '../../Components/ProductPageComponets/ProductCard.jsx';
const Container=styled.div`
border:0px solid red;

.infodiv{
display:flex;
justify-content:space-between;

gap:1rem;

}
.infodiv{
  .imgdiv{
    display:flex;
justify-content:space-between;
gap:1rem;
  }
}
.nametags{
  color:grey;
  font-size:1rem;
  text-align:start;
  padding-left:1.5rem;
  border:0px solid green;
}
.nametags {
  .nametagsbold{
    font-weight:bold;
    color:black;
  }
}
`
const size=['UK8','UK9','UK4','UK3','UK7'];
export const SingleProductPage = () => {
  const { singlerequest,singleerror,singlesuccess,singleproduct,products } = useSelector((state) => state.ProductReducer);
const dispatch=useDispatch();
 const {id}=useParams();
 const navigate=useNavigate();
 const [stoggle,setstoggle]=React.useState(false);
 const pincode=useRef("");
 const [pin,setpin]=React.useState("");
 const pincodevalid=useRef(false);
const toastpincode=useToast();
const sizeref=useRef(null);
const getreccendations=(res)=>{
  let paramObj={itemType:[res.payload.itemType]};
  console.log(paramObj,"params");
  dispatch(getProducts(paramObj))
}
 React.useEffect(()=>{
dispatch(getsingleproduct(id))
.then((res)=>{getreccendations(res);})
.catch((err)=>console.log(err))
//dispatch(getProducts(paramObj));
window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
},[id]);
console.log(singleproduct,products);
const handlepincode=()=>{
  const regex = /^\d{6}$/;
  let yy= regex.test(pin.toString());
   if(yy){setstoggle(!stoggle);pincodevalid.current=true;}
   else{
    toastpincode({
      title: 'WRONG PINOCDE',
      position: 'top-center',
      description: "Entered a wrong pincode",
      status: 'error',
      duration: 6000,
      isClosable: true,
    });
    setpin("");
  }
}

  return (
    <div>
      <Navbar/>
<Container>
<Box border={'0px solid green'} height={'8rem'}/>
<p className="nametags"><span className="nametagsbold">{singleproduct.brand}/</span>{singleproduct.itemType}/{singleproduct.title}</p>
<div className='infodiv'>
<div className='imgdiv'>
<div><img src={singleproduct.image} alt="error"/></div>
 <div><img src={singleproduct.image} alt="error"/></div>
</div>
<Box w={'50%'} border={'0px solid green'} textAlign={'start'} p={'0rem 2rem 2rem 2rem'}>

<Stack direction={'column'} spacing={2} borderBottom={'1px solid grey'} pb={'2rem'}>
  <Box fontSize={'1.6rem'} fontWeight={'bold'}>{singleproduct.brand}</Box>
  <Box fontSize={'1.2rem'} color={'grey'}>{singleproduct.title}</Box>
  <Stack direction={'row'} spacing={2} border={'1px solid grey'} p={'0.2rem'} w={'fit-content'} >
    <Flex alignItems={'center'} borderRight={'1px solid grey'}>{singleproduct.rating}<Box color={'green'}><FaStar /></Box></Flex>
    <Box color={'grey'}>{singleproduct.rating} k Ratings</Box>
    </Stack>
    
</Stack>


<Stack direction={'row'} spacing={3} mt={'1.5rem'} >
  <Box fontSize={'1.2rem'} fontWeight={'bold'}>₹{singleproduct.discountedPrice}</Box>
  <Box fontSize={'1.2rem'} color={'grey'} textDecoration={'line-through'}>MRP ₹ {singleproduct.originalPrice}</Box>
  <Box fontSize={'1.2rem'} color={'orange'}>({singleproduct.discount} % OFF)</Box>
</Stack>
<Box mt={'0.5rem'} color={'teal'} fontWeight={'semibold'}>Inclusive of all taxes</Box>

{singleproduct.size&&<Stack direction={'column'} spacing={2} m={'1.5rem 0rem'}>
<Stack direction={'row'} spacing={6} >
  <Flex fontSize={'1.2rem'}  fontWeight={'bold'}  >Select Size</Flex>
  <Flex alignItems={'center'} fontSize={'1rem'} color={'red'}  >Size Chart <IoIosArrowForward /></Flex>
</Stack>
<Stack direction={'row'} spacing={2}>
  {size.map((el,i)=>(
<Box key={i} bgColor={sizeref.current==i?"rgb(255,62,105)":"white"} borderRadius={'2rem'} border={'1px solid grey'} padding={'0.5rem'} _hover={{border:"1px solid red",cursor:"pointer"}} onClick={()=>{sizeref.current=i;setstoggle(!stoggle)}}>{el}</Box>
  ))}
  <Box onClick={()=>{sizeref.current=6;setstoggle(!stoggle)}} bgColor={sizeref.current==6?"rgb(255,62,105)":"white"} borderRadius={'2rem'} border={'1px solid grey'} padding={'0.5rem'}>{singleproduct.size}</Box>
</Stack>
</Stack>}
<Stack direction={'row'} spacing={3} pb={'2.5rem'} borderBottom={'1px solid grey'} m={'2.5rem 0rem 0rem 0rem'}>
  <Button w={'40%'} color={'white'} leftIcon={<IoBag />} bgColor={'rgb(255,62,105)'} _hover={{backgroundColor:"green"}} borderRadius={'0.2rem'} p={'1.5rem'}>ADD TO BAG</Button>
<Button w={'30%'} leftIcon={<CiHeart />} borderRadius={'0.2rem'} border={'1px solid grey'} bgColor={'white'} p={'1.5rem'}>WISHLIST</Button>
</Stack>

<Stack direction={'column'} spacing={3} m={'1.5rem 0rem'}>
  <Flex fontSize={'1rem'} fontWeight={'bold'} alignItems={'center'} gap={'1rem'}>DELIVERY OPTIONS <Flex fontSize={'2rem'}><CiDeliveryTruck /></Flex></Flex>
  <Flex border={'1px solid grey'} justifyContent={'flex-start'} w={'fit-content'} pl={'1rem'} alignItems={'center'}> 
  <Input value={pin} isInvalid={false} onChange={(e)=>setpin(e.target.value)} variant='unstyled' w={'60%'}  placeholder='Enter Pincode'/>
  <Box color={'green'} flexGrow={1} fontSize={'1.5rem'}>{pincodevalid.current?<TiTick />:null}</Box>
  {!pincodevalid.current?<Button w={'30%'} color={'red'} bgColor={'white'} onClick={handlepincode}>Check</Button>:null}
  {pincodevalid.current?<Button w={'30%'} color={'red'} bgColor={'white'} onClick={()=>{pincodevalid.current=false;setpin("");setstoggle(!stoggle)}}>Change</Button>:null}
  </Flex>
  <Box color={'grey'} fontSize={'0.7rem'} >Please enter PIN code to check delivery time & Pay on Delivery Availability</Box>
  <Stack direction={'column'} spacing={2}>
    {pincodevalid.current?
    <Stack direction={'column'} spacing={2}>
      <Flex alignItems={'center'} gap={'1rem'} fontWeight={'bold'}><Flex fontSize={'1.5rem'} ><TbTruckDelivery /></Flex>Get it by Tue, Jan 16</Flex>
      <Flex alignItems={'center'} gap={'1rem'} fontWeight={'bold'}><Flex fontSize={'1.5rem'}><FaAddressBook/></Flex>Pay on delivery available</Flex>
      <Flex alignItems={'center'} gap={'1rem'} fontWeight={'bold'}><Flex fontSize={'1.5rem'}><TbArrowsExchange/></Flex>Easy 14 days return & exchange available</Flex>
    </Stack>
    :null}
    <Box color={'grey'}>100% Original Products</Box>
    {!pincodevalid.current?
    <>
    <Box color={'grey'}>Pay on delivery might be available</Box>
    <Box color={'grey'}>Easy 14 days returns and exchanges</Box>
    <Box color={'grey'}>Try & Buy might be available</Box>
    </>
    :null}
  </Stack>
</Stack >


<Stack direction={'column'}spacing={2} borderBottom={'1px solid grey'} pb={'1rem'}>
<Flex fontWeight={'bold'} gap={'1rem'} alignItems={'center'}>BEST OFFERS<Flex><FiTag/></Flex></Flex> 
<Flex>Best Price: <Flex color={'orange'}>Rs.{singleproduct.discountedPrice-200}</Flex></Flex>
<ul>
  <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
  <li>Coupon code: MYNTRA200</li>
  <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
</ul>
<Flex color={'red'} fontWeight={'semibold'}>View Eligible Products</Flex>
<Flex fontWeight={'bold'}>EMI option available</Flex>
<ul>
  <li>EMI starting from Rs.{singleproduct.discountedPrice/12}/month</li>
  </ul>
<Flex color={'red'}>View Plan</Flex>
</Stack>


<Stack direction={'column'} spacing={2} m={'1.5rem 0rem'}>
<Flex fontWeight={'bold'} alignItems={'center'} gap={'1rem'}>PRODUCT DETAILS<Flex fontSize={'1.5rem'}><FaRegAddressCard /></Flex></Flex>
<Flex fontWeight={'bold'}>Type & Description</Flex>
<Stack direction={'column'} spacing={0} >
<Text color={'grey'} margin={'none'}>{singleproduct.itemType}</Text>
<Text color={'grey'} margin={'none'}>{singleproduct.description}</Text>
</Stack>
<Stack>
  <Flex fontWeight={'bold'}>Specifications</Flex>
  <Box display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}gridTemplateRows={'repeat(2,1fr)'} columnGap={'2rem'} rowGap={'1rem'}>
    <Box borderBottom={'1px solid grey'} textAlign={'start'} pb={'0.5rem'}>
      <Flex fontSize={'0.7rem'}>Brand</Flex>
      <Flex>{singleproduct.brand}</Flex>
    </Box>
    <Box borderBottom={'1px solid grey'} textAlign={'start'} pb={'0.5rem'}>
      <Flex fontSize={'0.7rem'}>Item Type</Flex>
      <Flex>{singleproduct.itemType}</Flex>
    </Box>
    <Box borderBottom={'1px solid grey'} textAlign={'start'} pb={'0.5rem'}>
      <Flex fontSize={'0.7rem'}>Title</Flex>
      <Flex>{singleproduct.title}</Flex>
    </Box>
    <Box borderBottom={'1px solid grey'} textAlign={'start'} pb={'0.5rem'}>
      <Flex fontSize={'0.7rem'}>Gender</Flex>
      <Flex>{singleproduct.gender}</Flex>
    </Box>
    
  </Box>
</Stack>
</Stack>
</Box>
</div>
</Container>

<Box mt={'2rem'}><Flex fontSize={'1.5rem'} pl={'1.5rem'} fontWeight={'bold'}>Similar Products</Flex>
<Box display={'grid'} gridTemplateColumns={'repeat(4,1fr)'} p={'1.5rem'} rowGap={'1rem'} border={'0px solid green'}>
{products.length>0&&
products.map((el,i)=>(
  <ProductCard product={el} key={i}/>
))
}
</Box>
</Box>
      <Footer/>
    </div>
  )
};
