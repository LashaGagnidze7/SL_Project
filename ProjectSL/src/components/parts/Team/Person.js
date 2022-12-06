import React from 'react'
import { Link } from 'react-router-dom'
import './Person.css'
const Person = (props) => {
  return (
    <div className='person'>
      
      <div className='imgholder'>
      <img src={props.value.image} />
      </div>
      <div className='right-content'>
      
        <h2>{props.value.title}</h2>
        <p><span>About</span>: {props.value.about}</p>
        <p><span>Service</span>: {props.value.service}</p>
        <p><span>Number</span>: {props.value.number}</p>
        <p><span>Working Time</span>: {props.value.working}</p>
      </div>
      <Link to="/aboutus" style={{color:"#fff"}} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </Link>
    </div>
  )
}

export default Person