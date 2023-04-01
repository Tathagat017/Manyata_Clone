import React from "react";
const useDebounce=(func,delay)=>{
let {current:id}=React.useRef();
    
return()=>{
    id && clearTimeout(id)
    id=setTimeout(()=>{
        func()
    },delay)
}

}