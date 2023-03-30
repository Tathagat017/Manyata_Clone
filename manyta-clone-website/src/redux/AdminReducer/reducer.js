import { deletedatasuccess, updatedatasuccess,adddatasuccess,datasuccess,failure,request,loginsuccess} from "./ActionTypes";
const initialstate = {
  isrequest: false,
  isauth: false,
  token: "",
  iserror: false,
  products:[],
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case request:return {isrequest:true}
    case datasuccess:return{isrequest:false,products:action.payload}
    case loginsuccess:return{isrequest:false,isauth:true,token:action.payload}
    case adddatasuccess:return{isrequest:false}
    case deletedatasuccess:return{isrequest:false}
    case updatedatasuccess:return{isrequest:false}
    case failure:return{isrequest:false,iserror:true}
    default:
      return state;
  }
};
