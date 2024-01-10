import React, { createContext } from "react";
export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [filters,setfilter]=React.useState({});
    const [filter,setfilte]=React.useState(false);
    const [togglefilter,settogglefilter]=React.useState(false);
    const handlefilter=(newfilters)=>{
        setfilter(newfilters);
    }
    const handlefilte=(newfilters)=>{
        setfilter(newfilters);
    }
    return(
        <ProductContext.Provider value={{filters,setfilter,handlefilter,filter,handlefilte,togglefilter,settogglefilter}}>
            {children}
        </ProductContext.Provider>
    )
}