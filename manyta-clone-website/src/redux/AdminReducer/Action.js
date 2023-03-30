import axios from "axios";
import { deletedatasuccess, updatedatasuccess,adddatasuccess,datasuccess,failure,request,loginsuccess} from "./ActionTypes";

export const actionrequest=()=>{
    return{type:request}
}
export const actionloginsuccess=(payload)=>{
    return{type:loginsuccess,payload}
}
export const actiondatasuccess=(payload)=>{
    return{type:datasuccess,payload}
} 
export const actiondeletesuccess=()=>{
    return{type:deletedatasuccess}
}
export const actionadddatasuccess=()=>{
    return{type:adddatasuccess}
}
export const actionupdatedatasuccess=()=>{
    return{type:updatedatasuccess}
}
export const actionfailure=()=>{
    return{type:failure}
}

// api calls
export const getlogin=(obj)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.post(`https://reqres.in/api/login`,obj)
.then((res)=>dispatch(actionloginsuccess(res.data.token)))
.catch((er)=>dispatch(actionfailure()))
}

export const getdata=()=>(dispatch)=>{
    dispatch(actionrequest())
return axios.get(`https://manyta-clone-of-myntra.cyclic.app/products?_page=55&_limit=10`)
.then((res)=>dispatch(actiondatasuccess(res.data)))
.catch((er)=>dispatch(actionfailure()))
}

export const adddata=(obj)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.post(`https://reqres.in/api/login`,obj)
.then((res)=>dispatch(actionadddatasuccess()))
.catch((er)=>dispatch(actionfailure()))
}

export const deletedata=(id)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.delete(`/${id}`)
.then((res)=>dispatch(actiondeletesuccess()))
.catch((er)=>dispatch(actionfailure()))
}

export const updatedata=(id,obj)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.patch(`/${id}`,obj)
.then((res)=>dispatch(actionupdatedatasuccess()))
.catch((er)=>dispatch(actionfailure()))
}









































// api calls