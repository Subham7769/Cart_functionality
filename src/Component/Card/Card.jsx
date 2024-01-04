import React from 'react'
import './Card.css'
import { useDispatch } from "react-redux";
import { ADDTOCART,REMOVEFROMCART } from '../../redux/reducer/CartReducer'


const Card = ({item,page}) => {

  const Dispatch = useDispatch();
  
  
  return (
    <div className='Card' key={item.id}>
        <div className='imageContainer'>
            <img src={item.images[0]} alt="" />
        </div>
        <div className='DetailsContainer'>
            <p>Title:{item.title}</p>
            <p>Price:${item.price}</p>
        </div>
        <div className='buttonContainer'>
            <button onClick={()=>{
              Dispatch(page==="home"?ADDTOCART(item):REMOVEFROMCART(item))
              }}>
                {page==="home"?'Add to Cart':'Remove from Cart'}
                </button>
        </div>
    </div>
  )
}

export default Card;