import React, {useState} from 'react'
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.scss"
const Navbar = () => {

  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  return (
    <div className='navbar'>
    <div className='wrapper'>
    <div className='left'>
    <div className='item'>
    <img src='/img/in (2).png' alt=''/>
    <KeyboardArrowDownIcon/>
    </div>
    <div className='item'>
    <span>INR</span>
    <KeyboardArrowDownIcon/>
    </div>
    <div className="item">
      <Link className ="link" to="/products/1">Women</Link>
    </div>
    <div className="item">
      <Link className ="link" to="/products/2">Men</Link>
    </div>
    <div className="item">
      <Link className ="link" to="/products/3">Children</Link>
    </div>
    </div>
    <div className='center'>
      <div><Link className ="link" to="/">STYLEHIVE</Link></div>
    </div>
    <div className='right'>
    <div className="item">
      <Link className ="link" to="/">Homepage</Link>
    </div>
    <div className="item">
      <Link className ="link" to="/">About</Link>
    </div>
    {/* <div className="item">
      <Link className ="link" to="/">Contact</Link>
    </div>
    <div className="item">
      <Link className ="link" to="/">Stores</Link>
    </div> */}
    <div className="icons">
    
    <div className="cartIcon" onClick={()=>setOpen(!open)}>
    <ShoppingCartOutlinedIcon/>
    <span>{products.length}</span>
  </div>
    </div>
    </div>
    </div>
    {open && <Cart/>}
    </div>
  )
}

export default Navbar