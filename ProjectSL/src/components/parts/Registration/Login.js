import React,{useState} from 'react'
import axios from 'axios'
import './Register.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  let history = useNavigate()
  const [data,setData] = useState({
     
      user_name:"",
      password:""
  })
  const handleChange=(e)=>{
      setData({...data,[e.target.name]: e.target.value})
     // console.log(data)
  }
  const submitForm = (e) =>{
      e.preventDefault();
      const sendData = {
          user_name:data.user_name,
          password:data.password
      }
      axios.post('http://localhost:8080/login.php',sendData)
          .then(function (response) {
              alert(response.data);
          });
      }


  return (
    <div className='main-box login'>
            <form onSubmit={submitForm}>
            <div className='row regist'>
                <div className='col-md-12 text-center'><h1>Login</h1>
                </div>
               
                <div className='row'>
                    <div className='col-md-6' >Username
                    </div>
                    <div className='col-md-6'>
                        <input type="text" id='user_name' name="user_name" className='form-control' onChange={handleChange} value={data.user_name} required  />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6' > Password
                    </div>
                    <div className='col-md-6'>
                        <input type="password" id='password' name="password" className='form-control' onChange={handleChange} value={data.password} required />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <input type="submit" name="submit" value="Login" className='btn btn-success' />
                    </div>
                </div>

            </div>
            </form>
        <button type={'button'} style={{padding: '10px', color: 'red'}}>Login with Google</button>
        <button type={'button'} style={{padding: '10px', color: 'steelblue'}}>Login with Facebook</button>
        </div>
  )
}

export default Login