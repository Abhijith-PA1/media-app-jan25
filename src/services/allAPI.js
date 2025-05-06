import { commonAPI } from "./commonAPI";
import {Server_url} from "./Server_url";


// uploadVedioAPI

export const uploadVedioAPI=async(video)=>{
    return await commonAPI('POST',`${Server_url}/allVideos`,video)
}



// getAllUploadVedioAPI

export const getAllUploadVedioAPI=async()=>{
    return await commonAPI('GET',`${Server_url}/allVideos`,"")
}

// getAVedioAPI

export const getAVedioAPI=async(id)=>{
    return await commonAPI('GET',`${Server_url}/allVideos/${id}`,"")
}



// deleteVedioAPI

export const deleteVideoAPI=async(id)=>{
    return await commonAPI('DELETE',`${Server_url}/allVideos/${id}`,{})
}



// addHistoryAPI

export const addHistoryAPI=async(video)=>{
    return await commonAPI('POST',`${Server_url}/History`,video)
}

// getHistoryAPI

export const getHistoryAPI=async()=>{
    return await commonAPI('GET',`${Server_url}/History`,"")
}

// deleteHistoryAPI

export const deteteHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${Server_url}/History/${id}`,{})
}


// addCategoryAPI

export const addCategoryAPI=async(category)=>{
    return await commonAPI('POST',`${Server_url}/category`,category)
}

// getCategoryAPI

export const getCategoryAPI=async()=>{
    return await commonAPI('GET',`${Server_url}/category`,"")
}

// deleteCategoryAPI

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${Server_url}/category/${id}`,{})
}

// updateCategoryAPI

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI('PUT',`${Server_url}/category/${id}`,categoryDetails)
}
