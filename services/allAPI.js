import commonAPI from "./commonApi";    
import SERVERURL from "./serverUrl";

export const registerAPI = async(data)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,data)     
}   
export const loginAPI = async(data)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,data)  
}   

//add project
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/project/add`,reqBody,reqHeader)  
}   

// home projects
export const homeProjectAPI = async()=>{
    return await commonAPI("GET",`${SERVERURL}/get-home-projects`,"")  
}  

// user projects
export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-projects`,"",reqHeader)  
}  

// all projects
export const allProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-projects?search=${searchKey}`,"",reqHeader)  
}  

//edit project
export const editProjectAPI = async(pid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/project/${pid}/edit`,reqBody,reqHeader)  
}  

//delete project
export const deleteProjectAPI = async(pid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/project/${pid}/remove`,{},reqHeader)  
}  

//edit user
export const editUserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user/edit`,reqBody,reqHeader)  
} 