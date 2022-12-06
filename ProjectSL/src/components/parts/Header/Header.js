import React, { useState,useEffect, useReducer } from 'react'
import "./Header.css"
import logo from '../../assets/gym-back.jpg'
import { Link } from 'react-router-dom'
import axios from "axios";

const Header = () => {
  const [value,setValue] = useState("");
  const [reducer,forceUpdate] =useReducer(x => x+1, 0 );
  const [data, setData] = useState([]);
  const [data1,setData1] = useState([]);
  const [sortType, setSortType] = useState('albums');

    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:8080/categories.php')
                .then(function (response) {
                    setData1(response.data);
                    setData(response.data);
            });
        }
        fetchData().then();
    }, []);

  useEffect(() => {
    const sortArray = type => {
      const types = {
        price: 'price'
      };
      const sortProperty = types[type];
      const copyarr=[...data1]
      copyarr.sort((a, b) =>{return (value==="asc" ?  a[sortProperty]-b[sortProperty] : b[sortProperty]- a[sortProperty] )});
      setData1(copyarr);
    };
    sortArray(sortType);

  }, [reducer]);
  
  const filterResult =(x) => {
      const result = data.filter((curData)=>{
        return curData.category===x;
      });
      setData1(result);
  }
  
  const handleChange = (e) => {
   
    e.preventDefault()
    setValue(e.target.value);
    setSortType("price")
    forceUpdate()
  }

  return (
    <div className='header'>
      <div className='sort'>
      <h1 className='text-center text-info categoryhead'>SERVICES</h1>
      
    
      </div>
      <div className='container-fuild mx-2'>
        <div className='row mt-5 mx-2'>
          <div className='col-md-3 headerrow'>
              <input type={'text'} placeholder={'search'} style={{color: "white"}}/>
            <button className='btn btn-warning ' onClick={()=>filterResult("Day")}>
              Day
            </button>
            <button className='btn btn-warning ' onClick={()=>filterResult("Week")}>
              Week
            </button>
            <button className='btn btn-warning ' onClick={()=>filterResult("Month")}>
              Month
            </button>
            <button className='btn btn-warning ' onClick={()=>filterResult("Year")}>
              Year
            </button>
            <button className='btn btn-warning' onClick={()=>setData1(data)}>
              All
            </button>
            <select  className='sorting' onChange={ handleChange }   >
      <option value="def"> Sort </option>
       <option   value="asc">Ascending</option>
       <option value="desc">Descending</option>
       
     </select>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              {data1.map((values)=>{
                return(
                  <>
                  <div className='col-md-4' >
                <div className="card" >
                <Link  to={`services${values.id}`} >
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                    <p>Price : {values.price}$</p>
                   
                    <button className="btn btn-primary">Buy Now</button>
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
      </div>
    </div>
  )
}

export default Header