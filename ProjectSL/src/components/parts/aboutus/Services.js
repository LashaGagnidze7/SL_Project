import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
const Services = (props) => {
  return (
    <div className='services1'>
      
      <div className='imgholder'>
      <img src={props.value.image} />
      </div>
      <div className='right-content'>
      
        <h2>{props.value.title}</h2>
        <p><span>About</span>: {props.value.about}</p>
        <p><span>location</span>: {props.value.location}</p>
        <p><span>Working Time</span>: {props.value.working}</p>
      </div>
      <Link to="/aboutus" style={{color:"#fff"}} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </Link>
    </div>
  )
}

export default Services