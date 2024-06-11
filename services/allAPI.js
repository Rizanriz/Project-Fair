import commonAPI from "./commonApi";    
import SERVERURL from "./serverUrl";

export const registerAPI = async(data)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,data)  
}   