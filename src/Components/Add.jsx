import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVedioAPI } from '../services/allAPI';




function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state of add video

  const[uploadVideo,setUploadVideo]=useState({id:"",title:"",url:"",link:""})
  console.log(uploadVideo);

  // vedio url
  const getYouTubeLink = (e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let VID=value.split('v=')[1].slice(0,11)
      // console.log(VID);
      setUploadVideo({...uploadVideo,link:`http://www.youtube.com/embed/${VID}`})
      
    }else{
      setUploadVideo({...uploadVideo,link:""})

    }
  }

  // upload
  const handleAdd=async()=>{
    const{id,title,url,link}=uploadVideo

    if(!id || !title || !url || !link){
      alert("Please fill missing fields")
    }else{
      // upload video to json server
      const result = await uploadVedioAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("video upload")
        handleClose()
        setUploadVideo({id:"",title:"",url:"",link:""})
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }
  

  return (
    <div>
      <div className=' d-flex mb-5 mt-5 align-item-center'>
        <h2>Upload Videos</h2>
        <button onClick={handleShow} className='btn btn-link'><i className="fa-solid fa-arrow-up-from-bracket fa-2xl"></i></button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Vedio Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video Id"
             className="mb-3"
      >
           <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput1"
            label="Enter Video Name"
             className="mb-3" 
      >
           <Form.Control type="text" placeholder="Enter Video Name"  onChange={(e)=>setUploadVideo({...uploadVideo,title:e.target.value})}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput2"
            label="Image URL"
             className="mb-3"
      >
           <Form.Control type="text" placeholder="Image URL"  onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput3"
            label="Video URl"
             className="mb-3"
      >
           <Form.Control type="text" placeholder="Video URl"  onChange={getYouTubeLink}/>
          </FloatingLabel>
          </Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Add
