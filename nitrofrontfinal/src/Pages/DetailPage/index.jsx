import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [api, setApi] = useState([])
    const {id} =useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/${id}`)
        .then(res=>res.json())
        .then(data=>setApi(data))
    }, [id])
    
  return (
    <div>
        <i className={api.icon}></i>
        <div>{api.title}</div>
    <div>{api.text}</div>
    </div>
  )
}

export default DetailPage