import React from 'react'
import './Service.css'
import logo from '../../assets/member.jpg'
import {Link} from 'react-router-dom'
const Service = (props) => {
  return (
   <div className='service'>
    <Link to="/" style={{color:"#fff"}} type="button" className="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</Link>
   <h2 className='text-center text-primary pb-3'>You Chose  Category:  {props.value.category.toUpperCase()}</h2>
   <img  src={logo} ></img>
   <p className='text-center text-secondary pt-3'>{props.value.about.toUpperCase()}</p>
   <p className='text-center text-secondary'>Price of Service: {props.value.price}$  </p>
   <p className='text-center text-secondary'>Entrance: {props.value.entrance}$  </p>
   <p className='text-center text-secondary'>Exit: {props.value.exit}$  </p>
   </div>
  )
}

export default Service