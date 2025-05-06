import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deteteHistoryAPI, getHistoryAPI } from '../services/allAPI'


function Watchhistory() {

  // get history

  const[history,setHistory]=useState([])

  const getHistory= async()=>{
    const result = await getHistoryAPI()
    // console.log(result);
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API FAILED");
      setHistory([])
      
    }
    
  }

  // console.log(history);

  const removeHistory = async(id)=>{
    await deteteHistoryAPI(id)
    getHistory()
  }
  

  useEffect(()=>{
    getHistory()

  },[])



  return (
    <div>
        <div className='container d-flex justify-content-between mt-5'>
          <h1 className='text-info'>Watch-History</h1>
          <Link to={"/home"} style={{textDecoration:"none" , color:"blueviolet", fontSize:"30px"}}>Back to Home <i class="fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse fa-xl"></i></Link>

        </div>

        <table className='container shadow text-center m-4'>
          <thead className='bg-warning'>
            <tr>
              <th className='p-4'>#</th>
              <th className='p-4'>Vedio Title</th>
              <th className='p-4'>URL</th>
              <th className='p-4'>TimeStamp</th>
              <th className='p-4'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-primary'>
            {
              history?.length>0?history.map((video,index)=>(
              <tr>
                <td className='p-4 text-warning'>{index+1}.</td>
                <td className='p-4 text-light'>{video.title}</td>
                <td className='p-4 '><a className='text-success' href="{video.link}">{video.link}</a></td>
                <td className='p-4' style={{color:"blueviolet"}}>{video.timeStamp} </td>
                <td className='p-4'> <button onClick={e=>removeHistory(video?.id)} className='btn btn-link'><i class="fa-solid fa-trash fa-xl" style={{color:"red"}}></i> </button></td>
              </tr>
              )) : <p className='text-danger fw-bolder'>Nothing To Display</p>
            }
          
          </tbody>
        </table>
      
    </div>
  )
}

export default Watchhistory
