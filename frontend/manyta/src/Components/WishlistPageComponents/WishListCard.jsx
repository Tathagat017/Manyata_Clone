import { Box, Button, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { addwishlist, deletewishlist } from '../../redux/WishListReducer/Action';
const WishListCard = ({props,wptoggle,setwptoggle}) => {
const [wtoggle,setwtoggle]=React.useState(false);
   
const dispatch=useDispatch();
const handlewishlistdelete=()=>{
    dispatch(deletewishlist(props._id,'658dc10269d837c0b61367a3'))
    .then((res)=>setwptoggle(!wptoggle))
    .catch((err)=>console.log(err))
}    
const handleaddtocart=()=>{
    dispatch(deletewishlist(props._id,'658dc10269d837c0b61367a3'));
    dispatch(addwishlist(props._id,'658dc10269d837c0b61367a3'));    
console.log("object");
}
  return (
    <Box border={'1px solid rgb(244, 241, 241)'}>
    
    <Box position={'relative'}><img width={'100%'} src={props.image} alt='error'/>
    <Box position={'absolute'} top={'5%'} right={'5%'} color={'black'} bgColor={'rgb(244, 241, 241)'} cursor={'pointer'} p={'0.3rem'} borderRadius={'2rem'} border={'1px solid rgb(244, 241, 241)'} onClick={handlewishlistdelete}><RxCross1 /></Box>
    </Box>
    <Flex justifyContent={'center'}>{props.title}</Flex>
    <Box display={'flex'} gap={'0.5rem'}>
 <Flex gap={'1rem'} width={'100%'} justifyContent={'center'} p={'1rem 0rem'}>
 <Box ><b>Rs.{props.discountedPrice}</b></Box>
  <Box color={'grey'} textDecoration={'line-through'}>Rs.{props.originalPrice}</Box>
  <Box color={'red'} textDecoration={'line-through'}> ({props.discount}% OFF)</Box>
 </Flex>
</Box>
<Button onClick={handleaddtocart} w={'100%'} borderTop={'1px solid rgb(244, 241, 241)'} p={'1.5rem 0rem'} bgColor={'white'} color={'rgb(255,62,105)'} _hover={{backgroundColor:"rgb(144, 238, 144)"}}>MOVE TO BAG</Button>
    </Box>
  )
}

export default WishListCard