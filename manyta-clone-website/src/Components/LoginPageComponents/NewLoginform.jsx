import React from 'react'
import { Box, Button, FormControl, HStack, Image, Input, Stack, VStack } from '@chakra-ui/react'
import { login } from '../../redux/AuthReducer/Action';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const NewLoginform = ({setchecksignuppage,setloading}) => {
    const [logdetails,setlogdetails]=React.useState({"email":"","password":""});
console.log(logdetails);
const navigate=useNavigate();
const {token}=useSelector((store)=>store.AuthReducer);
console.log(token);

const dispatch=useDispatch();
const [loading,setloading1]=React.useState(false);
if(localStorage.getItem("token")){
    navigate("/");
}
else if (token){
    localStorage.setItem("token",token);
}
return (
    <Box  w={"50%"} backgroundColor={'rgb(255,222,222)'} padding={'4%'} paddingTop={'5%'} border={'px solid blue'} margin={'auto'}>
        <HStack w={'100%'} border={'2px solid brown'} justifyContent={'space-evenly'}>
    <Box p={'0.3rem'} _hover={{backgroundColor:"pink",color:"green.400",cursor:"pointer"}} onClick={()=>{setloading(true);
     setTimeout(()=>{
        setchecksignuppage(false);setloading(false);
     },2000)
    }} fontWeight={'extrabold'} fontSize={'3xl'}>Login</Box>
    <Box p={'0.3rem'} _hover={{backgroundColor:"pink",color:"green.400",cursor:"pointer"}} onClick={()=>{setloading(true);
       setTimeout(()=>{
        setchecksignuppage(true);setloading(false);
       },2000)
    }} fontWeight={'extrabold'} fontSize={'3xl'}>SignUp</Box>
        </HStack>
        <Box>
        <Image w={'100%'}  margin={'auto'} border={'px solid brown'} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg' alt="memo" />
        </Box>
       
<VStack rowGap={'1.5rem'}>
    <Box w={'100%'} textAlign={'center'}>Login</Box>
   
  <HStack justifyContent={'space-between'}>

   <Input defaultValue={logdetails.email} onChange={(e)=>{setlogdetails({...logdetails,"email":e.target.value})}} w={'45%'} placeholder={'Email'} type='text' backgroundColor={'white'} />
        <Input defaultValue={logdetails.password} onChange={(e)=>{setlogdetails({...logdetails,"password":e.target.value})}} w={'45%'} placeholder={'Password'} type={'password'} backgroundColor={'white'}/>
       
    </HStack>
    <Stack w={'100%'}>
            <Button 
            isLoading={loading}
            loadingText='Logging In'
         variant='outline'
            onClick={()=>
            {setloading1(true);
            dispatch(login(logdetails))
            .then((res)=>{setloading1(false);})
            }} type='submit'  fontWeight={'bold'} fontSize={'xl'} backgroundColor={'rgb(254,82,119)'} _hover={{backgroundColor:"green"}}>Login</Button>
        </Stack>
       
</VStack>
       </Box>
  
  )
}

