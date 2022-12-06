import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Register.css'
import {username} from "react-lorem-ipsum";
const Register = () => {
    let history = useNavigate()
    const [data,setData] = useState({
        user_name:"",
        last_name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.name]: e.target.value})
       // console.log(data)
    }
    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            user_name: data.user_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password
        }
        if (data.password.length < 8 || data.password.length > 20) {
            alert('Password should have a length of 8-20!')
        } else {
            axios.post('http://localhost:8080/register.php', sendData)
                .then(function (response) {
                    alert(response.data);
                });
        }
    }
        
    return (
        <div className='main-box'>
            <form onSubmit={submitForm}>
            <div className='row regist'>
                <div className='col-md-12 text-center'><h1>Register</h1>
                </div>
                <div className='row'>
                    <div className='col-md-6' > User Name
                    </div>
                    <div className='col-md-6'>
                        <input type="text" name="user_name" className='form-control'  onChange={handleChange} value={data.user_name} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6' > Last Name
                    </div>
                    <div className='col-md-6'>
                        <input type="text" name="last_name" className='form-control' 
                        onChange={handleChange} value={data.last_name} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6' >Email
                    </div>
                    <div className='col-md-6'>
                        <input type="email" name="email" className='form-control' onChange={handleChange} value={data.email}  required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6' > Password
                    </div>
                    <div className='col-md-6'>
                        <input type="password" name="password" className='form-control' onChange={handleChange} value={data.password}  required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <input type="submit" name="submit" value="Register" className='btn btn-success' />
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register