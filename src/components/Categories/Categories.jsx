import React from 'react'
import './Categories.scss'
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img
                src="https://i.pinimg.com/236x/72/83/73/7283737b6cad9095c095362e582eafcb.jpg"
                alt=""
                />
                <button>
                    <Link className="link" to="/products/1">
                    Sale
                    </Link>
                </button>
            </div>
            <div className='row'>
                <img
                src="https://i.pinimg.com/236x/dc/86/d2/dc86d25461c4fedb15c2973db4fdd0c3.jpg"
                alt=""
                />
                <button>
                    <Link className="link" to="/products/1">
                    Women
                    </Link>
                </button>
            </div>
        </div>
        <div className='col'>
        <div className='row'>
                <img
                src="https://i.pinimg.com/236x/36/07/17/360717664e35937e0dd5315ebc4ca3f3.jpg"
                alt=""
                />
                <button>
                    <Link className="link" to="/products/1">
                    New Season
                    </Link>
                </button>
        </div>
        </div>
        <div className='col col-l'>
        <div className='row'>
            <div className='col'>
                <div className='row'>
                    <img
                    src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                        Men
                        </Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    {" "}
                <img
                    src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <button>
                    <Link to="/products/1" className="link">
                    Accessories
                    </Link>
                </button>
                </div>
            </div>
        </div>
        <div className='row'>
            <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Categories