import { Box, Flex, Image, Spinner } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/NavBar'
import Footer from "../../Components/Footer"
import { NewSignupform } from '../../Components/LoginPageComponents/NewSignupform';
import { NewLoginform } from '../../Components/LoginPageComponents/NewLoginform';
export const NewloginPage = () => {
    const [checksignuppage,setchecksignuppage]=React.useState(true);
    const [loading,setloading]=React.useState(false);
  return (
    <Box backgroundColor={'rgb(250,240,240)'}>
         <Navbar />
         <Box padding={'8rem 0rem 8rem 0rem'} border={'px solid green'} margin={'auto'}>
            {loading?<Flex  margin={'auto'} justifyContent={'space-evenly'}>
                <img   src="https://media2.giphy.com/media/jAYUbVXgESSti/giphy.gif?cid=ecf05e477kfkcmsxlpbm4cqz2h1spro00a3tg2psla0u1ltg&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="memo"  />
            </Flex>
            :checksignuppage?<NewSignupform setloading={setloading} setchecksignuppage={setchecksignuppage}/>:<NewLoginform setchecksignuppage={setchecksignuppage} setloading={setloading}/>}
         </Box>
         <Footer />
    </Box>
  )
}

