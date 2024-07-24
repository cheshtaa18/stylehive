import React from 'react'
import './Card.scss'
import { Link } from "react-router-dom";
import {REACT_APP_API_TOKEN, REACT_APP_API_URL, REACT_APP_UPLOAD_URL} from "../../../../client/config.js"

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className='card'>
        <div className='image'>
        {item?.attributes.isNew && <span>New Season</span>}
        <img src={"http://localhost:1337"+item.attributes?.img?.data?.attributes?.url} alt='' className='mainImg'/>
        <img src={"http://localhost:1337"+item.attributes?.img2?.data?.attributes?.url} alt='' className='secondImg'/>
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className='prices'>
        <h3>Rs.{item?.attributes.price+20}</h3>
        <h3>Rs.{item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card