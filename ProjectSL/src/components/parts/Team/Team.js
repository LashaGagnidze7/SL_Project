import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Team.css'
import {useEffect} from "react";
import axios from "axios";
import Members from "./Members";
const Team = () => {
  const [works, setWorks] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:8080/members.php')
                .then(function (response) {
                    setWorks(response.data);
                });
        }
        fetchData().then();
    }, []);
  return (
    <div className='Team'>
      <h2 style={{color:"orangered"}} className='text-center  pt-4'>Stuff Members</h2>
      <div className='cont'>
        <div className='row'>
      {works.map((values)=>{
                return(
                  <>
                  <div className='col-md-4' >
                <div className="card" >
                <Link style={{textDecoration: "none"}} className='gymser'  to={`members${values.id}`} >
                  <img src={Members[values.id - 1].image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                   
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

export default Team