import { Heading, Text, Flex, Link, Grid, Image, Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer";
// import image1 from "../Images/"
import Navbar from "./../../Components/NavBar";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Heading
        size="4xl"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="2rem"
        letterSpacing={"5px"}
      >
        DEAL OF THE DAY
      </Heading>
      <Grid templateColumns={"repeat(6,1fr)"} mt="4rem">
        <Box>
          <Image
            src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/4/97d2ea83-5d2e-4c5f-9fed-1ebe30d0fde51651645841750-Under----399.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0a407da5-e9c9-4b70-842e-e9398d6fea7d1651581839148-Bath---Body-Care.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f514a51-2d55-419c-b856-b6d0853120691651581966456-Indian-Styles.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/79f8457b-a78b-423b-b2bd-5d443d3e44cb1651581997025-Myntra-Unique-T-Shirts.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/1c65ed3d-cba1-4a5f-b0ae-ab4545f940731651582184306-Flats---Heels.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0070e6d7-9d06-49c8-b4f4-135ff74e2d6a1651582325724-Dresses--3-.jpg" />
        </Box>
        {/* <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/c581f602-7ea9-4650-9d1b-0514416886ad1651582184272-Elegant-Watches.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/05aa1723-9e70-49a9-a3f3-1690adb543a41651582184289-Handbags-Collection.jpg" />
        </Box> */}
      </Grid>

      {/* ///////////////// */}
      <Heading
        size="4xl"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        TOP PICKS
      </Heading>
      <Grid templateColumns={"repeat(4,1fr)"}>
        <Box>
          <Image
            src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg" />
        </Box>

        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg" />
        </Box>
      </Grid>
      <Heading
        size="4xl"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        CATEGORIES TO BAG
      </Heading>
      <Grid templateColumns={"repeat(5,1fr)"}>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg"></Image>
        </Box>
      </Grid>
      <Heading
        size="4xl"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        DEALS ON TOP BRANDS
      </Heading>
      <Grid templateColumns={"repeat(5,1fr)"} mt="4rem">
        <Box>
          <Image
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/96b79372-852b-4e41-904a-ffc47f840d171645860227477-SS22-BestOfBrands-Levis.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/ae3f2d8b-4f02-40ab-8233-d9ab9c7be4941645860227438-SS22-BestOfBrands-CKJeans.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg" />
        </Box>
      </Grid>
      <Heading
        size="4xl"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        GIFTING CARDS
      </Heading>
      <Grid templateColumns={"repeat(5,1fr)"} mt="4rem" cursor={"pointer"}>
        <Box>
          <Image
            w={"315px"}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/0b639a7e-20ed-4c37-87b4-279616accc2b1636738225231-house-warming.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Image
            w={"315px"}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/37fe74de-0cb1-4aec-adc1-41c9de64bc431636738225237-farewell.jpg"
          />
        </Box>
        <Box>
          <Image
            w={"315px"}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg"
          />
        </Box>
        <Box>
          <Image
            w={"318px"}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg"
          />
        </Box>
      </Grid>
      <Heading
        size="4xl"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        BEST OF MYNTRA EXCLUSIVE BRANDS
      </Heading>
      <Grid templateColumns={"repeat(6,1fr)"} mt="4rem">
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0070e6d7-9d06-49c8-b4f4-135ff74e2d6a1651582325724-Dresses--3-.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/c581f602-7ea9-4650-9d1b-0514416886ad1651582184272-Elegant-Watches.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/05aa1723-9e70-49a9-a3f3-1690adb543a41651582184289-Handbags-Collection.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/6144fd79-60c2-4a61-9c84-3c75ff5bde5e1651582184281-Premium-Handbags.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/4b4b8940-6dd9-48d7-a93d-db777ffb28d91651582184297-Handbags---Wallets.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/05aa1723-9e70-49a9-a3f3-1690adb543a41651582184289-Handbags-Collection.jpg" />
        </Box>
      </Grid>
      <Footer />
    </div>
  );
};
