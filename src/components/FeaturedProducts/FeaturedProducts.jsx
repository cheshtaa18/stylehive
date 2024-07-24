import React from 'react'
import './FeaturedProducts.scss'
import Card from "../Card/Card.jsx";
import axios from "axios"
import { useEffect } from 'react'; 
import {REACT_APP_API_TOKEN, REACT_APP_API_URL, REACT_APP_UPLOAD_URL} from "../../../../client/config.js"
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {
   
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
      );
    
  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, libero id viverra scelerisque, nulla dolor ultrices turpis, non dictum ex. consectetur adipiscing elit. Sed consectetur, libero id viverra scelerisque, nulla dolor ultrices turpis, non dictum ex.
            </p>

        </div>
        <div className='bottom'>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    </div>
  )
}

export default FeaturedProducts;