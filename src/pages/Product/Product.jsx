import React from 'react';
import { useState } from "react";
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src= {"http://localhost:1337" + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={"http://localhost:1337" + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} />
        </div>
        <div className='mainImg'>
          <img src={"http://localhost:1337" + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className='right'>
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>Rs.{data?.attributes?.price}</span>
        <p>
          {data?.attributes?.description}
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add' onClick={()=>dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          quantity, 
        }))}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className='item'>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: {data?.attributes?.vendor}</span>
          <span>Product Type: {data?.attributes?.productType}</span>
          <span>Tag: {data?.attributes?.tag}</span>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Product;
