import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Works from './Works'
import './AboutUs.css'
const AboutUs = () => {
  const [works, setWorks] = useState(Works);
  return (
    <div><h2 className='text-center text-primary pt-4'>What We Offer</h2>
      <div className='cont'>
        <div className='row'>
      {Works.map((values)=>{
                return(
                  <>
                  <div className='col-md-4' >
                <div className="card" >
                <Link style={{textDecoration: "none"}} className='gymser'  to={`services${values.id}`} >
                  <img src={values.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                    <button className="btn btn-outline-dark">Learn More</button>
                  </div>
                  </Link>
                </div>

              </div>
              </>
                  
                )
              })}
              </div>

      </div>
    </div>
  )
}

export default AboutUs