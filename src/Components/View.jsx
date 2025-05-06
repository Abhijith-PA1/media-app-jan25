import React, { useEffect, useState } from 'react'
import Vediocard from './Vediocard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadVedioAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const[allVideos,setAllVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)


  useEffect(()=>{
    getAllVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse,setDropVideoResponse])

  const getAllVideos=async()=>{
    const result=await getAllUploadVedioAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }else{
      console.log("API FAILED");
      setAllVideos([])
    }
    
  }

  // console.log(allVideos);

  const dragOver=(e)=>{
    e.preventDefault()  
  }

  const videoDroped=async(e)=>{
    const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData('data'))
    // console.log(videoId,categoryId);
    const {data}=await getCategoryAPI()
    const selectedCategory=data.find(item=>item.id==categoryId)
    // console.log(selectedCategory);
    let result = selectedCategory.AllVideo.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,AllVideo:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res);
    // console.log(res);
    
    
  }


  return (
    <>

    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDroped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={4} lg={3} className='me-5'>
            <Vediocard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
          </Col>

        )):<p className='text-danger fw-bolder'>Nothing to Display</p>
      }
      
    </Row>
      
    </>
  )
}

export default View
