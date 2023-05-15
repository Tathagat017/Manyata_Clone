import React from 'react'
import { Box, Button, HStack, Image, Input, Stack, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/AuthReducer/Action';
const obbj={"email":"","password":"","name":"","username":""};
export const NewSignupform = ({setchecksignuppage,setloading}) => {
    const [signdetails,setsigndetails]=React.useState({"email":"","password":"","name":"","username":""});
console.log(signdetails);

const dispatch=useDispatch();
const [loading,setloading1]=React.useState(false);
  return (
    <Box  w={"50%"} backgroundColor={'rgb(255,222,222)'} padding={'4%'} paddingTop={'5%'} border={'px solid blue'} margin={'auto'}>
        <HStack w={'100%'} border={'px solid brown'} justifyContent={'space-evenly'}>
    <Box p={'0.3rem'} _hover={{backgroundColor:"pink",color:"green",cursor:"pointer"}} onClick={()=>{setloading(true);
    setTimeout(()=>{
        setchecksignuppage(false);setloading(false);
    },2000)
    
    }} fontWeight={'extrabold'} fontSize={'3xl'}>Login</Box>
    <Box p={'0.3rem'} _hover={{backgroundColor:"pink",color:"green",cursor:"pointer"}} onClick={()=>{setloading(true);
         setTimeout(()=>{
            setchecksignuppage(true);setloading(false);
         },2000)
        }} fontWeight={'extrabold'} fontSize={'3xl'}>SignUp</Box>
        </HStack>
        <Box>
        <Image w={'100%'}  margin={'auto'} border={'px solid brown'} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg' alt="memo" />
        </Box>
       
<VStack rowGap={'1.5rem'}>
    <Box w={'100%'} textAlign={'center'}>Sign up</Box>
    <HStack justifyContent={'space-between'}>
        <Input defaultValue={signdetails.name} onChange={(e)=>{setsigndetails({...signdetails,"name":e.target.value})}} w={'45%'} placeholder={'Name'} type='text' backgroundColor={'white'} />
        <Input defaultValue={signdetails.username} onChange={(e)=>{setsigndetails({...signdetails,"username":e.target.value})}} w={'45%'} placeholder={'UserName'} type={'text'} backgroundColor={'white'}/>
    
    </HStack>
    <HStack justifyContent={'space-between'}>
    <Input defaultValue={signdetails.email} onChange={(e)=>{setsigndetails({...signdetails,"email":e.target.value})}} w={'45%'} placeholder={'Email'} type='text' backgroundColor={'white'} />
        <Input defaultValue={signdetails.password} onChange={(e)=>{setsigndetails({...signdetails,"password":e.target.value})}} w={'45%'} placeholder={'Password'} type={'password'} backgroundColor={'white'}/>
    </HStack>
    <Stack w={'100%'}>
            <Button isLoading={loading}
    loadingText='Signing Up'
    variant='outline' 
    onClick={()=>
    {setloading1(true);dispatch(signup(signdetails))
        .then((res)=>{setloading1(false);setsigndetails(obbj)})
    }} fontWeight={'bold'} fontSize={'xl'} backgroundColor={'rgb(254,82,119)'} _hover={{backgroundColor:"green"}}>Sign Up</Button>
        </Stack>
</VStack>
       </Box>
  
  )
}

