import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductReducer/Action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
import { CartModel } from "./CartModal";
import Pagination from "./ProductPagination";
import { ProductContext } from "../../ContextApi/ProductContext";

export const ProductList = ({initialfilters,toggle,settoggle}) => {
  const { products, isLoading, totalLength } = useSelector(
    (state) => state.ProductReducer
  );
 // const { cart } = useSelector((state) => state.CartReducer);
  const {setfilter,filters,togglefilter,settogglefilter}=React.useContext(ProductContext);
  const dispatch = useDispatch();
  const [searchParams, setSeachParams] = useSearchParams();
  const location = useLocation();
  const initialPage = searchParams.getAll("_page");
  const [page, setPage] = useState(initialPage || 1);
  const limitToshow = 16;
  const totalPages = Math.ceil(totalLength / limitToshow);

 

  // const [page, setPage] = useState(0);
  
  //pagination
  const handlePage = (page) => {
    setPage(page);
 // console.log(searchParams.getAll("_page"));
    // console.log(searchParams.getAll("gender"));
  };
  const funcfilterobjvalidparams=()=>{
    let invalidfilters=initialfilters.current;
    let validfilters={};
    if(searchParams.get("q")){
      validfilters.q=searchParams.get("q");
      for(let i in invalidfilters){
        if(invalidfilters[i].length!==0){
          validfilters[i]=invalidfilters[i];
        }
        
      }
      setSeachParams(validfilters);
    }
    else{
      for(let i in invalidfilters){
        if(i!=="q"){
        if(invalidfilters[i].length!==0){
          validfilters[i]=invalidfilters[i];
        }
      }
      }
      setSeachParams(validfilters);
    }
    //setfilter(validfilters);
    return validfilters;
  };
  useEffect(() => {
   let paramObj= funcfilterobjvalidparams();
   // console.log(paramObj,"paramObj");
    dispatch(getProducts(paramObj));
  }, [toggle]);

  return (
    !isLoading && (
      <Box w={'80%'} mt={'6rem'}   border={'0px solid red'} overflow={'hidden'} h={'100%'}>
      <Box  display={'grid'} gridTemplateColumns={'repeat(4,1fr)'} gap={'1.5rem'}>
      
          {products.length > 0 &&
            products?.map((el) => {
              return (
                <div className="Hover" key={el.id}>
                  <ProductCard product={el} />
                  {/* <CartModel product={el} /> */}
                </div>
              );
            })}
      </Box>
        <Box w={'30vw'} m={'auto'} display={'block'}>
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          handlePageChange={handlePage}
        />
      </Box>
      </Box>
    )
  );
};
